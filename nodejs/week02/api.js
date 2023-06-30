import axios from "axios";

const baseUrl = process.env.URL ?? "http://127.0.0.1:3000/";

export const getResponse = (resource, method, body = null) => {
  return new Promise((resolve, reject) => {
    axios
      .request({
        method: method,
        url: baseUrl + resource,
        data: body,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.response.data.message);
        reject(error);
      });
  });
};
