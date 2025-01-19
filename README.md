User Directory Application
A React.js application that fetches and displays user data from an API. Users can search, paginate, and view detailed information about each user in a responsive, cleanly designed interface.

Table of Contents
Features
Technologies Used
API Details
Getting Started
Prerequisites
Installation
Project Structure
Usage
Home Page
User Detail Page
Deployment
Deploying to Netlify
Deploying to Vercel
Screenshots
Contributing
License

Features
Home Page
Displays a list of users in a grid layout.
Search functionality to filter users by name.
Pagination to navigate through users.
User Detail Page
Displays detailed information about a user, including:
Name
Email
Phone
Company
Website
Includes a "Go Back" button at the top-left corner for easy navigation.
User details are centered for a clean and responsive design.
Other Features
Responsive Design:
Optimized for mobile, tablet, and desktop views.
Loading State:
Displays a spinner during data fetching.
Error Handling:
Provides user-friendly messages for API errors or issues.

Technologies Used
React.js: Frontend framework for building the UI.
React Router: For routing and navigation between pages.
CSS: For styling, including Flexbox and Grid layouts for responsiveness.
React Spinners: For displaying the loading spinner.

API Details
This application uses the JSONPlaceholder API for user data.
Endpoint:https://jsonplaceholder.typicode.com/users


Data Provided:
id: Unique identifier
name: User's name
email: User's email
address: User's address (includes city, street, etc.)
phone: User's phone number
company: User's company details
website: User's personal or company website

Getting Started
Prerequisites
Make sure you have the following installed:
Node.js: Download here
npm: Comes with Node.js installation.
Installation
Clone the repository:
git clone https://github.com/Gopichand219/user-directory
cd user-directory
Install dependencies: npm install
Start the development server:npm start
Open the application in your browser:http://localhost:3000

Project Structure
user-directory/
├── public/                 // Public files (HTML, favicon, etc.)
├── src/                    // Source files
│   ├── components/         // React components
│   │   ├── Home.js         // Home page component
│   │   ├── UserDetail.js   // User detail page component
│   │   ├── Loader.js       // Loading spinner component
│   │   ├── Pagination.js   // Pagination component
│   ├── App.js              // Main app component
│   ├── index.js            // React entry point
│   ├── styles.css          // Global CSS styling
├── package.json            // Project configuration
├── README.md               // Project documentation


Usage
Home Page
Use the search bar to filter users by name.
Click on any user card to view detailed information.
Use the pagination controls to navigate through the user list.
User Detail Page
View detailed information about the selected user.
Use the "Go Back" button at the top-left corner to return to the home page.

Deployment
Deploying to Netlify
Build the project: npm run build


Deploy the build/ folder using Netlify's drag-and-drop interface or link your GitHub repository.
Deploying to Vercel
Import the project into your Vercel account.
Configure the project settings and deploy automatically from GitHub.

Screenshots
Home Page
User Detail Page

Contributing
Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.



