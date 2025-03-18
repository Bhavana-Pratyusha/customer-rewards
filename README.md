
Customer Rewards Program - React.js App

## Overview
This project calculates **reward points** for customers based on their purchases.  
It includes **filters, pagination, dynamic data, and API simulation**.

## 🎯 Features
✅ **Dynamically calculates reward points**  
✅ **Filters transactions by month**  
✅ **Paginated transactions table**  
✅ **Asynchronous API simulation with loading & error handling**  
✅ **Unit tests for rewards calculation**  
✅ **Styled Components for UI**  

## Install Dependencies

- npm install  
- npm install styled-components
- npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
- npm install --save-dev babel-jest @babel/preset-env  

## Start the App
- npm run dev
- open browser - http://localhost:5173/


## screanshot of webpage - 
![alt text](image.png)


## API & Dynamic Data

The app fetches transactions dynamically from a simulated API.

export const fetchTransactions = async () => {
  return [
    {
      customerId: 1,
      name: "Rahul Sharma",
      transactions: [
        { transactionId: 101, amount: 1200, date: "2024-12-01" },
        { transactionId: 102, amount: 750, date: "2024-11-15" },
        { transactionId: 103, amount: 2000, date: "2024-10-20" }
      ]
    },
    {
      customerId: 2,
      name: "Priya Patel",
      transactions: [
        { transactionId: 201, amount: 950, date: "2024-12-05" },
        { transactionId: 202, amount: 1500, date: "2024-11-10" }
      ]
    }
  ];
};





