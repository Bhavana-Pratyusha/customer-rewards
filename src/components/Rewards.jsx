import React from "react";
import { calculateRewards } from "../utils/rewardsCalc";

const Rewards = ({ transactions }) => {
  const totalPoints = transactions.reduce(
    (acc, tx) => acc + calculateRewards(tx.amount),
    0
  );

  return (
    <div>
      <h2>Reward Points</h2>
      <p>Total Points: {totalPoints}</p>
    </div>
  );
};

export default Rewards;
