import React from "react";
import { Select } from "../styles";

const Filters = ({ months, selectedMonth, onSelectMonth }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Filter by Month</h3>
      <Select value={selectedMonth} onChange={(e) => onSelectMonth(e.target.value)}>
        <option value="">All Months</option>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default Filters;

