import React from "react"
import styles from "./styles.css"

export const links = () => 
    [{ rel: "stylesheet", href: styles}]


type ToggleParams = {
    isToggled: boolean;
    onChanged: (value: boolean) => void;
}

const Toggle = ({isToggled, onChanged}: ToggleParams) => {

    const handleToggleChange = React.useCallback(
        (toggleState: boolean) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.preventDefault()
            onChanged(toggleState)
        }, 
    [onChanged])
    
    return (
        <div data-toggle-container>
            <div onClick={handleToggleChange(true)}>
                Yes
            </div>
            <div onClick={handleToggleChange(false)}>
                No
            </div>
        </div>
    )
}

export default React.memo(Toggle)