import { PKPass } from 'passkit-generator';
import fs from 'fs';
import path from 'path';

class IOSPassGenerator {
    private wwdrPath: string;
    private signerCertPath: string;
    private signerKeyPath: string;
    private certPassword: string;
    private passTemplatePath: string;

    constructor() {
        this.wwdrPath = path.join(__dirname, 'certificates', 'AppleWWDRCAG4.pem');
        this.signerCertPath = path.join(__dirname, 'certificates', 'CertificatesCert.pem');
        this.signerKeyPath = path.join(__dirname, 'certificates', 'Certificates.pem');
        this.certPassword = 'isidro';
        this.passTemplatePath = path.join(__dirname, 'model', 'boardingPass.pass');
    }

    public async generatePass(passData: any): Promise<Buffer> {
        try {
            console.log('Generating wallet pass...');
            console.log({ model: this.passTemplatePath, });

            const pass = await PKPass.from({
                model: this.passTemplatePath,
                certificates: {
                    wwdr: fs.readFileSync(this.wwdrPath),
                    signerCert: fs.readFileSync(this.signerCertPath),
                    signerKey: fs.readFileSync(this.signerKeyPath),
                    signerKeyPassphrase: this.certPassword,
                }
            }, passData);

            const passBuffer = await pass.getAsBuffer();
            const outputPath = path.join(__dirname, 'miPase.pkpass');

            // Escribe el Buffer en el sistema de archivos
            fs.writeFileSync(outputPath, passBuffer);

            console.log(`Pase guardado en: ${outputPath}`);

            return passBuffer;
        } catch (error) {
            console.error('Error generating wallet pass:', error);
            throw error;
        }
    }
}

export default IOSPassGenerator;
