import logger from "pino";

const log = logger({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      // translateTime: "SYS: dd-mm-yyyy, HH:MM:ss",
      // ignore: "pid,hostname,time",
    },
  },
});

export default log;
