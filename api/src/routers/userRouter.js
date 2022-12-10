import express from "express";
import {
  insertUser,
  getUsers,
  updateUsers,
  deleteUserByID,
} from "../models/user/UserModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // get all data from db and return to the client

    const users = await getUsers();
    res.json({
      status: "success",
      message: "here are the users",
      users,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await insertUser(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "user created successfully",
        })
      : res.json({
          status: "error",
          message: "unable to create user, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});

router.put("/", async (req, res) => {
  try {
    const { _id, ...rest } = req.body;

    const filter = { _id };
    // const updateObj = { password };
    const result = await updateUsers(filter, rest);

    result?._id
      ? res.json({
          status: "success",
          message: "user updated successfully",
        })
      : res.json({
          status: "error",
          message: "unable to update user, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    console.log(_id);
    const result = await deleteUserByID(_id);

    result?._id
      ? res.json({
          status: "success",
          message: "user updated successfully",
        })
      : res.json({
          status: "error",
          message: "unable to update user, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});

export default router;
