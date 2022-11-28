import Image from "next/image";

export default function Home() {
  return (
    <div className="grid h-screen place-items-center bg-[#1F2233] ">
      <div className="bg-[#13161E] grid h-5/6 w-5/6 place-items-center rounded-xl drop-shadow-2xl shadow-2xl">
        <h1 className="text-white text-3xl font-bold underline">
          Hi welcome to my website rgb(31,34,51)
        </h1>
      </div>
    </div>
  );
}
