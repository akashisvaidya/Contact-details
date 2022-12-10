import UserSchema from "./UserSchema.js";

//Create

export const insertUser = (userObj) => {
  return UserSchema(userObj).save();
};
//Read
export const getUsers = () => {
  return UserSchema.find();
};

//Update, fitler, updateObj must be an object data type
export const updateUsers = (fitler, updateObj) => {
  return UserSchema.findOneAndUpdate(fitler, updateObj, { new: true }); // {new: true} returns data after updating the database.
};

//Delete, filter must be an boject data type
// export const deleteUser = (filter) => {
//   return UserSchema.findOneAndDelete(filter);
// };

///_id must be an string
export const deleteUserByID = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};
