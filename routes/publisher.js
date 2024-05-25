const express = require("express");
const router = express.Router();

const publishersController = require("../controllers/publishersController");

// // Create a new publisher
// router.post('/new-publisher', publishersController.createPublisher);

// // Update an existing publisher
// router.put('/update-publisher/:id', publishersController.updatePublisher);

// // Retrieve a publisher by their ID
// router.get('/publisher/:id', publishersController.getPublisherById);

// // Retrieve publishers by name
// router.get('/publisher/:name', publishersController.getPublisherByName);

// // Retrieve a list of all publishers
// router.get('/publisher', publishersController.getAllPublishers);

// // Delete a publisher by their ID
// router.delete('/publisher/:id', publishersController.deletePublisher);

module.exports = router;
