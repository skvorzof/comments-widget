const key = 'comments'; // Ключ для localStorage

export const getDataStore = () => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const setDataStore = (data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
