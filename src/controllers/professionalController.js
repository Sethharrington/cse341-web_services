const mongodb = require("../database/connect");

const getProfessionals = async (req, res) => {
  const result = await mongodb
    .getDatabase()
    .collection("Professionals")
    .find({});
  result
    .toArray()
    .then((professionals) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(professionals[0]);
    })
    .catch(() => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ error: "Failed to retrieve professionals" });
    });
};

module.exports = {
  getProfessionals,
};
