const express=require("express");
const router=require("express").Router()
const { addContact, updateContact, findContact, findByIdContact, deleteContact } = require("../controllers/ContactContro");
router.post("/addcontact",addContact);
router.get("/findContact/:id",findByIdContact)
router.get("/allcontact",findContact)
router.put("/updateContact/:id",updateContact)
router.delete("/deleteContact/:id",deleteContact)
module.exports = router;