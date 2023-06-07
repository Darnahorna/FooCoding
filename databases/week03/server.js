const http = require("http");
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "darnahorna",
  password: "qwerty",
  database: "todoapp",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const server = http.createServer((req, res) => {
  const urlParts = req.url.split("/");
  const endpoint = "/" + urlParts[1];
  const id = urlParts[2];

  if (endpoint === "/listItem" && req.method === "POST") addElement();
  else if (endpoint === "/listItem" && req.method === "DELETE") deleteElement();
  else if (endpoint === "/listItem" && req.method === "PUT" && id)
    markComplete();
  else if (endpoint === "/list" && req.method === "POST") addList();
  else if (endpoint === "/list" && req.method === "DELETE") deleteElement();
  else if (endpoint === "/list" && req.method === "PUT" && id) setReminder();
  else {
    res.statusCode = 404;
    res.end("Not Found");
  }

  function display(err, result) {
    if (err) {
      console.error("Error executing query: ", err);
      res.statusCode = 500;
      res.end("Error executing query.");
      return;
    }
    res.statusCode = 201;
    //res.end("Query executed successfully! ");
    res.end(JSON.stringify(result));
  }
  function deleteElement() {
    //handle server request
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const data = JSON.parse(body);

      if (!data) {
        res.statusCode = 400;
        res.end("Invalid request data");
        return;
      }

      data.forEach((item) => {
        getConnection(
          "DELETE FROM todoitem WHERE (idtoDoItem = ?);",
          [item],
          display
        );
      });
    });
  }
  function addElement() {
    //handle server request
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const data = JSON.parse(body);
      data.forEach((item) => {
        getConnection(
          "INSERT INTO todoitem (idtoDoItem, name, description, isCompleted, reminder, listId) VALUES (?, ?, ?, ?, ?, ?);",
          [
            item.idtoDoItem,
            item.name,
            item.description,
            item.isCompleted,
            item.reminder,
            item.listId,
          ],
          display
        );
      });
    });
  }
  function markComplete() {
    let body;
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      getConnection(
        'UPDATE todoitem SET isCompleted = "T" WHERE (idtoDoItem = ?)',
        [id],
        display
      );
    });
  }
  function addList() {
    //handle server request
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const data = JSON.parse(body);
      data.forEach((item) => {
        getConnection(
          "INSERT INTO todolist (idList, listName, created, userId) VALUES (?, ?, ?, ?)",
          [item.idList, item.listName, item.created, item.userId],
          display
        );
      });
    });
  }
  function setReminder() {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      getConnection(
        `UPDATE todolist SET reminder = "${item.reminder}" WHERE (idList = ?);`,
        [id],
        display
      );
    });
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function getConnection(mySqlRequest, parameters, callback) {
  pool.getConnection(function (err, connection) {
    connection.connect((err) => {
      if (err) {
        console.error("Error connecting to the database: ", err);
        return;
      } else {
        console.log("Connected to the database!");
        connection.prepare(mySqlRequest, (err, statement) => {
          statement.execute(parameters, callback);
          statement.close();
        });
      }
    });
    pool.releaseConnection(connection);
  });
}
