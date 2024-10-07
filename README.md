# E-Shop React Application

## Overview

E-Shop is a dynamic and interactive e-commerce application built using React. The application provides features for managing categories, products, and a shopping cart, allowing users to browse, add products to their cart, and place orders.

## Features

- **Dynamic Navigation**: Includes a responsive header with navigation links to the cart and category management.
- **Category Management**: Allows users to view, create, update, and delete categories.
- **Product Management**: Allows users to view, create, update, and delete products.
- **Categories Listing**: Displays all active categories, allowing users to view respective products within that category.
- **Product Listing**: Displays all active products within selected categories, allowing users to add products to the cart.
- **Increment/Decrement Quantity**: Users can adjust the quantity of products in the cart with increment and decrement buttons.
- **Cart Management**: View and modify items in the cart, including placing orders.
- **Order History**: Users can view their order history with details of past orders.
- **LocalStorage Persistence**: Application state (cart, products, categories, and orders) is persisted using `localStorage`.
- **Error Handling**: Graceful handling of empty states for categories, products, orders, and the cart.
- **Out of Stock Indication**: Shows a clear indication when a product is out of stock.
- **UUID Package**: Used to generate unique IDs for products, categories, and orders.
- **Category Dropdown for Product Addition**: The settings page has a `<select>` dropdown to choose from available categories when creating products.
- **Snackbar Alerts**: Alerts users with a snackbar notification when they attempt to delete a category.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing and navigation.
- **Material-UI**: A popular React UI framework for styling components.
- **Context API & useReducer**: For state management (choose based on your implementation).
- **LocalStorage**: Used for persisting state data (cart, products, categories, and orders).
- **UUID**: To generate unique identifiers for products, categories, and orders.
