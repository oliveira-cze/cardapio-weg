export default function WeekDay ({day} : {day : string}){
    return (
        <p 
            className="font-semibold text-lg capitalize text-main-blue border-b-2 border-main-blue mb-6 pb-1"
        >
            {day}
        </p>
    )
}