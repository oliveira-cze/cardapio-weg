import Image from "next/image"
import { User } from "@/src/types/User"

export default function Avatar({ user } : { user: User | undefined }) {
    return (
        <>
            {user && user.image ?
                <Image
                    src={user.image}
                    alt={`Image of the ${user.name} user`}
                    height={75}
                    width={75}
                    className="rounded-full ring-0 hover:ring-2 ring-main-blue size-12 transition-all cursor-pointer"
                />
            :
                <div className="rounded-full bg-main-blue size-11.25"></div>
            }
        </>
    )
}