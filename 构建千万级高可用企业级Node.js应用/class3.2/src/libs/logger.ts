import log4js from "log4js";

log4js.configure({
    appenders: {
      console: { type: "console" },
      // file: { type: "file", filename: "all-the-logs.log" },
      // https://github.com/Aigent/log4js-logstash-tcp
      // 通过 tcp 方式输出到 logstash
      elk_learn: {
        type: "log4js-logstash-tcp",
        host: "127.0.0.1",
        port: 5000
      }
    },
    categories: {
      default: { appenders: ["elk_learn"], level: "debug" }
    }
  });
  
  const logger = log4js.getLogger("default");
  logger.level = "debug";

  export default logger