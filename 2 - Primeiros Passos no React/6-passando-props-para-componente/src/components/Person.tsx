type Props = {
    name: string
    avatar:string
    roles: string[]
}

export const Person = (props: Props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.avatar} alt={props.name} className="w-44" />

            <ul>
                <li>{props.roles[0]}</li>
                <li>{props.roles[1]}</li>
            </ul>
        </div>
    )
}