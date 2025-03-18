import { calculateRewards } from "../utils/rewards";

describe("Reward Points Calculation", () => {
  test("Amount ₹1200 should return 215 points", () => {
    expect(calculateRewards(1200)).toBe(215);
  });

  test("Amount ₹75 should return 25 points", () => {
    expect(calculateRewards(75)).toBe(25);
  });

  test("Amount ₹50 should return 0 points", () => {
    expect(calculateRewards(50)).toBe(0);
  });

  test("Amount ₹200 should return 250 points", () => {
    expect(calculateRewards(200)).toBe(250);
  });

  test("Amount ₹101 should return 52 points", () => {
    expect(calculateRewards(101)).toBe(52);
  });
});
