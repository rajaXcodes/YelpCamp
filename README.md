# 🏕️ YelpCamp  

**YelpCamp** is a full-stack web application that allows users to discover, create, and review campgrounds. It provides an interactive platform for campers to share their favorite spots, rate experiences, and explore new destinations.  

## 🌟 Features  

- 🌲 **Campground Listings**: View detailed descriptions, images, and locations of campgrounds.  
- ✍️ **User Authentication**: Secure login, signup, and logout functionality.  
- 🏞️ **Add & Edit Campgrounds**: Registered users can create new campgrounds, update listings, and remove their posts.  
- ⭐ **Rating System**: Users can leave reviews and rate campgrounds.  
- 🗺️ **Map Integration**: Interactive maps to display campground locations using Mapbox.  
- 🔐 **Authorization**: Protect routes — only logged-in users can add or edit campgrounds.  

## 📦 Tech Stack  

- **Frontend**: HTML, CSS, EJS  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB (via Mongoose)  
- **Authentication**: Passport.js for secure user auth  
- **Maps**: Mapbox for interactive location display  
- **Hosting**: Deployed on Heroku  

## 📸 Screenshots  
![Screenshot 2024-10-12 165443](https://github.com/user-attachments/assets/3ba67e53-6175-4377-b019-85be61c633d4)
![Screenshot 2024-10-12 170855](https://github.com/user-attachments/assets/cb77fb48-7f6c-4660-a4c6-f03b66ec9d98)
![Screenshot 2024-10-12 170254](https://github.com/user-attachments/assets/f52a63f6-33f8-47ad-96c7-94bdcdf79ceb)
![Screenshot 2024-10-12 170311 - Copy](https://github.com/user-attachments/assets/f74e24bb-fcb2-48d7-9939-4c518618f323)
![Screenshot 2024-10-12 170559 - Copy](https://github.com/user-attachments/assets/25a4b27e-7093-4ae2-9f7b-6fd758b4dfab)
![Screenshot 2024-10-12 170855 - Copy](https://github.com/user-attachments/assets/8f938353-0491-4118-89f5-0b4e7311ac3d)
![Screenshot 2024-10-12 170700 - Copy](https://github.com/user-attachments/assets/ed677ca7-8428-4b4e-9728-2bd138e37a4a)


- **Home Page**: Browse all campgrounds  
- **Campground Details**: View individual campground info, ratings, and reviews  
- **Add/Edit Campground**: Secure forms for creating and updating campgrounds  
- **User Authentication**: Sign up and login pages  

## 🚀 Getting Started  

### 1️⃣ Clone the repo:  
```bash
git clone https://github.com/yourusername/YelpCamp.git
cd YelpCamp
```

### 2️⃣ Install dependencies:  
```bash
npm install
```

### 3️⃣ Set up environment variables:  
Create a `.env` file in the root folder and add the following:  
```plaintext
MAPBOX_TOKEN=your_mapbox_token
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
DB_URL=your_mongo_db_connection_string
```

### 4️⃣ Run the app:  
```bash
npm start
```

The app will run on:  
```plaintext
http://localhost:8000
```

## 🌐 Deployment  

YelpCamp is hosted on **Render**. You can deploy your own version using the following commands:  
```bash
git add .
git commit -m "Deploy"
git push render main
```

## 🛠️ How It Works  

1. **User Authentication**: Users must sign up or log in to create/edit campgrounds.  
2. **CRUD Operations**:  
   - **Create**: Add new campground listings.  
   - **Read**: View campgrounds and their details.  
   - **Update**: Edit campground info.  
   - **Delete**: Remove campgrounds (authorized users only).  
3. **Reviews & Ratings**: Logged-in users can review campgrounds and leave star ratings.  
4. **Map Integration**: Campground locations are displayed via Mapbox API.  

## 📬 Contributing  

Contributions are welcome! Feel free to open issues or submit pull requests to improve **YelpCamp**.  


---

**YelpCamp** — Explore, rate, and share the best camping spots around the world. 🌿  


#Technologies Uses :
1.Node.js
2.Ejs templates
3.MongoAtlas
4.Express.js
5.Bootstrap





