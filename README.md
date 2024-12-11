# React Application with Redux, TailwindCSS, and Form Validation

## Project Overview

This is a React-based web application that allows users to manage a list of items. The application includes the ability to add, update, delete, and view items in detail. It demonstrates the following key features:

- **State Management**: Uses **Redux** to manage the state of the items across different pages.
- **Data Handling**: Local data is used to store and manipulate items.
- **User Interface**: The user interface is built using **React**, styled with **TailwindCSS** for responsiveness, and provides a seamless experience across devices.
- **Routing**: **React Router** is used to handle navigation between different pages: **Dashboard**, **Add Item**, and **Item Details**.
- **Form Validation**: **Formik** and **Yup** are used for form handling and validation.
- **Testing**: Unit tests are written for critical components and Redux actions using **Jest** and **React Testing Library**.

## Project Features

### 1. **Dashboard Page**
- Displays a list of items with options to view details, update, or remove an item.
- Users can also **add a new item**, which redirects them to the **Add Item** page.
- Items are displayed in a table format with sorting and filtering functionalities.

### 2. **Add Item Page**
- A form that allows users to add new items to the list.
- The form includes validation for the name and value of the item.
- After submitting the form, the user is redirected back to the **Dashboard** page.

### 3. **Item Details Page**
- Displays detailed information about an item when selected from the **Dashboard**.
- The page uses React Router to dynamically load the details of the selected item based on the item ID.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management across pages.
- **React Router**: For navigation between pages.
- **TailwindCSS**: For styling and responsive design.
- **Formik and Yup**: For form handling and validation.
- **Jest and React Testing Library**: For unit testing and component testing.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Mariano103/React-Application.git
