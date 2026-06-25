import { InputProps } from "@/src/types/InputProps";
import FormLabel from "../atoms/FormLabel";
import FormInput from "../atoms/FormInput";

export default function FormField ({name, placeholder = "", defaultValue = "", required = false} : InputProps) {
    return (
        <>
            <FormLabel
                name={name}
            />
            <FormInput
                name={name}
                placeholder={placeholder}
                defaultValue={defaultValue}
                required={required}
            />
        </>
    )

}