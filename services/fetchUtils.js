export const randomDelay = (ms = 1000) => {
  const delay = Math.floor(Math.random() * 2000 + 500);
  return x => {
    return new Promise(resolve => setTimeout(() => resolve(x), ms));
  };
};
