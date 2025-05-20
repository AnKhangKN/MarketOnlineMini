const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // Đọc JSON body từ request
app.use(express.urlencoded({ extended: true })); // Đọc dữ liệu form

module.exports = app;
