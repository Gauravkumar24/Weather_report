export const padNumber = n => {
  if (n < 10) {
    return '0' + n;
  }
  return n;
};

export const formatAMPM = date => {
  if (!date) {
    return '';
  }
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = padNumber(hours);
  minutes = padNumber(minutes);
  let strTime = hours + ':' + minutes + ' ' + ampm;

  return strTime;
};

export const getDay = {
  0: 'SUN',
  1: 'MON',
  2: 'TUE',
  3: 'THUS',
  4: 'FRI',
  5: 'SAT',
};
