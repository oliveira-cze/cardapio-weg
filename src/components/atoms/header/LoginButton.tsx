import Link from "next/link";

export default function LoginButton () {
    return (
        <Link
            href="/login"
            className="cursor-pointer bg-main-blue px-6 py-2 rounded-full flex items-center justify-end font-bold text-white-system hover:bg-blue-900 transition-all"
        >
            Login
        </Link>
    )
}