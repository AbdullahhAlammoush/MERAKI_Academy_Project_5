const connection = require("../database/db");
const db = require("../database/db");

const profile = (req, res) => {
  const userId = req.params.userId;
  const query = `select Username,Phone_number,email from user where id=${userId}`;
  const data = [userId];
  connection.query(query, data, (err, result) => {
    if (result) {
      console.log(result);
      res
        .status(200)
        .json({ success: true, message: "User Info", result: result });
    }
  });
};
module.exports = profile;
