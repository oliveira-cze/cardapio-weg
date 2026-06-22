'use client'

import AlternateButton from "../atoms/AlternateButton";
import LogoutButton from "../atoms/LogoutButton";

export default function UserOptions () {
    return (
        <div className="flex gap-2">
            <AlternateButton />
            <LogoutButton />
        </div>
        

    )

}