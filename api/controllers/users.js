const User = require("../models/user");
const { generateToken } = require("../lib/token");

// const createUser = (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   const firstName = req.body.firstName;
//   const lastName = req.body.lastName;

//   const user = new User({ email, password, firstName, lastName});
//   user
//     .save()
//     .then((user) => {
//       console.log("User created, id:", user._id.toString());
//       res.status(201).json({ message: "OK", userId: user._id.toString() });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(400).json({ message: "Something went wrong" });
//     });
// };

const getAllUsers = async (req, res) => {
  const users = await User.find();
  const token = generateToken(req.user_id);
  res.status(200).json({ users, token });
};


const createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save(); 

  const newToken = generateToken(req.user_id);
  res.status(201).json({ message: "User created", token: newToken });
};


const getProfile = async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Profile fetched successfully", user });
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateProfile = async (req, res) => {
  const userId = req.params.userId;
console.log(req.body)
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const updatedUser = await User.findByIdAndUpdate(
              userId,
              {
                $set: req.body,
              },
              { new: true }
            );
    

    res.status(200).json({ message: "Profile updated successfully", updatedUser });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// export const updateProfile = async (req, res, next) => 
//      {
//       const updatedUser = await User.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: req.body,
//         },
//         { new: true }
//       );
//       res.status(200).json(updatedUser);
//     } catch (error) {
//       next(error);
//     }
//    {
//     return next(createError(403, "You can update only your account!"));
//   };

const UsersController = {
  getAllUsers,
  createUser,
  getProfile,
  updateProfile,
};

module.exports = UsersController;