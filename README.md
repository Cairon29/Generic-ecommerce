# React.js Shopping Cart Project

## Objective

The primary goal of this project is to create an interactive and dynamic shopping cart using **React.js**. The application will allow users to browse a catalog of products, add items to the cart, adjust quantities, and review their selected items before checkout. 

User will be able to log in with the following pre-set credentials:
**1:** 
  email: john.doe@example.com
  role: admin
  password: admin123
**2**
  email: alice.johnson@example.com
  role: user
  password: user123

## Features

### 1. **Product Listing**
- Display a collection of products fetched from a mock API or a JSON file.
- Each product includes:
  - Image
  - Name
  - Price
  - "Add to Cart" button

### 2. **Shopping Cart**
- A responsive shopping cart interface that:
  - Displays all selected products.
  - Allows users to update quantities or remove items.
  - Automatically calculates the total price in real time.

### 3. **User Interactions**
- **Add to Cart**: Users can add products directly from the listing.
- **Quantity Adjustment**: Users can increase or decrease the quantity of each product in the cart.
- **Remove Item**: Users can remove unwanted products from the cart.
- **Clear Cart**: A button to clear all items from the cart.

### 4. **Checkout**
- Displays a summary of the cart.
- **Email.js**: Allows users to proceed to a simulated checkout with Email.js library. This will send an email with the cart details to the user's email address, deplowing the cart products selected by the user along its purcharse information.

### 5. **Responsive Design**
- The UI adapts to various screen sizes, ensuring a smooth experience on mobile and desktop devices.

## Technology Stack

### Deployement
- **Vite**: Fast and lightweight development server for React applications.
- **Vercel**: For hosting the application.

### Frontend
- **React.js**: For building a dynamic and interactive user interface.
- **React Context API**: To manage the global state of the shopping cart.
- **CSS Modules** or **Styled Components**: For styling the application.

### Backend (Optional)
- **Mock API**: Created with tools like **JSON Server** to simulate product data.
- **Email.js**: For sending emails with purcharse details.

### Additional Libraries
- **React Router dom**: For navigation between pages like Home, Products, and Cart.
- **Axios**: For fetching data from the backend.
- **React Hook Form**: For form validation in the checkout process.
- **Email.js**: For sending emails with purchase details.
- **Concurrently**: For running multiple scripts concurrently.
- **uuid**: For generating unique IDs for cart items.
- **json-server**: For creating a mock API.
- **antd**: For styling some of the components.




