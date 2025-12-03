const express =  require("express");
const journal = require ("../controllers/journal.controllers");

const router = express.Router();


router.post("/", journal.createJournal);
router.get("/user/", journal.getUserJournals);
router.get("/:id", journal.getJournalById);
router.put("/:id", journal.updateJournal);
router.delete("/:id", journal.deleteJournal);

module.exports = router;
