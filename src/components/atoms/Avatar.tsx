import Image from "next/image"
import { User } from "@/src/types/User"

export default function Avatar({ user } : { user: User | undefined }) {
    return (
        <>
            {user ?
                <Image
                    src={user.image}
                    alt={`Image of the ${user.name} user`}
                    height={75}
                    width={75}
                    className="rounded-full ring-0 hover:ring-2 ring-blue-700 size-12 transition-all cursor-pointer"
                />
            :
                <div className="rounded-full bg-blue-700 size-11.25"></div>
            }
        </>
    )
}