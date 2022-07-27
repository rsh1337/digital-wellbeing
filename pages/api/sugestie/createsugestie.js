import Sugestie from "../../../models/Sugestie";
import dbConnect from "../../../lib/dbConnect";

export default async function handler (req, res) {
  const { method } = req;
  const {titlu, descriere, poze} = req.body
  await dbConnect();
    switch (method) {
      case "POST":
        try {
            var sugestie = new Sugestie({
              titlu,
              descriere,
              poze
            })
          await sugestie.save();
          return res.status(201).json({ msgsg: 'success' });
        } catch (error) {
          res.status(400).json(error);
        }
        break;
      default:
        res.status(422).send("data_incomplete");
        break;
    }
  res.end();
};