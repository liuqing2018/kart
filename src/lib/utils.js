/**
 * Created by tudou on 2020/4/10 18:40.
 */
export const getLocal = (key) => {
  if (localStorage[key] && localStorage[key] !== null) {
    return JSON.parse(localStorage[key]);
  }
  return '';
};

export const setLocal = (key, data) => {
  if (isEmpty(data)) {
    return;
  }
  localStorage[key] = JSON.stringify(data);
};

export const isEmpty = (value) => {
  if (value === '' || value === null || value === undefined) {
    return true;
  }
  return false;
};
