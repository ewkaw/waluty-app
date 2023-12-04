import { useContext } from "react";
import { MyFirstContext } from "./App";
import { useUser } from "./UserContext";

export const SignInForm = () => {
    const { user, signIn, signOut } = useUser();

    // const userCtx = useUser();
    // userCtx.user
    // userCtx.signIn
    // const { user, signIn } = userCtx;

    if (user) return <>
        <button onClick={signOut}>Wyloguj</button>
    </>

    const handleSubmit = e => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const login = formData.get('login');

        signIn(login);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" name="login" required={true} />

            <button>Zaloguj</button>
        </form>
    )
}