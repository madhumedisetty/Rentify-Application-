# Rentify - Renting Application

**Rentify** is a web application designed to simplify the process of renting properties for both landlords (sellers) and tenants (buyers). With features tailored to meet the needs of users on both sides of the rental market, Rentify aims to streamline property listing, viewing, and application processes.

## GitHub Repository
[Rentify Application GitHub Repository](https://github.com/madhumedisetty/Rentify-Application-.git)

---

## Technologies Used
- **Backend**: Node.js  
- **Frontend**: React.js  
- **Database**: MongoDB (MongoDB Atlas)  
- **Authentication**: JWT (JSON Web Token)  
- **Email Service**: Nodemailer with Gmail

---


## Features
### Seller (Landlord) Features
- **Property Listing Management**:
  - Add Property
  - Update Property
  - Delete Property
- **Interaction with Buyers**:
  - Find interested buyers
  - Manage property likes and dislikes

### Buyer (Tenant) Features
- **Property Browsing and Interaction**:
  - Browse properties
  - Express interest in properties
  - View an "Interested Items" dashboard
  - Manage likes and dislikes for properties

### Email Notifications
- **Buyer Notifications**:
  - Receive emails with seller and property details when showing interest.
- **Seller Notifications**:
  - Receive emails with details of interested buyers.

### Additional Features
- **Pagination**: Enhanced user experience while browsing.
- **Form Validation**: Ensures input data accuracy.
- **User Feedback**: Includes like and dislike functionality for better engagement.

---

## Installation
### Frontend Setup
1. Clone the repository.
2. Navigate to the `frontend` directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Update backend API endpoint in the configuration files.
5. Run the frontend:
   ```bash
   npm start
   ```

### Backend Setup
1. Clone the repository.
2. Navigate to the `backend` directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the database according to the provided schema.
5. Configure environment variables for:
   - MongoDB connection
   - Email service credentials
   - JWT authentication

   Example `.env` file:
   ```env
   MONGO_URI=<your-mongodb-atlas-uri>
   EMAIL_USER=<your-email-address>
   EMAIL_PASS=<your-email-password>
   JWT_SECRET=<your-jwt-secret>
   ```

6. Run the backend server:
   ```bash
   npm start
   ```

--



## Deployement Link
### https://rentifyfrontend-q2k2.onrender.com/
