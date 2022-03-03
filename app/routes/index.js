export default (app) => {
  app.use("/api/v1", require("./test.js").default);
};