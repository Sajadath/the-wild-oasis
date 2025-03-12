import SignInButton from "../_components/SignInButton";
import styles from "./page.module.css";
export const metadata = {
  title: "Login",
};
export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-3xl   py-20 font-semibold">
        Sign in to access your guest area
      </h2>
      <SignInButton />
    </div>
  );
}
