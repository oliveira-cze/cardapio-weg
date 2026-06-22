'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"
import { motion } from "framer-motion";


export default function AlternateButton() {

    const pathName : string = usePathname();

    const isWeeklyMenu : boolean = pathName.includes("weekly-menu")

    return (
        <nav className="flex gap-2 border border-blue-700 p-1.5 rounded-full text-gray-800 hover:text-gray-700">
            <Link 
                href="/weekly-menu"
                className="px-3 py-2 rounded-full font-bold relative"
            >
                {isWeeklyMenu && (
                    <motion.div
                        layoutId="active-tab"
                        className="absolute inset-0 bg-blue-700 rounded-full disabled:cursor-default"
                        transition={{
                            type: "tween",
                            ease: "easeInOut",
                            duration: 0.2
                        }}
                        aria-disabled={isWeeklyMenu}
                    />
                )}

                <span
                    className={`relative z-10 transition-colors ${
                        isWeeklyMenu && "text-white-system"
                    }`}
                >
                    Weekly Menu
                </span>
            </Link>
            <Link 
                href="/admin"
                className="px-3 py-2 rounded-full font-bold relative"
            >
                {!isWeeklyMenu && (
                    <motion.div
                        layoutId="active-tab"
                        className="absolute inset-0 bg-blue-700 rounded-full"
                        transition={{
                            type: "tween",
                            ease: "easeInOut",
                            duration: 0.2
                        }}
                    />
                )}

                <span
                    className={`relative z-10  transition-colors ${
                        !isWeeklyMenu && "text-white-system"
                    }`}
                >
                    Admin
                </span>
            </Link>
        </nav>
    )
}