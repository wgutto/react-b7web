type Props = {
    name: string
    avatar?: string
    roles: string[]
}

export const Person = ({
    name, 
    avatar = 'https://wallpapers.com/images/high/best-profile-pictures-gg5dq5v46f70blbl.webp', 
    roles
}: Props) => {
    return (
        <div className="flex text-">
            <h1>{name}</h1>
            <img src={avatar} alt={name} className="w-44" />

            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </div>
    )
}