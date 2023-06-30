import { getResponse } from "./api.js";
import { createInterface } from "readline";
import { stdin, stdout } from "process";
/**
 * Ask an asynchronous question to the user and get the answer from stdin
 *
 * @param {string} query
 * @returns {Promise.<string>}
 */
export const question = async (query) => {
  const readline = createInterface({
    input: stdin,
    output: stdout,
  });

  return new Promise((resolve) => {
    readline.question(query, (answer) => {
      readline.close();
      resolve(answer);
    });
  });
};

export async function display(resource, method, body) {
  try {
    const response = await getResponse(resource, method, body);
    console.log(response);
    console.log("Response: Operation is successful");
  } catch (error) {
    console.log("Error occurred:");
    console.log(error.data);
  }
}
export async function getById(resource) {
  try {
    const response = await getResponse(resource, "GET");
    return response;
  } catch (error) {
    return;
  }
}
export async function updateFields(resource) {
  try {
    const element = await getById(resource);
    if (element) {
      let obj = {};
      let requestKeys = Object.keys(element).slice(1);

      for (const key of requestKeys) {
        const field = await question(
          `Enter the ${key}. (curr. is ${element[key]}) `
        );
        if (field) {
          obj[key] = field;
        } else {
          obj[key] = element[key];
        }
      }
      return obj;
    } else {
      return;
    }
  } catch (error) {
    console.error("An error occurred while updating fields:", error);
  }
}
export async function addNew(resource) {
  try {
    let obj = {};

    const response = await getResponse(resource, "GET");

    let requestKeys = Object.keys(response[0]).slice(1);

    for (const key of requestKeys) {
      let field = await question(`Enter the ${key}: `);
      while (!field) {
        field = await question(`Field ${key} cannot be empty. Enter ${key}:`);
      }
      obj[key] = field;
    }
    return obj;
  } catch (err) {
    console.error(`An error occurred while adding new ${resource}:`, err);
  }
}
