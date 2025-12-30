export const logger = {
  info(messages: string) {
    console.log(`[INFO]: ${messages}`);
  },
  error(messages: string) {
    console.log(`[ERROR]: ${messages}\x1b[0m`);
  },
  success(messages: string) {
    console.log(`[SUCCESS]: ${messages}\x1b[0m`);
  },
};
