import styled from "styled-components";


export const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
`;


export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #007bff;
    color: white;
  }

  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;


export const Select = styled.select`
  padding: 8px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;


export const Button = styled.button`
  padding: 8px 12px;
  margin: 5px;
  border: none;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#007bff")};
  color: white;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#0056b3")};
  }
`;


export const Title = styled.h2`
  color: #333;
  text-align: center;
`;
