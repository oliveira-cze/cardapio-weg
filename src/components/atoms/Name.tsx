export default function Name({name} : {name : string}) {
    return (
        <p className="font-bold text-xl"
        >{name ? `${name}` : "Convidado"}</p>
    )
}