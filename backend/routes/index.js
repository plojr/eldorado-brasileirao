const HomeRoute = require("./HomeRoute")
const EquipeRoute = require("./EquipeRoute");
const PartidaRoute = require("./PartidaRoute")

const contextPath = process.env.CONTEXT_PATH;

module.exports = (app) => {
   app.use(contextPath, HomeRoute);
   app.use(contextPath, EquipeRoute);
   app.use(contextPath, PartidaRoute);
}