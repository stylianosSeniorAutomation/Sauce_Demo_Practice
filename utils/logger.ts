export const logger = {
  info(messages: string) {
    console.log(`[INFO]: ${messages}`);
  },
  error(messages: string) {
    console.log(`[ERROR]: ${messages}`);
  },
  success(messages: string) {
    console.log(`[SUCCESS]: ${messages}`);
  },
};
