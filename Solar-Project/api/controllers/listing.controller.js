import ListingData from "../models/listing.model.js";
// Function to create a new data list
export const createList = async (req, res, next) => {
  try {
    // Extract data from the request body
    const {
      plantCapacity,
      siteLocation,
      siteAddress,
      siteContactNumber,
      msedclConsumerNumber,
      assignedPlan,
      plantCOD,
      msedclRegisteredMobileNumber,
      numberOfModules,
      moduleMake,
      moduleType,
      numberOfStrings,
      inverterMake,
      inverterModelName,
      inverterSerialNumber,
      inverterCapacity,
      modeOfInternetConnection,
      sld,
      plantLayout,
      netMeteringFile,
      moduleDatasheet,
      inverterDatasheet,
      userRef
    } = req.body;

    // Create a new instance of ListingData
    const newList = new ListingData({
      plantCapacity,
      siteLocation,
      siteAddress,
      siteContactNumber,
      msedclConsumerNumber,
      assignedPlan,
      plantCOD,
      msedclRegisteredMobileNumber,
      numberOfModules,
      moduleMake,
      moduleType,
      numberOfStrings,
      inverterMake,
      inverterModelName,
      inverterSerialNumber,
      inverterCapacity,
      modeOfInternetConnection,
      sld,
      plantLayout,
      netMeteringFile,
      moduleDatasheet,
      inverterDatasheet,
      userRef
    });

    // Save the new list to the database
    await newList.save();

    // Send a success response
    res.status(201).json({ message: "List created successfully", newList });
  } catch (error) {
    // If an error occurs, pass it to the error handling middleware
    next(error);
  }
};


export const getAllListings = async (req, res, next) => {
  try {
    // Fetch all listings from the database
    const listings = await ListingData.find();
    // Send the listings as a response
    res.status(200).json(listings);
  } catch (error) {
    // If an error occurs, pass it to the error handling middleware
    next(error);
  }
};

// Function to retrieve a single listing by ID
export const getOneList = async (req, res, next) => {
  try {
    const { id } = req.params;
    const listing = await ListingData.findById(id);
    if (!listing) {
      return next(errorHandler(404, 'Listing not found'));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};


export const updateListing = async (req, res, next) => {
  try {
    const { id } = req.params;
    const update = req.body;
    const options = { new: true }; // To return the updated document

    const updatedListing = await ListingData.findByIdAndUpdate(id, update, options);
    if (!updatedListing) {
      return next(errorHandler(404, 'Listing not found'));
    }
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Find the listing by its ID and delete it
    const deletedListing = await ListingData.findByIdAndDelete(id);
    if (!deletedListing) {
      return next(errorHandler(404, 'Listing not found'));
    }
    res.status(200).json({ message: 'Listing deleted successfully' ,
                            userid: id });
  } catch (error) {
    next(error);
  }
};