import { InputProps } from "@/src/types/InputProps";
import FormLabel from "../atoms/form/FormLabel";
import FormInput from "../atoms/form/FormInput";

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