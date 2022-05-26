import React from "react";
import type { ButtonParameter } from "./buttonParameter";

const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonParameter>(function Component({title, ...props}, ref) {
    return (
        <button 
            ref={ref} 
            {...props} 
            className="block bg-green-500 p-2 text-xs text-white font-light hover:bg-green-600 w-32">
                {title}
        </button>
    )
})

export default React.memo(PrimaryButton)
