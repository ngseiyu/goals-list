const router = require("express").Router();
const {
    getGoals, setGoal, updateGoal, deleteGoal
} = require("../controllers/goalController");

/* router.get("/", getGoals);
router.post("/", setGoal);
router.put("/:id", updateGoal);
router.delete("/:id", deleteGoal); */

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

module.exports = router;