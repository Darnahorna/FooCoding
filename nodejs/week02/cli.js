import { parseArgs } from "node:util";
//import { question } from "./questions.js";
import { display, updateFields, question, addNew } from "./controllers.js";

const options = {
  resource: { type: "string" },
  method: { type: "string" },
  id: { type: "string" },
  all: { type: "boolean" },
};

const { values, tokens } = parseArgs({
  options,
  tokens: true,
  strict: false,
});

async function generateBody(values) {
  switch (values.method) {
    case "PATCH": {
      const body = await updateFields(values.resource + "/" + values.id);
      return body;
    }
    case "POST": {
      const body = await addNew(values.resource + "/" + values.id);
      return body;
    }
    default:
      return null;
  }
}
const body = await generateBody(values);

display(values.resource + "/" + values.id, values.method, body);
