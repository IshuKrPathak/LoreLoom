import Image from "next/image";
import logo from "../images/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import StoryWriter from "@/components/StoryWriter";

export default function Home() {
  return (
    <main className=" flex-1 flex flex-col">
      <section className=" flex-1 grid grid-cols-1 lg:grid-cols-2">
        <div className=" bg-orange-400 flex flex-col space-y-5 justify-center items-center order-1 lg:-order-1 pb-10">
          <Image alt="logo" src={logo} height={350} />
          <Button className=" px-20 bg-orange-600 p-10 text-xl ">
            <Link href={"/stories"}> Explore Story Library</Link>
          </Button>
        </div>
        <StoryWriter />
      </section>
    </main>
  );
}
