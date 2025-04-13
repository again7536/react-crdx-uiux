const Logger = {
  warn: (message: string) => {
    if (import.meta.env.NODE_ENV !== 'development') return;
    console.warn(message);
  },
  error: (message: string) => {
    if (import.meta.env.NODE_ENV !== 'development') return;
    console.error(message);
  },
};

export default Logger;
