import Avatar from "../atoms/Avatar";
import Name from "../atoms/Name";
import { User } from "@/src/types/User";

export default function UserBadge ({user} : {user : User}){
    return (
        <div className="flex items-center gap-2">
            <Avatar 
                user={user}
            />
            <Name
                name={user.name}
            />
        </div>
    )
}