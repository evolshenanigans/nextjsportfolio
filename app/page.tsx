import Image from "next/image";
import picture from "../public/SMlong.jpg";

export default function Home() {
  return (
    <div className="grid overflow-hidden h-screen place-items-center bg-[#0A1A20] ">
      <div className="bg-[#0E0004] overflow-hidden grid h-5/6 w-5/6 rounded-xl drop-shadow-2xl shadow-2xl relative">
        <div className="grid h-10 place-items-center pt-10 relative">
          <h1 className="text-white text-3xl font-bold relative">
            Hi welcome to my website.
          </h1>
          <Image
            src={picture}
            alt="homepic"
            // width={500}
            // height={100}
            className="relative -mt-20 grid justify-self-center rounded-2xl drop-shadow-md h-4/6 w-4/6"
            placeholder="blur"
            loading="lazy"
          />
          <h2 className="text-white text-xl font-bold -mt-12 relative">
            Name: Gus Josh Gutierrez
            <br />
            Occupation: Software Developer
          </h2>
        </div>
      </div>
    </div>
  );
}
