const {getRandomName}=require('./random-user');
const {db}=require('./connection');
const {users}=require('./create-tables');
const{Sequelize}=require('./connection');

let username1;
async function createuser()
{
	username1= await getRandomName();

	users.create({
		username:username1
	})
	return username1;
}


async function findUserNameByName(username)
{
	

	let x=await users.findAll({
		where:{
			username
		}
	})
	console.log(x);
	return x;
	
}


async function findUserNameById(id)
{
	
	let x= await users.findAll({
		where:{
			id
		}
	})
	console.log(x);
	return x;
}


exports.createuser = createuser;
exports.findUserNameByName = findUserNameByName;
exports.findUserNameById =findUserNameById;



