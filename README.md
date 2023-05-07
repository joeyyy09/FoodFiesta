# FoodFiesta -  Food Delivery Website 🍔🍟🚚

This is a food delivery website built using ReactJS, Tailwind CSS, NodeJS, Firebase, Express, REST APIs, Redux, and authentication implemented using Google authentication. Users can browse through a variety of food items, add them to cart, and place an order. Administrators can add new dishes to the menu as well. 🍕🍝

## Table of Contents 📜

- [Getting Started](#getting-started)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Getting Started 🚀

### Prerequisites

Make sure you have installed the following software on your system:

- Node.js (v12 or higher)
- Firebase CLI (for deployment only)

### Installing

1. Clone the repository or download the zip file.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install all the required dependencies.
4. Create a `.env` file and add your Firebase configuration. Here's an example:

```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

5. Run `npm start` to start the development server.
6. Navigate to http://localhost:3000 in your web browser to view the website.

### Building

To build the website for production, run `npm run build`. This will create an optimized production build in the `build` directory. 🏗️

## Deployment 🚀

To deploy the website, follow these steps:

1. Create a new Firebase project.
2. Initialize Firebase hosting in your project using the Firebase CLI.
3. Run `npm run build` to create a production build.
4. Deploy the production build to Firebase hosting using the Firebase CLI.

For more information, see the Firebase documentation. 📖

## Features 🌟

- Authentication using Google authentication.
- Home page with a slider and featured dishes.
- Menu page with all the dishes listed.
- Add to cart page where users can add dishes to cart and place an order.
- Administrator page where administrators can add new dishes to the menu.

## Technologies Used 💻

- ReactJS
- Tailwind CSS
- NodeJS
- Firebase
- Express
- REST APIs
- Redux

## Contributing 🤝

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Create a pull request to merge your changes into the main repository.

## License 📝

This project is licensed to Harshith Mente.
