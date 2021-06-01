async function getRandomName(){
	const first=['Felecia','Laquita','Gennie','Joan','Kristel','Antione','Diane','Un','Miesha','Fredricka','Montes'];
const last=['Jacobs','Hodge','Graham','Bridges','Suarez','Keith','Mathews','Mccoy','Walker','Ortiz','Montes','Mcdaniel'];

let x=parseInt(Math.random()*10);
let y=parseInt(Math.random()*10);

let user=`${first[x]}-${last[y]}`;
return await user;
}
exports.getRandomName=getRandomName;