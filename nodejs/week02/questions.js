import { createInterface } from "readline";
import { stdin, stdout } from "process";
import { addNew, updateFields, display, getById } from "./controllers.js";
/**
 * Ask an asynchronous question to the user and get the answer from stdin
 *
 * @param {string} query
 * @returns {Promise.<string>}
 */

const main = async () => {
  const resourceName = await question(
    "Enter the resource name (users or posts): "
  );
  const method = await question(
    "Enter the HTTP method (DELETE, GET, PATCH, POST): "
  );

  switch (method.toUpperCase()) {
    case "GET": {
      const operation = await question(
        "Choose operation: 1 - Get all, 2 - Get by ID: "
      );
      switch (operation) {
        case "1": {
          await display(resourceName, method);
          break;
        }
        case "2": {
          const resourceId = await question("Enter the resource ID: ");
          await display(resourceName + "/" + resourceId, method);
          break;
        }
        default:
          console.log("Invalid operation selected.");
          break;
      }
      break;
    }
    case "DELETE": {
      const resourceId = await question("Enter the resource ID: ");
      await display(resourceName + "/" + resourceId, method);
      break;
    }
    case "PATCH": {
      const resourceId = await question("Enter the resource ID: ");

      const body = await updateFields(resourceName + "/" + resourceId);
      await display(resourceName + "/" + resourceId, method, body);

      break;
    }
    case "POST": {
      const body = await addNew(resourceName);
      await display(resourceName, method, body);
      break;
    }
    default: {
      console.log("Invalid operation selected. Try again.");
      main();
      break;
    }
  }
};

main();
