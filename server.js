const express=require("express")
const { router }=require("./routes/characters.routes")
//const {logger}=require("./middleware/middle.log")
const config=require("./config/index")
const app = express();

app.use(express.json());
app.use("/api",router)
// TODO: use the imported router to handle all requests

app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
