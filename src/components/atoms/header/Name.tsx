export default function Name({name} : {name : string | undefined}) {
    return (
        <p 
            className={"text-xl min-w-30 w-fit cursor-default "}
        >
            {name ? `${name}` : "Guest"}
        </p>
    )
}