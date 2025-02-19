const connection = require("../database/db");
const getAllProduct = (req, res) => {
  const query = `SELECT * FROM products;`;
  // use the query method to execute a query
  connection.query(query, (err, result) => {
    if (err) {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err,
      });
    }
    // result are the data returned by mysql server
    res.status(200).json({
      success: true,
      massage: "All the product",
      results: result,
    });
  });
};

const createNewproduct = (req, res) => {
  const { Product_Name, Image, Description, state_product, Price, Category } =
    req.body;
  const userId = req.token.userId;
  const query = `INSERT INTO products (Product_Name, Description,Image,state_product,Price,Category,userId) VALUES (?,?,?,?,?,?,?);`;
  const data = [
    Product_Name,
    Description,
    Image,
    state_product,
    Price,
    Category,
    userId,
  ];

  connection.query(query, data, (err, results) => {
    if (err) {
      res.status(500).json({
        success: false,
        massage: "Server error",
        err: err,
      });
    }
    // result are the data returned by mysql server
    res.status(200).json({
      success: true,
      massage: "product created",
      results: results,
    });
  });
};

const updateproductById = (req, res) => {
  const { Product_Name, Description, Price } = req.body;
  const id = req.params.id;

  const query = `UPDATE products SET Product_Name=?, Description=?  WHERE id= ?;`;

  const data = [Product_Name, Description, id];

  connection.query(query, data, (err, results) => {
    if (err) {
      return res.status(404).json({
        success: false,
        massage: `Server error`,
        err: err,
      });
    }
    if (results.changedRows == 0) {
      res.status(404).json({
        success: false,
        massage: `The product: ${id} is not found`,
        err: err,
      });
    }
    // result are the data returned by mysql server
    res.status(201).json({
      success: true,
      massage: `product updated`,
      results: results,
    });
  });
};
const getproductByproductname = (req, res) => {
  const Product_Name = req.body;

  const query = `SELECT * FROM products WHERE Product_Name=${Product_Name};`;
  const data = [Product_Name];
  connection.query(query, data, (err, results) => {
    if (err) {
      return res.status(404).json({
        success: false,

        massage: "The Product_Name Not Found",
        err: err,
      });
    }
    //  are the data returned by mysql server
    res.status(200).json({
      succesresults: true,
      results: results,
    });
  });
};

const getproductByuser = (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  const query = `SELECT * FROM products WHERE userId=? and softDelete=0`;
  const data = [userId];

  connection.query(query, data, (err, results) => {
    if (err) {
      return res.status(404).json({
        success: false,
        massage: "The user Not Found",
        err: err,
      });
    }

    //  are the data returned by mysql server
    res.status(200).json({
      success: true,
      massage: `All the products for the user: ${userId}`,

      results: results,
    });
  });
};

//==================================================
const deleteProductById = (req, res) => {
  const id = req.params.id;
  console.log("pasnpsnspdn");
  const query = `DELETE FROM products WHERE id=?;`;
  const data = [id];
  connection.query(query, data, (err, result) => {
    console.log(result);
    if (err) {
      return res.status(500).json({
        success: false,
        massage: "Server Error",
        err: err,
      });
    }
    if (!result.affectedRows) {
      return res.status(404).json({
        success: false,
        massage: `The product: ${id} is not found`,
        err: err,
      });
    }
    // result are the data returned by mysql server
    res.status(200).json({
      success: true,
      massage: `Succeeded to delete product with id: ${id}`,
      results: result,
    });
  });
};
const updateproductByname = (req, res) => {
  const id = req.params.id;
  const query = `UPDATE products SET state_product='pending'  WHERE id= ?;`;

  const data = [id];

  connection.query(query, data, (err, results) => {
    if (err) {
      return res.status(404).json({
        success: false,
        massage: `Server error`,
        err: err,
      });
    }
    if (results.changedRows == 0) {
      res.status(404).json({
        success: false,
        massage: `The product: ${id} is not found`,
        err: err,
      });
    }
    // result are the data returned by mysql server
    res.status(201).json({
      success: true,
      massage: `product updated`,
      results: results,
    });
  });
};

module.exports = {
  getAllProduct,
  createNewproduct,
  updateproductById,
  getproductByproductname,
  getproductByuser,
  deleteProductById,
  updateproductByname,
};
