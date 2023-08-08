type NameProps = {
    name: string
}

export const Button = (props: NameProps) => {
    return (
        <button>"{props.name}</button>
    )
}