import Link from "next/link";

export default function LoginButton () {
    return (
        <Link
            href="/login"
            className="cursor-pointer bg-blue-700 mx-26 my-1.25 px-6 py-2 rounded-full flex items-center justify-center font-bold  hover:bg-blue-800 transition-all"
        >
            <p className="text-xl text-white-system">
                Login
            </p>
        </Link>
    )
}