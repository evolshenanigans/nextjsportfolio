import Image from "next/image";
import Bio from "../components/Bio";
import picture from "../../public/githubPFP.jpg";

function About() {
  return (
    <div className="flex h-screen ">
      <div className="m-auto">
        <Image
          src={picture}
          alt="profilepic"
          width={175}
          height={175}
          className="block ml-auto mr-auto mb-2 rounded-2xl drop-shadow-md mt-0"
          placeholder="blur"
          loading="lazy"
        />
        <Bio />
      </div>
    </div>
  );
}

export default About;
