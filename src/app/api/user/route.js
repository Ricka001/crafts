import { db } from "@/utils/dbConnection";
import { auth } from "@clerk/nextjs/server";

export async function GET(req) {
  const { userId } = await auth();
  try {
    const result = await db.query(`SELECT * FROM users WHERE clerk_id = $1`, [
      userId,
    ]);
    if (result.rows.length === 0) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(result.rows[0]), { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  const { userId } = await auth();
  const { username, email, phone, photo_permission } = await req.json();
  try {
    await db.query(
      `INSERT INTO users (username, email, phone_number, photo_permission, clerk_id)
        VALUES ($1, $2, $3, $4, $5)`,
      [username, email, phone, photo_permission, userId]
    );
    return new Response(
      JSON.stringify({ message: "User created successfully" }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function PUT(req) {
  const { userId } = await auth();
  const { username, email, phone, photo_permission } = await req.json();
  try {
    await db.query(
      `UPDATE users
         SET username = $1, email = $2, phone = $3, photo_permission = $4
         WHERE clerk_id = $5`,
      [username, email, phone, photo_permission, userId]
    );
    return new Response(
      JSON.stringify({ message: "User updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function DELETE(req) {
  const { userId } = await auth();
  try {
    await db.query(`DELETE FROM users WHERE clerk_id = $1`, [userId]);
    return new Response(
      JSON.stringify({ message: "User deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
