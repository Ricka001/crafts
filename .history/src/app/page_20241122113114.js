import React from "react";
import { db } from "../utils/dbConnection";
export default async function HomePage() {
  const parent = await db.query(`SELECT * FROM parent`);
  const wrangledParant = parent.rows;
  console.log(parent);
  return (
    <div>
      <h1>HomePage</h1>
      {
        wrangledParant.map((parent)=>())
      }
    </div>
  );
}
