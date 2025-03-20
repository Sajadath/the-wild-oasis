import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "Login",
};
export default function Page() {
  return (
    <div className="flex flex-col gap-10 mt-10 items-center">
      <h2 className="text-lg md:text-3xl   py-20 font-semibold">
        Sign in to access your guest area
      </h2>
      {/* Sign in here */}
      <SignInButton />
    </div>
  );
}
