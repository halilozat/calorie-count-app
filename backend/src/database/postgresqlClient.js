const {
  Sequelize
} = require('sequelize');

function postgreSQLClient(mediator) {
  try {
    const instance = new Sequelize(process.env.POSTGRESQL_DATABASE_URI, {});

    (async () => {
      await instance.authenticate();
      await instance.sync();
    })()
    
    console.log('Database connected...');

    mediator.emit('db:ready', instance);
  } catch (error) {
    mediator.emit('db:failed');
  }
}


module.exports = postgreSQLClient;