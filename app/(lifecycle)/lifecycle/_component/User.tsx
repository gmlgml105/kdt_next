import type { User } from "./UserContainer";

interface userProps {
    user: User
}

export default function User({user}: userProps) {
    const {name, email} = user;

    return (
        <li>
            <p>정보: {name}({email})</p>
        </li>
    );
}