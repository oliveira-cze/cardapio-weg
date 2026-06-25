import { InputProps } from "@/src/types/InputProps";

export default function FormLabel ({name} : InputProps) {
    return (
        <label 
            className="capitalize text-main-blue font-semibold mb-1"
            htmlFor={name}
        >
            {name}:
        </label>
    )
}