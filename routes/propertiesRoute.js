const router = require("express").Router();
const { database } = require("../config/dbConfig");
const authMiddleware = require("../middlewares/authMiddleware");
const { ObjectId } = require("mongodb");

// creates/adds a new Property in property collection 
router.post("/add-property", authMiddleware, async (req, res) => {
  try {

    console.log("req.body = ",req.body);
    const Property = database.propertyCollection;
    const {
      propertyName,
      description,
      type,
      status,
      price,
      city,
      pincode,
      landmark,
      address,
      bedrooms,
      bathrooms,
      balconies,
      parking,
      furnishing,
      area,
      facing,
      ownerName,
      ownerEmail,
      ownerPhoneNumber,
      images=[]
    } = req.body;

    const propertyObj = {
      propertyName,
      description,
      type,
      status,
      price,
      city,
      pincode,
      landmark,
      address,
      bedrooms,
      bathrooms,
      balconies,
      parking,
      furnishing,
      area,
      facing,
      ownerName,
      ownerEmail,
      ownerPhoneNumber,
      images,
      userPropertyCreater: req.body.userId,
      updatedAt: new Date(),
      like: 1
    };

    const newProperty = await Property.insertOne(propertyObj);

    return res.send({
      success: true,
      message: "Property Created Successfully",
      data: newProperty,
    });
  } catch (error) {
    console.log("error = ", error);
    res.send({
      success: false,
      message: error,
    });
  }
});


// list the properties of a seller
router.get("/seller-properties",authMiddleware, async (req,res)=>{
  try {
    const Property = database.propertyCollection;
    const sellerProperties = await Property.find({
      userPropertyCreater: req.body.userId,
    })
      .sort({ updatedAt: -1 })
      .toArray();
    return res.send({
      success: true,
      message: "Seller Properties",
      data: sellerProperties,
    })
  } catch (error) {
    console.log("error = ", error);
    res.send({
      success: false,
      message: error,
    });
  }
});



// delete the property from property collection
router.post("/delete-property",authMiddleware, async (req,res)=>{
  try {
    const Property = database.propertyCollection;
    console.log("req.body = ",req.body);
    const propertyId = new ObjectId(req.body.id);
    const propertyDeleted = await Property.deleteOne({_id:propertyId});
    return res.send({
      success: true,
      message: "Property Deleted Successfully",
      data: propertyDeleted,
    });
  } catch (error) {
    console.log("error = ", error);
    res.send({
      success: false,
      message: error,
    });
  }
});


// list all the recently added properties
router.post("/properties",authMiddleware, async (req,res)=>{
  try {
    const Property = database.propertyCollection;
    console.log("req.body in properties list = ", req.body);
    let pageNumber = req.body.pagination.currentPage;
    let documents = null;
    if (pageNumber === 1) {
      documents = await Property.find(req.body.filters)
        .sort({ updatedAt: -1 })
        .skip(0)
        .limit(8)
        .toArray();
    } else {
      documents = await Property.find(req.body.filters)
        .sort({ updatedAt: -1 })
        .skip(8 * (pageNumber - 1))
        .limit(8)
        .toArray();
    }

    // count number of documents based on filters provided
    const totalDocuments = await Property.countDocuments(req.body.filters);

    return res.send({
      success: true,
      message: "Properties List",
      data: {
        propertiesList: documents,
        pagination: {
          currentPage: pageNumber,
          totalDocuments: totalDocuments,
        },
      },
    });
  } catch (error) {
    console.log("error = ", error);
    res.send({
      success: false,
      message: error,
    });
  }
});


// Get the details of a property by it's property Id
router.post("/propertyById", authMiddleware, async (req,res)=>{
  try {
    const Property = database.propertyCollection;
    const propertyId = new ObjectId(req.body.id);
    const property = await Property.findOne({_id:propertyId});
    return res.send({
      success: true,
      message: "Property Details",
      data: property,
    })
  } catch (error) {
    console.log("error = ", error);
    res.send({
      success: false,
      message: error,
    });
  }
});


// API to like the property
router.post("/likeProperty", authMiddleware, async (req, res) => {
  try {
    const Property = database.propertyCollection;
    const propertyId = new ObjectId(req.body.id);
    const updatedDocument = await Property.updateOne(
      { _id: propertyId },
      {
        $inc: {
          like: 1,
        },
      }
    );
    res.send({
      success: true,
      message: "Property Liked",
      data: updatedDocument,
    });
  } catch (error) {
    console.log("error = ", error);
    res.send({
      success: false,
      message: error,
    });
  }
});

router.post("/edit-property", authMiddleware, async (req, res) => {
  try {
    const Property = database.propertyCollection;
    const {
      propertyName,
      description,
      type,
      status,
      price,
      city,
      pincode,
      landmark,
      address,
      bedrooms,
      bathrooms,
      balconies,
      parking,
      furnishing,
      area,
      facing,
      ownerName,
      ownerEmail,
      ownerPhoneNumber,
      images = [],
      likes,
    } = req.body;

    const propertyObj = {
      propertyName,
      description,
      type,
      status,
      price,
      city,
      pincode,
      landmark,
      address,
      bedrooms,
      bathrooms,
      balconies,
      parking,
      furnishing,
      area,
      facing,
      ownerName,
      ownerEmail,
      ownerPhoneNumber,
      images,
      userPropertyCreater: req.body.userId,
      updatedAt: new Date(),
      likes,
    };
    const propertyId = new ObjectId(req.body._id);
    const propertyUpdated = await Property.updateOne(
      { _id: propertyId },
      {
        $set: propertyObj,
      }
    );

    res.send({
      success: true,
      message: "Status updated Successfully",
      data: propertyUpdated,
    });
  } catch (error) {
    console.log("error = ", error);
    res.send({
      success: false,
      message: error,
    });
  }
});


module.exports = router;
