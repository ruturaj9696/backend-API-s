// listing.route.js
import express from 'express';
import { createList, deleteListing, getAllListings, getOneList, updateListing } from '../controllers/listing.controller.js';

const router = express.Router();

router.post('/createlist', createList);
router.get('/getalllistings', getAllListings);
router.get('/getonelist/:id', getOneList);
router.post('/update/:id',  updateListing);
router.delete('/delete/:id',  deleteListing);
export default router;







// import { createListing, deleteListing, updateListing , getListing, getListings } from '../controllers/listing.controller.js';
// import { verifyToken } from '../utils/verifyUser.js';


// router.post('/create', verifyToken, createListing);
// router.delete('/delete/:id', verifyToken, deleteListing);
// router.post('/update/:id', verifyToken, updateListing);
// router.get('/get/:id', getListing)
// router.get('/get', getListings);
  