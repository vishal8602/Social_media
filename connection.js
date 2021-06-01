const Sequelize=require('sequelize')

const db = new Sequelize('socialmedia', 'vishal1', 'Vp@8602260185', 
{
  host: 'localhost',
  dialect:'mysql' 
});

db.authenticate();
try{
  console.log('Connection has been established successfully.');

} catch (error) {
  console.error('Unable to connect to the database:', error);
}

 exports.db=db;
 exports.Sequelize=Sequelize;
//console.log(module);