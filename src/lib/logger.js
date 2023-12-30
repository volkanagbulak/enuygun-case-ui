class CustomLogger {
  constructor() {}

  logEvent(eventName, eventData) {
    const logEntry = `[${new Date().toISOString()}] [${eventName}]: ${JSON.stringify(eventData)}`;
    console.log(logEntry);
  }
}

module.exports = new CustomLogger();
