import React from "react";
import type { ButtonParameter } from "./buttonParameter";

const DefaultButton = React.forwardRef<HTMLButtonElement, ButtonParameter>(function Component({title, ...props}, ref) {
    return (
        <button 
            ref={ref} 
            {...props} 
            className="block bg-blue-500 p-2 text-xs text-white font-light hover:bg-blue-600 w-32">
                {title}
        </button>
    )
})

export default React.memo(DefaultButton)
