// dateChange

import moment from './moment';

// функция, которая форматирует дату в необходимый формат с помощью moment
export function dateFormat(format) {
  return moment().format(format);
}
