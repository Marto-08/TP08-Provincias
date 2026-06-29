import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const LOG_FILE_PATH = process.env.LOG_FILE_PATH || "./logs";
const LOG_FILE_NAME = process.env.LOG_FILE_NAME || "application.log";
const LOG_TO_FILE_ENABLED = String(process.env.LOG_TO_FILE_ENABLED).toLowerCase() === "true";
const LOG_TO_CONSOLE_ENABLED = String(process.env.LOG_TO_CONSOLE_ENABLED).toLowerCase() === "true";

const logDirectory = path.resolve(LOG_FILE_PATH);
const logFilePath = path.join(logDirectory, LOG_FILE_NAME);

if (LOG_TO_FILE_ENABLED && !fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

export const logError = (error) => {
  const timestamp = new Date().toISOString();
  const message = error?.message || String(error);
  const stack = error?.stack || "";
  const logMessage = `[${timestamp}] ERROR: ${message}\n${stack}\n\n`;

  if (LOG_TO_CONSOLE_ENABLED) {
    console.error(logMessage);
  }

  if (LOG_TO_FILE_ENABLED) {
    try {
      fs.appendFileSync(logFilePath, logMessage, "utf8");
    } catch (writeError) {
      console.error("Error al escribir en el archivo de log:", writeError);
    }
  }
};
