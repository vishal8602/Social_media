const {getRandomName}=require('./random-user')
const {createuser,findUserNameByName,findUserNameById}=require('./create-user');

const express=require('express');
const app=express();

app.get('/user',async function(req,res)
{
  const user= await createuser();
  if(user)
  {
  	res.send("User created successfully\n"+user);
  }
  else{
      res.send("Not able to create user now try agin later\n");
  }

})

app.use('/',express.static('/home/vishal/Desktop/Learning_web/Bootstrap'));

app.get('/:id',async function(req,res)
{
  
	let user;
	if(isNaN(parseInt(req.params.id)))
	{
		 user= await findUserNameByName(req.params.id);
	}
	 else{
	 	user= await findUserNameById(req.params.id);
	 }
   if(user)
  {
  	res.send( user[0].username);
  }
  else{
      res.send("Not able to find user now try agin later\n");
  }

})


app.listen(4444,function(){
	console.log('server started on http://localhost:4444')
})