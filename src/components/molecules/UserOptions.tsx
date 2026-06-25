'use client'

import AlternateButton from "../atoms/header/AlternateButton";
import LogoutButton from "../atoms/header/LogoutButton";

export default function UserOptions () {
    return (
        <div className="flex gap-4">
            <AlternateButton />
            <LogoutButton />
        </div>
        

    )

}