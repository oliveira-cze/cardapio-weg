import UserBadge from "../molecules/UserBadge";
import { User } from "@/src/types/User";


const user : User = {
    uuid: "1111-1111-1111-1111",
    name: "Arthur",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761",
}

export default function Header () {
    return (
        <header>
            <UserBadge 
                user={user}
            />
            <h1>WEG</h1>
        </header>
    )

}