// file ini berisi struktur tabel bagaimana data kita disimpan di database

import Sequelize from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Customer = db.define(
  "customer",
  {
    nama: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    email: DataTypes.STRING,
  },
  { freezeTableName: true }
);

export default Customer;

(async () => {
  await db.sync();
})();
