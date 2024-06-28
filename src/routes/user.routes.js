const { Router } = require("express");
const UsersController = require("../controllers/UsersController")

const usersRoutes = Router();

function MyMiddleware(request, response, next) {
  console.log('Você passou pelo middleware!');
  if(!request.body.isAdmin) {
    return response.status(401).json({ message: "user unauthorized"});
  }
  next();
}

const userController = new UsersController();

usersRoutes.post("/", MyMiddleware, userController.create);

module.exports = usersRoutes;