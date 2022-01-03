export const debounce = (func, delay = 100) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args), delay;
    });
  };
};

export const throttle = (func, delay = 100) => {
  let allowed = true;
  return (...args) => {
    if (allowed) {
      func(...args);
      allowed = false;
      setTimeout(() => (allowed = true), delay);
    }
  };
};
