export default function FormButton ({text} : {text : string}) {
    return (
        <button className="bg-main-blue hover:bg-blue-900 transition-colors px-4 py-2 text-white-system font-bold rounded-full cursor-pointer">
            <p>{text}</p>
        </button>
    )
}