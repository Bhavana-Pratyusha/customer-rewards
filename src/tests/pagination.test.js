import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../components/Pagination";

test("Pagination should render correctly", () => {
  render(<Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />);
  
  expect(screen.getByText("Page 1 of 3")).toBeInTheDocument();
  expect(screen.getByText("Next ▶")).toBeEnabled();
});

test("Pagination Next button should disable on last page", () => {
  render(<Pagination currentPage={3} totalPages={3} onPageChange={() => {}} />);
  
  expect(screen.getByText("Next ▶")).toBeDisabled();
});

test("Pagination Previous button should disable on first page", () => {
  render(<Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />);
  
  expect(screen.getByText("◀ Prev")).toBeDisabled();
});

