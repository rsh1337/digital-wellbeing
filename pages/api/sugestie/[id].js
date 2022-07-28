import { getSession } from "next-auth/react";
import dbConnect from "../../../lib/dbConnect";
import Sugestie from "../../../models/Sugestie"

export default async function handler(req, res) {
  const session = await getSession({ req });
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();
  if (session) {
    switch (method) {
      case "GET":
        try {
          const sugestie = await Sugestie.findById(id);
          if (!sugestie) {
            return res.status(404).json({ success: false });
          }
          res.status(200).json({ success: true, data: sugestie });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
        case "PUT":
            try {
              const verifySugestie = await Sugestie.findByIdAndUpdate(id, req.body, {
                new: true,
                runValidators: true,
              });
              if (!verifySugestie) {
                return res.status(400).json({ message: 'Sugestia nu a putut fi verificata/editata' });
              }
              res.status(200).json({ messagee: 'success', data: verifySugestie });
            } catch (error) {
              res.status(400).json(error);
            }
            break;
      case "DELETE":
        try {
          const deleteSugestie = await Sugestie.deleteOne({ _id: id });
          if (!deleteSugestie) {
            return res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: {} });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  } else {
    switch (method) {
      case "GET":
        try {
          const sugestie = await Sugestie.findById(id);
          if (!sugestie) {
            return res.status(404).json({ success: false });
          }
          res.status(200).json({ success: true, data: sugestie });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  }
}