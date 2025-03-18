import React, { useEffect, useState } from "react";
import { fetchTransactions } from "./utils/api";
import CustomerList from "./components/CustomerList";
import Transactions from "./components/Transactions";
import Rewards from "./components/Rewards";
import { Container, Title } from "./styles";

function App() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTransactions()
      .then((data) => {
        setCustomers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const selectedTransactions = selectedCustomer
    ? customers.find((c) => c.customerId === selectedCustomer).transactions
    : [];

  return (
    <Container>
      <Title>Customer Rewards Program</Title>
      <CustomerList customers={customers} onSelectCustomer={setSelectedCustomer} />
      {selectedCustomer && (
        <>
          <Rewards transactions={selectedTransactions} />
          <Transactions transactions={selectedTransactions} />
        </>
      )}
    </Container>
  );
}

export default App;
