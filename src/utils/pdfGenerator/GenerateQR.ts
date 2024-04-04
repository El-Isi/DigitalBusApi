import * as QRCode from 'qrcode';

export const generateQrCode = async (data: any) => {
  const qrImage = await QRCode.toBuffer(data.qrData, {
    type: 'png',
    color: {
      dark: '#000',
      light: '#0000'
    },
  });
  return qrImage;
}
