import {
  UserButton,
  SignedOut,
  SignedIn,
  SignInButton,
  SignUpButton,
  UserProfile,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
// import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection";

export default async function Header() {
  const { userId } = auth;
  // const user = await currentUser();
  // const username = user.username;
  // const userID = user.id;
  // const email = user.emailAddresses[0].emailAddress;
  const query = await db.query(
    `SELECT clerk_id FROM parent WHERE clerk_id = $1`,
    [auth]
  );
  // const queryResult = query.rows[0]?.clerk_id;
  // if (!queryResult) {
  //   await db.query(
  //     `INSERT INTO parent(clerk_id, username, email) VALUES($1, $2, $3)`,
  //     [userID, username, email]
  //   );
  // }
  if (auth === true) {
    return <Link href={`/userProfile/${username}`} />;
  } else if (auth === false) {
    return <p>Sorry you have to log in </p>;
  }
  return (
    <div>
      <div className=" flex justify-between p-5 ml-28">
        <div className="container1">
          <Image src="/heart.png" alt="heart" width={60} height={50} />
          <h1>SonCrafts</h1>
        </div>

        <div className="container flex items-center justify-end pr-24">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">Sign In</SignInButton>
            <SignUpButton mode="modal">Sign Up</SignUpButton>
          </SignedOut>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8">
        <div className="flex justify-evenly items-center p-6 rounded-lg shadow-lg bg-[#d0c8c6] hover:bg-[#f195ec] text-[#F4ECE4] ml-34 mr-34 mb-5">
          <Link href="/">
            <div>
              <p>Home</p>
            </div>
          </Link>
          <Link href="/contact-us">
            <p>Contact us</p>
          </Link>
          <Link href="/calendar">
            <p>Calendar</p>
          </Link>
          <Link href="/online">
            <p>Online Tutorials</p>
          </Link>
          <Link href="/about">
            <p>About Us</p>
          </Link>
          <Link href="/school">
            <p>Schools</p>
          </Link>
          <Link href={`/userProfile/${username}`}>
            <p>User Profile</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
