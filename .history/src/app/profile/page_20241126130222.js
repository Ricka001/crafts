'use client';
import { useRouter } from "next/navigation";

import React from "react";

export default function ProfileForm({ user, userId }) {
    const router = useRouter();
export default async function HomePage() {
  const parent = await db.query(`SELECT * FROM parent`);
  const wrangledParant = parent.rows;

  return (
    <div key={parent.id}>
      <h1>HomePage</h1>
      {wrangledParant.map((parent) => (
        <div key={parent.id}>
          <h2>{parent.username}</h2>
          <p>{parent.email}</p>
          <p>{parent.phone_number}</p>
          <p>{parent.photo_permission}</p>
        </div>
      ))}
    </div>
  );
}
}