import { signInAction } from "../_lib/actions";
import styles from "@/app/login/page.module.css";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className={`${styles.button} flex gap-4`}>
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
