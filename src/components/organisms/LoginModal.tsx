import FormButton from "../atoms/FormButton";
import FormField from "../molecules/FormField";
import { login } from "../../app/actions"
import Logo from "../atoms/Logo";
import Link from "next/link";

export default async function LoginModal() {

    return (
        <div 
            className="bg-white-system p-8 flex flex-col items-center justify-center rounded-md"
        >
            <div
                className="mb-8"
            >
                <Logo/>
            </div>
            

            <form
                className="flex flex-col w-[20vw] mb-2"
                action={login}
            >
                <FormField
                    name="name"
                    placeholder="Insert your name here"
                    required={true}
                />
                <FormField
                    name="password"
                    placeholder="********"
                    required={true}
                />
                <FormButton
                    text="Login"
                />
            </form>
            <Link
                href={"/weekly-menu"}
                className="text-main-blue underline hover:text-blue-900"
            >
              Enter as a Guest  
            </Link>
        </div>
    ) 
}