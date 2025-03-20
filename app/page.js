import Image from "next/image";
import Link from "next/link";

import bg from "@/public/bg.png";

export default function Page() {
  console.log(123);

  return (
    <main className="mt-24 ">
      <Image
        src={bg}
        quality={80}
        className="object-cover object-top"
        fill
        alt="Mountains and forests with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-xl md:text-8xl text-primary-50 mb-20 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <GlassyButton />
      </div>
    </main>
  );
}

function GlassyButton() {
  return (
    <Link
      href="/cabins"
      className="text-white/70 py-6 hover:text-cyan-300 backdrop-blur-lg bg-gradient-to-tr from-transparent via-[rgba(121,121,121,0.16)] to-transparent rounded-md  px-10 shadow hover:shadow-cyan-300 duration-700"
    >
      Explore luxury cabins
    </Link>
  );
}
