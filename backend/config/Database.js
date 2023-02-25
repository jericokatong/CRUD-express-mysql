// File ini untuk membuat koneksi ke database
import sequelize from "sequelize";

const db = new sequelize("crud_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: true,
  },
  timezone: "+08:00",
});

export default db;
