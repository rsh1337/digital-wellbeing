import dbConnect from '../../../lib/dbConnect'
import Sugestie from '../../../models/Sugestie'

export default async function handler (req, res) {
    const { method } = req
    const {titlu, descriere, poze} = req.body
    await dbConnect()
  
    switch (method) {
      case 'GET':
        try {
          const sugestii = await Sugestie.find({})
          res.status(200).json({ success: true, sugestii: sugestii })
        } catch (error) {
          res.status(400).json({ success: false })
        }
        break
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
        res.status(400).json({ success: false })
        break
    }
  }