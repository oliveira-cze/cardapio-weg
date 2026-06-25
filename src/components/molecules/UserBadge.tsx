import Avatar from "../atoms/header/Avatar";
import Name from "../atoms/header/Name";
import { User } from "@/src/types/User";

export default function UserBadge ({user} : {user : User | undefined}){
    return (
        <div className="flex items-center gap-3">
            <Avatar 
                user={user}
            />
            <Name
                name={user? user.name : undefined}
            />
        </div>
    )
}