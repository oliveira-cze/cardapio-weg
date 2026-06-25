'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"
import { motion } from "framer-motion";

const NAV_ITEMS = [
    { label: "Wekly Menu", href: "/weekly-menu" },
    { label: "Admin", href: "/admin" },
]


export default function AlternateButton() {

    const pathName: string = usePathname();

    return (
        <nav className="flex gap-2 border border-main-blue p-1.5 rounded-full text-gray-800 hover:text-gray-700">
            {NAV_ITEMS.map((item) => {
                const isActive = pathName.includes(item.href);

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="px-3 py-2 rounded-full font-bold relative"
                    >
                        {isActive && (
                            <motion.div
                                layoutId="active-tab"
                                className="absolute inset-0 bg-main-blue rounded-full"
                                transition={{
                                    type: "tween",
                                    ease: "easeInOut",
                                    duration: 0.2,
                                }}
                            />
                        )}
                        <span
                            className={`relative z-10 transition-colors ${isActive ? "text-white-system" : ""
                                }`}
                        >
                            {item.label}
                        </span>
                    </Link>
                )
            })}
        </nav>
    )
}