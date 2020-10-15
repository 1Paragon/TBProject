const express = require {express};
const morgan = require("morgan");
const app = express();
const id = request.params.id {};

const body-parser = require("body-parser");
const posts = require("./routers/posts");
const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`)
  next()
}
 console.log(logging);
const authors = require("./routers/authors");
const { ok } = require("assert");
const { response } = require("express");
const posts = db.get("posts").value();
ok(response, posts)
})
const post = db.get("posts".insert(request.body).write();
response.json(post)
});

app.listen(4040, () => console.log("Listening on port 4040"));

app
 .use(logging);
 //use this ln to replace logging
 //app.use(morgan('dev'));
 .route("/posts/:id")
 .get((request, response) => {
 })
.patch((request, response) => {
  });
  .delete((request, response)) => {
  });
 response.json({ message: "HELLO WORLD" });
})
.post ((request, response)
=> {
//eslint-disable-next-line prettier
response.json(request.body)
});
//app.route("/posts/:id").get((request, response) => {
  //const id = request.params.id;
//response.status(200).json({ message: "HELLO WORLD" });
//});

//const logging = (request, response, next) => {
//console.log(`s{request.method} ${request.url} ${Date.now()}`);
//next();
//};

app.listen(8675, () =>
console.log('Listening on port 8675'));
app.use(bodyParser.json()).use(morgan("dev"));
