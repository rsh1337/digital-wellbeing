import bcrypt from "bcryptjs";
import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import Invitation from "../../models/Invitation"
export default async function handler(req, res) {
  const { method } = req;
  const { email, password, name, invitation } = req.body;
  const saltRounds = 10;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        var checkEmail = await User.findOne({ email });
        if (checkEmail) {
          console.log("Email Already Exists");
          return res.status(400).json({
            message: "Emailul exista deja",
          });
        }
        var invitationDuplicateCheck = await User.findOne({ invitation });
        if (invitationDuplicateCheck) {
          console.log("Invitation already used");
          return res.status(400).json({
            message: "Invitatia a fost folosita.",
          });
        }
        var invitationExistCheck = await Invitation.findOne({ invitation });
        if (!invitationExistCheck) {
          console.log("Invitation Dosent Exist");
          return res.status(400).json({
            message: "Invitatie invalida.",
          });
        }
        var user = new User({
          email,
          password,
          name,
          invitation
        });
        if (!user.password){
          console.log("No Password")
          return res.status(400).json({
            message: "Scrie o parola.",
          });
        }
        if (!user.email.includes("@")){
          console.log("Invalid Email")
          return res.status(400).json({
            message: "Scrie un email valid.",
          });
        }
        if (!user.name){
          console.log("No Name")
          return res.status(400).json({
            message: "Scrie un nume.",
          });
        }
        const salt = bcrypt.genSaltSync(saltRounds);
        user.password = await bcrypt.hashSync(password, salt);

        await user.save();
        return res.status(200).json({ msgsg: 'success' });
      } catch (error) {
        return res.status(500).send(error);
      }
      break;
    default:
      res.status(422).send("data_incomplete");
      break;
  }
}