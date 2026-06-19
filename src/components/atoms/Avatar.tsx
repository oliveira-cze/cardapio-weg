import Image from "next/image"
import { User } from "@/src/types/User"

export default function Avatar({ user } : { user?: User }) {
    return (
        <>
            {user ?
                <Image
                    src={user.image}
                    alt={`Image of the ${user.name} user`}
                    height={45}
                    width={45}
                    className="rounded-full hover:ring-8 ring-inset ring-blue-700 size-11.25"
                />
            :
                <div className="rounded-full bg-blue-700 size-11.25"></div>
            }
        </>
    )
}