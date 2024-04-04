export const alignText = ({ width, value, customFont, size, x }) => {
    const textWidth = customFont.widthOfTextAtSize(value, size);
    const alignedX = width - textWidth - x;
    return alignedX;
};
