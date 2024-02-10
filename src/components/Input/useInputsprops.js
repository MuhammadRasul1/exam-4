import { useState } from "react";

export const useInputProps = () => {

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    
    return { 
        show,
        handleClick 
    }
}