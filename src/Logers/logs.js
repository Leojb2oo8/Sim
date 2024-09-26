import fs from "fs";
import { logName } from "../variables.js";

export function openLogFile(name = logName) {
  fs.writeFile(`./Logs/${name}`, "", (err) => {
    if (err) throw err;
  });
}

export function writeInFile(data, logLocation = logName) {
  let txt = "";
  switch (typeof data) {
    case "string":
    case "number":
      txt = `${data}\n`;
      break;
    case "object":
      txt = Array.isArray(data)
        ? data.map((item) => `${JSON.stringify(item)}\n`).join("")
        : `${JSON.stringify(item)}\n`;
      break;
  }

  fs.appendFileSync(`./Logs/${logLocation}`, txt);
}
