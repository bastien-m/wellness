import React from "react";
import { Switch as HeadlessSwitch} from "@headlessui/react";

export type SwitchProperties = {
    enabled: boolean;
    setEnabled: (enable: boolean) => void;
    children?: React.ReactNode
}

const Switch = ({enabled, setEnabled, children}: SwitchProperties) => {
    return (
        <div>
            <HeadlessSwitch checked={enabled}
                onChange={setEnabled}
                className={`${
                enabled ? 'bg-blue-600' : 'bg-gray-200'
                } relative inline-flex h-4 w-7 items-center rounded-full`}>
                <span className="sr-only">Enable notifications</span>
                <span
                    className={`${
                    enabled ? 'translate-x-3' : 'translate-x-1'
                    } inline-block h-3 w-3 transform rounded-full bg-white`}
                />
            </HeadlessSwitch>
            {children}
        </div>
    )
}

export default React.memo(Switch);