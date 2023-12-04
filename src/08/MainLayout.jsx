import { SignInForm } from "./SignInForm";

export const MainLayout = () => {
    return (
        <>
            <nav>
                <a href="#">Start</a>
                <a href="#">O nas</a>
                <a href="#">Kontakt</a>
            </nav>

            <main>
                <SignInForm />
            </main>
        </>
    )
};