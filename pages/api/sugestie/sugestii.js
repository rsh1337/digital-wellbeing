import dbConnect from '../../../lib/dbConnect'
import Sugestie from '../../../models/Sugestie'

export default async function handler (req, res) {
    const { method } = req
  
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
      default:
        res.status(400).json({ success: false })
        break
    }
  }