import moment from 'moment';

export function maskDate(value) {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/, '$1/$2');
  value = value.replace(/(\d{2})(\d)/, '$1/$2');
  value = value.replace(/(\d)(\d{4})$/, '$1/$2');
  return value;
}

export const dateFormater = (date, inputFormat, outputFormat) => {
  return moment(date, inputFormat).format(outputFormat);
};

//------------------------------------------------------------------------------------------------------------------

export const getDisableDays = (month, year, schedule) => {
  const days = {};
  const date = new Date(Date.UTC(year, month, 1));

  while (date.getUTCMonth() === month) {
    const day = getDateISOFormat(date);
    if (!schedule[day]) {
      days[day] = { disabled: true, disableTouchEvent: true };
    }

    date.setUTCDate(date.getUTCDate() + 1);
  }

  return days;
};

export function sortSchedule(schedules) {
  const days = convertToTimestamp(schedules);
  const sorted = days.sort(numberCompare);
  return convertToDate(sorted);
}

function convertToTimestamp(schedules = {}) {
  let days = [];

  for (let day in schedules) {
    const timestamp = new Date(day).getTime();
    days.push(timestamp);
  }

  return days;
}

function convertToDate(schedules = []) {
  let days = [];

  for (let day of schedules) {
    const date = getDateISOFormat(day);
    days.push(date);
  }

  return days;
}

function numberCompare(a, b) {
  return a - b;
}

export const getAllDaysOfMonth = (month, year) => {
  const date = new Date(Date.UTC(year, month, 1));
  const days = [];

  while (date.getUTCMonth() === month) {
    days.push(new Date(date));
    date.setUTCDate(date.getUTCDate() + 1);
  }

  return days;
};

export const getDateISOFormat = date => {
  const dateISO = new Date(date).toISOString();
  return dateISO.slice(0, 10); //YYY-MM-DD
};

export function timestamp(date) {
  return moment(date).unix(); // String
}

export const dateFormat = date => {
  try {
    const dateSplit = new Date(date).toISOString().split('T');

    const hour = dateSplit[1].replace(':00.000Z', '');
    let dateSplited = dateSplit[0].split('-');

    const day = dateSplited[2];
    const month = dateSplited[1];
    const year = dateSplited[0];

    dateSplited = `${day} / ${month} / ${year}`;
    return `${dateSplited} às ${hour}h`;
  } catch (error) {
    // console.log(error);
  }
};

export const getDateBRFormat = date => {
  try {
    const dateSplit = new Date(date).toISOString().split('T');
    const dateSplited = dateSplit[0].split('-');

    const day = dateSplited[2];
    const month = dateSplited[1];
    const year = dateSplited[0];

    return `${day} / ${month} / ${year}`;
  } catch (error) {
    // console.log(error);
  }
};

export const getYear = date => {
  return date.toISOString().slice(0, 4);
};

export const getMonth = date => {
  const month = date.toISOString().slice(5, 7);
  return month;
};

export const getDay = date => {
  return date.toISOString().slice(8, 10);
};

export const dateObjectFormat = date => {
  try {
    const split = date.toISOString().split('/');

    const day = split[0];
    const month = split[1];
    const year = split[2];

    return new Date(`${year}-${month}-${day}`);
  } catch (error) {
    // console.log(error);
  }
};

export const getTime = date => {
  try {
    const dateSplit = date.toISOString().split('T');
    return dateSplit[1].slice(0, 5);
  } catch (error) {
    // console.log(error);
  }
};

export const getFormatedHorary = horary => {
  const hours = horary.substring(0, 2);
  const minutes = horary.substring(3, 5);

  return minutes === '00' ? hours + 'h' : hours + 'h' + minutes;
};

export const getNow = () => {
  try {
    // * 60 * 3
    return new Date(Date.now() - 60 * 1000);
  } catch (error) {
    // console.log(error);
  }
};

export const formatTime = time => {
  const [hour, minute] = time.split(':');
  return `${hour}:${minute}`;
};

export const weekDay = id => {
  switch (Number(id)) {
    case 0:
      return 'Domingo';
    case 1:
      return 'Segunda-Feira';
    case 2:
      return 'Terça-Feira';
    case 3:
      return 'Quarta-Feira';
    case 4:
      return 'Quinta-Feira';
    case 5:
      return 'Sexta-Feira';
    case 6:
      return 'Sábado';

    default:
      undefined;
  }
};
