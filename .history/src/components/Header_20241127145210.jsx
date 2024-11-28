import {
  SignedOut,
  SignIn,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs"; // Assuming you're using Clerk for authentication
export default function Header() {
  const { user } = useUser(); // Get the current user

  return (
    <div>
      <div className=" flex justify-between p-5 ml-28">
        <div className="container1">
          <Image src="/heart.png" alt="heart" width={60} height={50} />
          <h1>SonCrafts</h1>
        </div>

        <div className="container flex items-center justify-end pr-24">
          <SignInButton>
            <UserButton />
          </SignInButton>
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
