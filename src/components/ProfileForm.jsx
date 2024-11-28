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
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        await saveProfile(formData);
      }}
      className="space-y-4"
    >
      <div className="form-control">
        <label htmlFor="username" className="label">
          <span className="label-text">Username:</span>
        </label>
        <input
          name="username"
          id="username"
          className="textarea textarea-bordered"
          defaultValue={user?.username || ""}
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="phone_number" className="label">
          <span className="label-text">Phone number:</span>
        </label>
        <input
          name="phone_number"
          id="phone_number"
          defaultValue={user?.phone_number || ""}
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="email" className="label">
          <span className="label-text">Email:</span>
        </label>
        <input
          name="email"
          id="email"
          defaultValue={user?.email || ""}
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="phone_number" className="label">
          <span className="label-text">Phone Number:</span>
        </label>
        <input
          name="phone_number"
          id="phone_number"
          defaultValue={user?.phone_number || ""}
        />
      </div>

      <div className="form-control">
        <label htmlFor="photo_permission" className="label">
          <span className="label-text">Phone Number:</span>
        </label>
        <input
          name="photo_permission"
          id="photo_permission"
          defaultValue={user?.photo_permission || ""}
        />
      </div>

      <div className="form-control mt-4">
        <button className="btn btn-success w-full" type="submit">
          {user ? "Update Profile" : "Create Profile"}
        </button>
      </div>
    </form>
  );
}
