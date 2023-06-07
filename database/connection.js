import Sequelize from 'sequelize' 

const connection = new Sequelize('kanban','root','root', {
    host: 'localhost',
    dialect: 'mysql'
});

export default connection;