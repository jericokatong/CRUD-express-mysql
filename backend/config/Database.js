// File ini untuk membuat koneksi ke database
import sequelize from "sequelize";

const db = new sequelize("crud_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
