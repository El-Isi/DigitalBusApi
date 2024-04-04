const fs = require('fs').promises;
import fontkit from '@pdf-lib/fontkit';
import { StandardFonts } from 'pdf-lib'

export const fontFormat = async (pdfDoc, font) => {
  let fontBytes;
  switch (font) {
    case 'Poppins':
      fontBytes = await fs.readFile('./fonts/poppins/Poppins-Light.otf');
      break;
    case 'Poppins-Bold':
      fontBytes = await fs.readFile('./fonts/poppins/Poppins-Bold.otf');
      break;
    default:
      return await pdfDoc.embedFont(StandardFonts[font]);
  }
  pdfDoc.registerFontkit(fontkit);
  return await pdfDoc.embedFont(fontBytes);
}

export default fontFormat;
