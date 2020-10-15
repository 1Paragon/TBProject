const { json } = require("body-parser");
const { Router, response } = require("express");
const router = Router();
router
.route("/:id")
      .get((_request, response) => {
        const id = request.params.id;
        const posts = db.get("posts").getByID(id).value();
       if (post) {
         response.json(post);
       } else {
         response.status(404).json({message: "Not Found"}
       };
       })
        patch(request, response) => {
          const id = request.params.id;
          const post = db.get("posts").updateById(id, request.body).write();
          response.json(post)
        });
       }
      })
      //.post((request, response) => {
        // notice that request.body is already valid JSON!
        const post = db.get("posts").insert(request.body).write();
        //response.json(post);
      });

.delete((request, response) => {
  const id = requestl.params.id;
  const post - db.get("posts").removeById(id);
  .write();
  if (post) {
    response.;json(post);
  } else {

  }
  }
})


    module.exports = router;
