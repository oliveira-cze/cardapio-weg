import UserBadge from "../molecules/UserBadge";
import { User } from "@/src/types/User";
import Logo from "../atoms/Logo";
import LoginButton from "../atoms/header/LoginButton";
import UserOptions from "../molecules/UserOptions";

export default async function Header({ user }: { user: User | undefined }) {

    return (
        <header className="flex w-full fixed z-20 justify-between items-center px-16 py-5 bg-white-system border-b border-gray-800/20">
            <UserBadge
                user={user ? user : undefined}
            />
            <Logo />
            {user ?
                <UserOptions />
                :
                <LoginButton />
            }
        </header>
    )
}