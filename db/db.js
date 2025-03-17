import { Sequelize } from "sequelize";

export default new Sequelize("crud", "root", "admin", {
  dialect: "mysql",
  host: "localhost",
});
