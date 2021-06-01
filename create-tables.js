const {db}=require('./connection')
const{Sequelize}=require('./connection')

const COL_ID_DEF = {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
}
const COL_USERNAME_DEF = {
    type: Sequelize.DataTypes.STRING(30),
    unique: true,
    allowNull: false
}
const COL_TITLE_DEF = {
    type: Sequelize.DataTypes.STRING(140),
    allowNull: false
}

const users = db.define('user', {
    id: COL_ID_DEF,
    username: COL_USERNAME_DEF
})

const posts = db.define('post', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false
    }
})

const comments = db.define('comment', {
    id: COL_ID_DEF,
    title: COL_TITLE_DEF,
    body: {
        type: Sequelize.DataTypes.TEXT('tiny')
    }
})

db.sync()
.then(function(){
	console.log('database tabel has been created successfully.');
})
.catch(console.error)

module.exports={
	db,
	users,
	posts,
	comments
}

