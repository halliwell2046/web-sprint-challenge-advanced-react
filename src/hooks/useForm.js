// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (intialValue) => {
    const [showSuccessMessage, setShowSuccessMessage ] = useState(false);
    const [value, setValue] = useState(initialValue);

    const hanldeChange = (e) => {
        setValue({..value, [e.target.name]: e.targe.value});
    };

    const handleSubmit = (e) => {
        e.prevendDefault();
        setShowSuccessMessage(true);
    };
    return [value, hanldeChange, handleSubmit, showSuccessMessage]
}