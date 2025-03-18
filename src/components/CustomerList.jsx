import React from "react";

const CustomerList = ({ customers, onSelectCustomer }) => {
  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.customerId}>
            <button onClick={() => onSelectCustomer(customer.customerId)}>
              {customer.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
