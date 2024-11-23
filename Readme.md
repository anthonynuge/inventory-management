# Inventory Management System

This was used as a way for me to learn next.js.

A full-stack Inventory Management System web application designed to help store owners efficiently manage inventory, track products, and generate insightful reports. Built using **Next.js**, **Express**, **Redux**, **React**, **TypeScript**, and **PostgreSQL**.

## Features

- **Dashboard:** View and track inventory in real time.
- **CRUD Operations:** Add, update, and remove inventory items with ease.
- **Product Insights:** Generate reports to analyze inventory levels and product performance.
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Real-Time Updates:** Ensures up-to-date inventory management.

## Tech Stack

- **Frontend:** Next.js, React, Redux, TypeScript, Tailwind CSS
- **Backend:** Express.js, Node.js
- **Database:** PostgreSQL
- **State Management:** Redux and Redux Persist

## Installation and Setup

Follow the steps below to clone and run the application locally:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- [PostgreSQL](https://www.postgresql.org/) database set up.
- A code editor like [VSCode](https://code.visualstudio.com/).
- Git installed for cloning the repository.

### Step 1: Clone the Repository

1. Open your terminal.
2. Run the following command:
   ```bash
   git clone https://github.com/anthony_nuge/inventory-management-system.git
   ```
3. Navigate to the project directory:
   ```bash
   cd inventory-management-system
   ```

### Step 2: Install Dependencies

Install the necessary packages for both the frontend and backend:

1. Navigate to the `frontend` folder and install dependencies:
   ```bash
   cd client
   npm install
   ```
2. Go back to the root directory and navigate to the `backend` folder:
   ```bash
   cd ../server
   npm install
   ```

### Step 3: Configure the Environment Variables

1. Create a `.env` file in the `backend` directory.
2. Add the following variables (replace placeholders with your own values):
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=your_postgres_user
   DB_PASSWORD=your_postgres_password
   DB_NAME=inventory_db
   PORT=5000
   ```

### Step 4: Set Up the Database

1. Open PostgreSQL and create a new database:
   ```sql
   CREATE DATABASE inventory_db;
   ```
2. Run migrations or SQL scripts provided in the `backend/db` folder to set up the required tables.

### Step 5: Run the Application

1. Start the backend server:
   ```bash
   cd server
   npm run dev
   ```
2. Start the frontend development server:
   ```bash
   cd ../client
   npm run dev
   ```

The application will now be running. You can access it in your browser at:

- **Frontend:** `http://localhost:3000`
- **Backend API:** `http://localhost:5000`

## Usage

- Log in to the dashboard.
- Use the navigation to add, update, or remove inventory items.
- View detailed product information and generate reports from the reporting tab.
