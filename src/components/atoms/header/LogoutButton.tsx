import Link from "next/link";
import { logout } from "@/src/app/actions";

export default function LogoutButton() {
    return (
        <div className="flex items-center">
            <Link
                href="/weekly-menu"
                className="cursor-pointer bg-red-800 px-6 py-2 rounded-full flex items-center justify-center font-bold text-white-system hover:bg-red-900 transition-all"
                onClick={() => logout()}
            >
                Logout
            </Link>
        </div>

    )
}