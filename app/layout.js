import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: " %s The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },

  description:
    "luxurious cabin Hotel  located in jungle !, surrounded by beautiful mountains and dark forest !! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` bg-primary-950  antialiased relative text-primary-100 flex flex-col  min-h-dvh ${josefin.className}`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
