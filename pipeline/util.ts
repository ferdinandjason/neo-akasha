import fs = require("fs");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function dumpFile(fileName: string, data: any) {
  fs.writeFile(fileName, JSON.stringify(data), () => {console.log("Generated JSON at: ", fileName);});
}
