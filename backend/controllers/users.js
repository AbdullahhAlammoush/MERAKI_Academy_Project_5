const connection = require("../database/db");

const bcrypt = require("bcryptjs");
const saltRounds = 10;

const createNewUser = async (req, res) => {
  const { Username, Phone_number, Password, Email} = req.body;

  const encryptedPassword = await bcrypt.hash(Password, saltRounds);

  const query = `INSERT INTO user (Username, Phone_number, password, Email) VALUES (?,?,?,?)`;
  const data = [ Username, Phone_number, encryptedPassword, Email ];
  connection.query(query, data, (err, results) => {
    if (err) {
      res.status(409).json({
        success: false,
        massage: "The email already exists",
        err: err,
      });
    }
    
    res.status(200).json({
      success: true,
      massage: "User has been added successfully",
      results: results,
    });
  });
};

module.exports = {
    createNewUser,
};