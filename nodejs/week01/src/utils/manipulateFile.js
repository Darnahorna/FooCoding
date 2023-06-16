"use strict";

import { readFile, writeFile } from "node:fs/promises";

async function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    readFile(filePath, "utf-8")
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export async function writeFileAsync(filePath, data) {
  return new Promise((resolve, reject) => {
    writeFile(filePath, JSON.stringify(data), { encoding: "utf8" })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export async function readAndProcessFile(filePath) {
  try {
    const fileData = await readFileAsync(filePath, "utf8");
    return JSON.parse(fileData);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
