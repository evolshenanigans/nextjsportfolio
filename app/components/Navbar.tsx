import Link from "next/link";
import {AiFillHome} from "react-icons/ai";
import {BsPersonLinesFill} from "react-icons/bs";
import {AiTwotoneMail} from "react-icons/ai";
import {TiMessages} from "react-icons/ti";

const links = [
  { name: "Home", path: "/", icon: <AiFillHome /> },
  { name: "About", path: "/about", icon: <BsPersonLinesFill /> },
  { name: "Contact", path: "/contact", icon: <AiTwotoneMail /> },
  { name: "Blog", path: "/blog", icon: <TiMessages /> },
];

export default function Navigation() {
  return (
    <div className="flex fixed left-1/2 gap-3 py-3 px-7 z-[2] w-max translate-x-[-50%] bottom-8 rounded-[3rem] backdrop-blur-lg bg-gray-900 opacity-30">
      <li className="flex">
        {links.map((link) => (
          <Link className="flex bg-transparent hover:bg-white hover:opacity-100 hover:text-black hover:rounded-full gap-1 items-center p-[0.9rem] rounded-[100%] text-[1.1rem] text-white" key={link.name} href={link.path}>
            {link.name}{" "}{link.icon}
          </Link>
        ))}
      </li>
    </div>
  );
}
