"use client";
import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();
  console.log(user);
  return (
    <div>
      <h2 className="text-3xl">This is home page</h2>
    </div>
  );
};

export default HomePage;
