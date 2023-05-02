const express= require("express");
const characters =require("../controllers/characters.controllers");

const router = express.Router();

router.get("/:character_name?", async (req, res, next) => {
  let { character_name } = req.params;
  let data;

  if (character_name) {
    data = await MOCK_DATA.findOne(character_name);
  } else {
    data = await MOCK_DATA.findAll();
  }

  res.json(data);
});

router.post("/", async (req, res, next) => {
  let characterDTO = req.body;
  let data = await MOCK_DATA.addOne(characterDTO);
  res.json(data);
});

router.put("/:character_name", async (req, res, next) => {
  let { character_name } = req.params;
  let characterDTO = req.body;
  let data = await MOCK_DATA.updateOne(character_name, characterDTO);
  res.json(data);
});

router.delete("/:character_name", async (req, res, next) => {
  let { character_name } = req.params;
  let data = await MOCK_DATA.removeOne(character_name);
  res.json(data);
});

module.exports=router;