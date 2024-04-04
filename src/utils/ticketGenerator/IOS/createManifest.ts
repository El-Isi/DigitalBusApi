import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';

// Tipado para la estructura del manifiesto.
interface Manifest {
  [filename: string]: string;
}

const generateManifest = (files: string[], outputPath: string): void => {
  let manifest: Manifest = {};

  files.forEach(file => {
    const filePath = path.join(outputPath, file);
    const fileBuffer = fs.readFileSync(filePath);
    const hash = crypto.createHash('sha1').update(fileBuffer).digest('hex');
    manifest[file] = hash;
  });

  const manifestPath = path.join(outputPath, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 4));
  console.log(`Manifest generated at: ${manifestPath}`);
};

// Define la ruta al directorio que contiene tus archivos del pase y la lista de archivos.
const outputPath = './dist/utils/ticketGenerator/IOS/model/boardingPass.pass'; // Actualiza esto con la ruta a tus archivos de pase.
const files = ['icon.png', 'icon@2x.png', 'logo.png', 'pass.json']; // Añade todos los archivos que componen tu pase.

generateManifest(files, outputPath);
