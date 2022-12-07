"use client";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

function Bio() {
  return (
    <div className="w-screen flex justify-center items-center">
      <div className="w-4/6 h-48 ">
      <RoughNotationGroup show={true}>
        <p>
          Hello! I am Josh, a{" "}
          <RoughNotation
            type="highlight"
            animationDelay={50}
            animationDuration={200}
            color="yellow"
          >
            Frontend Developer{" "}
          </RoughNotation>
          based in Los Angeles, California. I love making websites and web apps
          that are fast, responsive, and accessible. I am currently working on
          this website as a passion project that will start to include my life
          as a boot camp graduate.
        </p>
        <p className="">
          My current stack right now is:
          <RoughNotation
            type="highlight"
            animationDuration={400}
            color="lavender"
          >
            {" "}
            React 
          </RoughNotation>
          ,
          <RoughNotation 
          type="highlight" 
          animationDuration={400} 
          color="pink">
            {" "}
            Next.js
          </RoughNotation>
          ,
          <RoughNotation
            type="highlight"
            animationDuration={400}
            color="salmon"
          >
            {" "}
            TailwindCSS
          </RoughNotation>
          , and
          <RoughNotation
            type="highlight"
            animationDuration={400}
            color="orange"
          >
            {" "}
            Nodejs.
          </RoughNotation>
        </p>
        <p>
          I&apos;m currently looking for a new role as developer.
          <RoughNotation type="circle" animationDuration={200} color="purple">
            <span className="font-medium"> Hire me?</span>
          </RoughNotation>
        </p>
      </RoughNotationGroup>
      </div>
    </div>
  );
}

export default Bio;
