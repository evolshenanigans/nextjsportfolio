import Link from "next/link";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
];

export default function Navigation() {
  return (
    <div className="scroll-sticky flex justify-center bg-slate-500">
      <li className="flex gap-5 mr-2">
        {links.map((link) => (
          <Link className="text-center block border border-zinc-500 rounded py-2 px-4 bg-zinc-500 hover:bg-zinc-400 text-white" key={link.name} href={link.path}>
            {link.name}{" "}
          </Link>
        ))}
      </li>
    </div>
  );
}
