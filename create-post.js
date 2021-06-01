const {getRandomName}=require('./random-user');
const {db}=require('./connection');
const {posts}=require('./create-tables');
const{Sequelize}=require('./connection');

let username1;
async function createpost(userid,title,post)
{

	const post1 =await posts.create({
		id: userid,
		title:title,
		body:post
	})
	return post1;
}

async function findPostByName(username)
{
	

	return await posts.findone({
		where:{
			username
		}
	})
	
}


async function findPostNameById(id)
{
	
	return await posts.findAll({
		where:{
			id
		}
	})
}

//console.log(await createpost(1,'newpost','i donyt want to post shit here'));
exports.createpost=createpost;
exports.findPostByName=findPostNameByName;
exports.findPostById=findPostById;