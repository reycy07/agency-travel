import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.DB_URL,
    {
    define:{
        timestamps: false
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

export default db;