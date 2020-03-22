let express = require('express');
let app = express();
let prs = require('body-parser');
let studmas = [];

app.use(prs.json());

app.get('/students',function (req,res,next){
res.send(studmas);
next();
})

app.get('/students/:ind', function (req,res){
console.log(req.params);
let std = studmas.find(function(std){
return std.id === Number(req.params.ind)
})
res.send(std);
});

app.post('/students',(req,res)=>{
console.log('добавление пользователя');

let std = {
id:req.body.id,
firstName:req.body.firstName,
lastName:req.body.lastName,
group:req.body.group,
createdAt:req.body.createdAt,
updatedAT:req.body.updatedAT,
age:req.body.age,
}

studmas.push(std);
res.send(studmas);
});

app.put('/students/:ind', function (req,res){
console.log('обновление пользователя');
let std = studmas.find(function(std){
return std.id === Number(req.params.ind)
});

str.firstName=req.body.firstName;
str.lastName=req.body.lastName;
str.group=req.body.group;
str.updatedAT=req.body.updatedAT;
str.age=req.body.age;
console.log(std);

res.sendStatus(200);
});

app.delete('/students/:ind', function (req,res){
console.log('удаление пользователя');
studmas = studmas.filter(function(studmas){
return studmas.id !== Number(req.params.ind)
});
res.sendStatus(200)
});


app.listen(8080);