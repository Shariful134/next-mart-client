import Logo from "@/app/assest/svgs/Logo";

import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "../button";

export default function Navbar() {
  return (
    <header className="border-b w-full">
      <div className="container flex justify-between items-center h-16 px-3 mx-auto">
        <h1 className="text-2xl font-black flex items-center">
          <Logo />
          ext Mart
        </h1>
        <div className="max-w-md flex-grow">
          <input
            type="text"
            placeholder="Search for products"
            className=" w-full max-w-6xl rounded-full border border-gray-500 px-5 py-2"
          />
        </div>
        <nav className="flex gap-2">
          <Button variant="outline" className="rounded-full p-0 size-10">
            <Heart />
          </Button>
          <Button variant="outline" className="rounded-full p-0 size-10">
            <ShoppingBag />
          </Button>
        </nav>
      </div>
    </header>
  );
}
