export default {
    database: "books",
    username: "",
    password: "",
    params: {
        dialect: 'sqlite',
        logging: false,
        freezeTableName: true,
        operatorsAliases: false,
        storege: `${process.env.NODE_ENV}_books.sqlite`,
        define: {
            underscored: true
        }
    }
}