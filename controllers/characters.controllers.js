const query = require("../db/utils");
const findAll=async()=>{
    return query("SELECT character_name, race, class,level,health_points FROM MOCK_DATA")
};
const findOne = async (character_name) => {
    return query("SELECT character_name, race, class, level,health_points FROM MOCK_DATA WHERE character_name = ?", [character_name]);
};
const addOne = async (character) => {
    return await query("INSERT INTO MOCK_DATA SET ?", [character]);
};

const updateOne = async (character_name, character) => {
    return await query("UPDATE MOCK_DATA SET ? WHERE character_name = ?", [
    character,
    character_name,
    ]);
};

const removeOne = async (character) => {
    return await query("DELETE FROM MOCK_DATA ? WHERE character_name = ?", [character]);
};

module.exports = {
    findAll,
    findOne,
    addOne,
    updateOne,
    removeOne,
};