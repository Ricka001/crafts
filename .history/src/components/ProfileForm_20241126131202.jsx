"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProfileForm({ user, userId }) {
  const router = useRouter();

  async function saveProfile(formData) {
    const updatedData = {
      username: formData.get("username"),
      email: formData.get("email"),
      phone: formData.get("phone_number"),
      photo_permission: formData.get("photo_permission"),
    };

    try {
      const method = user ? "PUT" : "POST";
      const response = await fetch("/api/user", {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        // Redirect to profile view page with edit=false after successful save
        router.push(`/userProfile/${updatedData.username}?edit=false`);
      } else {
        const errorData = await response.json();
        console.error(
          `Error ${user ? "updating" : "creating"} profile:`,
          errorData
        );
      }
    } catch (error) {
      console.error(`Error ${user ? "updating" : "creating"} profile:`, error);
    }
  }

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
