import { InputProps } from "@/src/types/InputProps";

export default function FormInput ({name, placeholder = "", defaultValue = "", required = false} : InputProps) {
    return (
        <input 
            className="w-full py-2 pl-2 border border-main-blue rounded-lg mb-4 focus:outline-none"
            id={name}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            required={required}
        >
        </input>
    )
}