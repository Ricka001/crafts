import React from "react";
import { db } from "../utils/dbConnection";
export default function HomePage() {
  const parent = db.query(`SELECT * FROM parent`);
  console.log(parent);
  return (
    <div>
      <h1>HomePage</h1>
    </div>
  );
}
