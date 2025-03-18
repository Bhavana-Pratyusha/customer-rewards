import React, { useState } from "react";
import Pagination from "./Pagination";
import Filters from "./Filters";
import { StyledTable, Title, Container } from "../styles";

const Transactions = ({ transactions }) => {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10; // Increased for large datasets

  // Get unique months from transactions
  const months = [...new Set(transactions.map(tx => tx.date.slice(0, 7)))]; // Extract YYYY-MM

  // Apply month filter
  const filteredTransactions = selectedMonth
    ? transactions.filter(tx => tx.date.startsWith(selectedMonth))
    : transactions;

  // Apply pagination
  const totalPages = Math.ceil(filteredTransactions.length / transactionsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * transactionsPerPage,
    currentPage * transactionsPerPage
  );

  return (
    <Container>
      <Title>Transactions</Title>

      {/* Month Filter */}
      <Filters months={months} selectedMonth={selectedMonth} onSelectMonth={setSelectedMonth} />

      {/* Transactions Table */}
      <StyledTable>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Amount (₹)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {paginatedTransactions.map((tx) => (
            <tr key={tx.transactionId}>
              <td>{tx.transactionId}</td>
              <td>₹{tx.amount.toLocaleString("en-IN")}</td>
              <td>{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      )}
    </Container>
  );
};

export default Transactions;
