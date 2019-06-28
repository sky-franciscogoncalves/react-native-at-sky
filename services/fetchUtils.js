export const randomDelay = ms => {
  const delay = ms || Math.floor(Math.random() * 1500 + 500);
  return x => {
    return new Promise(resolve => setTimeout(() => resolve(x), delay));
  };
};
