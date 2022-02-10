const connection = require("../database/db");
const db = require("../database/db");

const profile = (req, res) => {
  const { Username } = req.params.Username;
  const query = `select * from user where Username=${Username}`;
  const data = [Username];
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
