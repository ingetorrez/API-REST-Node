import { Router } from "express";
const router = Router();

//Database connection
import { connect } from "../database";
import { ObjectID } from "mongodb";

//GET ALL
router.get("/", async(req, res) => {
    const db = await connect();
    // console.log(db);
    const result = await db
        .collection("tasks")
        .find({})
        // .limit(1)
        .toArray();
    // console.log(result);
    res.send(result);
});

//POST Create|Insert
router.post("/", async(req, res) => {
    const db = await connect();
    // console.log(db);
    const { title, description } = req.body;
    const task = {
        title,
        description
    };
    const result = await db.collection("tasks").insertOne(task);
    res.json(result.ops[0]);
});

//Get by ID | GET ONE
router.get("/:id", async(req, res) => {
    const db = await connect();
    const { id } = req.params;

    const result = await db.collection("tasks").findOne({ _id: ObjectID(id) });
    // console.log(result);
    res.json(result);
});

//Delete ONE
router.delete("/:id", async(req, res) => {
    const db = await connect();
    const { id } = req.params;

    const result = await db.collection("tasks").deleteOne({ _id: ObjectID(id) });

    res.json({
        msg: `Task ${id} deleted`,
        result
    });
});

//UPDATE ONE
router.put("/:id", async(req, res) => {
    const { id } = req.params;
    const uTask = {
        title: req.body.title,
        description: req.body.description
    };
    const db = await connect();
    const result = await db
        .collection("tasks")
        .updateOne({ _id: ObjectID(id) }, { $set: uTask });
    res.json({
        message: `Task ${id} Updated`,
        result
    });
});

export default router;