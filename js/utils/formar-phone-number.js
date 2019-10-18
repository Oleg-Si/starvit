export const formatNumber = (value) => {
  if (value === null || value === undefined) {
    return null;
  }

  if (value.includes(',')) {
    const numbers = value.split(',').map(formatNumber);
    return (numbers) ? numbers.join(', ') : '';
  }

  value = value.match(/[0-9]/g);

  value = (value) ? value.join('') : '';

  if (value.length === 10) {
    value = '7' + value;
  } else if (value.length === 11 && value[0] === '8') {
    value = '7' + value.substr(1, 12);
  }

  return value.toString().replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/, '+7 ($2) $3-$4-$5');
};

export { formatNumber as default };
