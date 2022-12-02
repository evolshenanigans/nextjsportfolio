import Image from "next/image";

export default function Home() {
  return (
    <div className="grid h-screen place-items-center bg-[#0A1A20] ">
      <div className="bg-[#0E0004] grid h-5/6 w-5/6 rounded-xl drop-shadow-2xl shadow-2xl">
        <div className="grid h-10 place-items-center pt-10">
          <h1 className="text-white text-3xl font-bold ">
            Hi welcome to my website.
          </h1>
        </div>
        <div className="grid place-items-center mt-0">
          <h2 className="text-white text-xl font-bold mt-0">
             Name: Gus Josh Gutierrez
             <br />
             Occupation: Software Developer
             </h2>
        </div>
      </div>
    </div>
  );
}
