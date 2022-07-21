const EquipeRoute = require("./EquipeRoute");
const HomeRoute = require("./HomeRoute")

const contextPath = process.env.CONTEXT_PATH;

module.exports = (app) => {
   app.use(contextPath, EquipeRoute);
   app.use(contextPath, HomeRoute);
}