/*const Koa = require('Koa');
const json = require('koa-json');
const Koa_router = require('koa-router');*/

import Koa from 'koa';
import Koa_router from 'koa-router';
//import '@babel/polyfill';
import body_parser from 'koa-bodyparser'
import json from 'koa-json'


const port = 3100;
const app = new Koa();
const router = new Koa_router();

//using body parser as a middle ware

app.use(body_parser());

//to use koa json in the module
app.use(json());

//to use routers in the mosule
app.use(router.routes()).use(router.allowedMethods());

//using simple middleware
//app.use(async ctx => (ctx.body = { Text: "Welcome to KOA" }));


//CRUD==> Create, Read, Update and delete

var data = [
    { "id": 1, "name": "Mayank" },
    { "id": 2, "name": "Alsi" },
]

//using routers
//READ
router.get("/", ctx => (ctx.body = { Text: "Welcome to KOA" }));
router.get("/home", read);

//Crate
router.post('/add', add);

//update
router.put('/update', update);

//delete
router.delete('delete', deleted);

async function read(ctx) {
    ctx.body = data;
}



async function add(ctx) {
    var userInput = ctx.request.body;
    console.log(userInput);
    data.push(userInput);
    ctx.body = "Element added";
}



app.listen(port, () => console.log("server is running..."));