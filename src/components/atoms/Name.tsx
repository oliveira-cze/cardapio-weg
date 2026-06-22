export default function Name({name} : {name : string | undefined}) {
    return (
        <p 
            className={"text-xl w-30 cursor-default "}
        >
            {name ? `${name}` : "Guest"}
        </p>
    )
}