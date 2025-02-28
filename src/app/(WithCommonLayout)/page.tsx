import { getCurrentUser } from "@/services/authService";

const HomePage = async () => {
  const currentuserData = await getCurrentUser();
  console.log(currentuserData);
  return (
    <div>
      <h2 className="text-3xl">This is home page</h2>
    </div>
  );
};

export default HomePage;
