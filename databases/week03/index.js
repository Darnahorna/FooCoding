const http = require("http");
const mysql = require("mysql2");

// Create a MySQL connection
const pool = mysql.createPool({
  host: "localhost",
  user: "darnahorna",
  password: "qwerty",
  database: "todoapp",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Connect to the database

// Create an HTTP server
const server = http.createServer((req, res) => {
  console.log("REQUEST URL");
  console.log(req.url);

  const urlParts = req.url.split("/");
  const endpoint = "/" + urlParts[1];
  const id = urlParts[2];

  if (endpoint === "/listItem" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      console.log("CHUNK" + chunk);
      body += chunk;
    });

    req.on("end", () => {
      // Parse the request body
      const newList = JSON.parse(body);

      console.log("TEST");
      console.log(newList);

      // Perform a query to insert the new user into the database

      newList.forEach((item) => {
        connection.query(
          "INSERT INTO todoapp.todoitem (idtoDoItem, name, description, isCompleted, reminder, listId) VALUES (?, ?, ?, ?, ?, ?);",
          [
            item.idtoDoItem,
            item.name,
            item.description,
            item.isCompleted,
            item.reminder,
            item.listId,
          ],
          (err, result) => {
            if (err) {
              console.error("Error inserting the list item: ", err);
              res.statusCode = 500;
              res.end("Error inserting the list item");
              return;
            }
            res.statusCode = 201;
            res.end("List item created successfully");
          }
        );
      });
    });
  } else if (endpoint === "/listItem" && req.method === "DELETE") {
    inner(req, res);
  } else if (endpoint === "/listItem" && req.method === "PUT" && id) {
    let body = "";
    req.on("data", (chunk) => {
      console.log("CHUNK" + chunk);
      body += chunk;
    });

    req.on("end", () => {
      // Parse the request body

      connection.query(
        `UPDATE todoitem SET isCompleted = "T" WHERE (idtoDoItem = ?)`,
        [id],
        (err, result) => {
          if (err) {
            console.error("Error editing the list: ", err);
            res.statusCode = 500;
            res.end("Error editing the list");
            return;
          }
          res.statusCode = 201;
          res.end("List item editing successfully");
        }
      );
    });
  } else if (endpoint === "/list" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      console.log("CHUNK" + chunk);
      body += chunk;
    });

    req.on("end", () => {
      // Parse the request body
      const list = JSON.parse(body);

      console.log("TEST");
      console.log(list);
      // Perform a query to insert the new user into the database

      if (!list) {
        res.statusCode = 400;
        res.end("Invalid request data");
        return;
      }

      list.forEach((item) => {
        connection.query(
          "INSERT INTO todolist (idList, listName, created, userId) VALUES (?, ?, ?, ?)",
          [item.idList, item.listName, item.created, item.userId],
          (err, result) => {
            if (err) {
              console.error("Error inserting the list: ", err);
              res.statusCode = 500;
              res.end("Error inserting the list");
              return;
            }
            res.statusCode = 201;
            res.end("List item inserted successfully");
          }
        );
      });
    });
  } else if (endpoint === "/list" && req.method === "DELETE") {
    let body = "";
    req.on("data", (chunk) => {
      console.log("CHUNK" + chunk);
      body += chunk;
    });

    req.on("end", () => {
      // Parse the request body
      const deleteList = JSON.parse(body);

      console.log("TEST");
      console.log(deleteList);

      // Perform a query to insert the new user into the database

      deleteList.forEach((item) => {
        connection.query(
          "DELETE FROM todolist WHERE (idList = ?);",
          [item],
          (err, result) => {
            if (err) {
              console.error("Error deleting the list item: ", err);
              res.statusCode = 500;
              res.end("Error deleting the list item");
              return;
            }
            res.statusCode = 201;
            res.end("List item deleted successfully");
          }
        );
      });
    });
  } else if (endpoint === "/list" && req.method === "PUT" && id) {
    console.log("endpoint", endpoint);
    console.log("id", id);

    let body = "";
    req.on("data", (chunk) => {
      console.log("CHUNK" + chunk);
      body += chunk;
    });

    req.on("end", () => {
      // Parse the request body
      const list = JSON.parse(body);

      console.log("TEST");
      console.log(list);
      // Perform a query to insert the new user into the database

      list.forEach((item) => {
        console.log("item", item);
        connection.query(
          `UPDATE todolist SET reminder = "${item.reminder}" WHERE (idList = ?);`,
          [id],
          (err, result) => {
            if (err) {
              console.error("Error editing the list: ", err);
              res.statusCode = 500;
              res.end("Error editing the list");
              return;
            }
            res.statusCode = 201;
            res.end("List item editing successfully");
          }
        );
      });
    });
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function inner(req, res) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    // Parse the request body
    const deleteList = JSON.parse(body);
    deleteList.forEach((item) => {});
  });
}
function getConnection() {
  pool.getConnection(function (err, connection) {
    // Do something with the connection
    connection.connect((err) => {
      if (err) {
        console.error("Error connecting to the database: ", err);
        return;
      } else {
        console.log("Connected to the database!");
        connection.prepare(
          "DELETE FROM todoitem WHERE (idtoDoItem = ?);",
          (err, statement) => {
            statement.execute([item], callback);
            statement.close();
          }
        );
      }
    });

    // Don't forget to release the connection when finished!
    pool.releaseConnection(connection);
  });
}

function display(err, result) {
  if (err) {
    console.error("Error: ", err);
    res.statusCode = 500;
    res.end("Error");
    return;
  }
  res.statusCode = 201;
  res.end("Success");
}
