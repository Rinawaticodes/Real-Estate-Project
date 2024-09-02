const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../lib/prisma.js");

const register = async (req, res) => {
  //db operation
  const { username, email, password } = req.body;

  try {
    //HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // console.log(hashedPassword);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating user" });
  }
};

const login = async (req, res) => {
  //db operation
  const { username, password } = req.body;
  try {
    //If the use exist
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user)
      return res.status(400).json({ message: " Invalide Credentiel!" });

    //if the password is correct

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(400).json({ message: " Invalide Credentiel!" });

    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: age,
      }
    );

    //generate cookie token send to the user
    // res.setHeader("Set-Cookie", "test=" + "myValue").json("success");
    res
      .cookie("token", token, {
        httpOnly: true,
        // secure:true
        maxAge: age,
      })
      .status(200)
      .json({ message: "login succesful" });
  } catch (err) {
    console.log(first);
    res.status(500).json({ message: "Failed to login" });
  }
};

const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout succesful" });
};

module.exports = { register, login, logout };
