"use client";
import Logo from "@/app/assest/svgs/Logo";

import { Heart, LogOut, ShoppingBag } from "lucide-react";
import { Button } from "../button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { logout } from "@/services/authService";
import Link from "next/link";
import { useUser } from "@/context/UserContext";

export default function Navbar() {
  const { user, setIsLoading } = useUser();
  const handleLogOut = () => {
    logout();
    setIsLoading(true);
  };
  return (
    <header className="border-b border-gray-300 w-full">
      <div className="container flex justify-between items-center h-16 px-3 mx-auto">
        <h1 className="text-2xl font-black flex items-center">
          <Logo />
          ext Mart
        </h1>
        <div className="max-w-md flex-grow">
          <input
            type="text"
            placeholder="Search for products"
            className=" w-full max-w-6xl rounded-full border border-gray-300 px-5 py-2"
          />
        </div>
        <nav className="flex gap-2">
          <Button
            variant="outline"
            className="rounded-full border border-gray-300 hover:bg-gray-200 p-0 size-10"
          >
            <Heart />
          </Button>
          <Button
            variant="outline"
            className="rounded-full border border-gray-300 hover:bg-gray-200 p-0 size-10"
          >
            <ShoppingBag />
          </Button>

          {user ? (
            <>
              <Link href={"create-shop"}>
                <Button
                  variant="outline"
                  className="rounded-full border border-gray-300  hover:bg-gray-200"
                >
                  Create Shop
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar className="size-10 rouded-full ">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border border-gray-300 bg-white mt-2">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="hover:bg-gray-200 px-3 py-2">
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-200 px-3 py-2">
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-200 px-3 py-2">
                    My Shop
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="border-b border-gray-300" />
                  <DropdownMenuItem
                    className="hover:bg-gray-200 px-3 py-2"
                    onClick={handleLogOut}
                  >
                    <LogOut /> LogOut
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link href={"/login"}>
              <Button
                variant="outline"
                className="rounded-full border border-gray-300 hover:bg-gray-200"
              >
                Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
