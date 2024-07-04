import Header from "@/components/header";
import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const HomePage: NextPage<Props> = () => {
  return (
    <div className="w-full">
      <div className="h-96 relative mt-10 w-full flex justify-center">
        <Header />
      </div>
      <form
        action=""
        className="mt-40 flex flex-col justify-center items-center space-y-10"
      >
        <h1 className="text-4xl font-bold">Register for get window 11 free!</h1>
        <Link href={"/window.pdf"} download>
          <Button color="primary">
            <p className="text-2xl font-bold p-20">Get</p>
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default HomePage;
