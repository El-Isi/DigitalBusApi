export const fixTextSize = (item) => {
  const { value, lengths, newLines, size } = item;
  if (newLines && value.length > lengths.slice(-1)) {
    const fragmentLength = lengths.slice(-1);
    const newValue = value.replace(new RegExp(`(.{1,${fragmentLength}}\\s+|$)`, 'g'), '$1\n');
    return { newValue, newSize: size };
  } else {
    let fixSize = size;
    lengths.map((someLength) => {
      if(value.length > someLength) fixSize = fixSize - 1;
    });
    return { newSize: fixSize, newValue: value };
  }
};
