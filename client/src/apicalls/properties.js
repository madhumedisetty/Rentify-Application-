const { axiosInstance } = require(".");

// add Property API
export const AddProperty = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/property/add-property",
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete a Property API
export const DeleteProperty = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/property/delete-property",
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// List all Seller Properties API
export const SellerProperties = async () => {
  try {
    const response = await axiosInstance.get("/api/property/seller-properties");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// List all recently added Properties
export const AllProperties = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/property/properties",
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Get the details of a property by it's ID
export const getPropertyById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/property/propertyById",
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// API to like the property by it's ID
export const likeProperty = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/property/likeProperty",
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};


// Edit Property API
export const EditProperty = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/property/edit-property",
      payload
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};