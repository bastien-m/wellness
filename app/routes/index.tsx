import React from "react";
import PrimaryButton from "~/components/ui/button/Primary";
import DefaultButton from "~/components/ui/button/Default";
import Switch from "~/components/ui/switch";


export default function Index() {
  const [enabled, setEnabled] = React.useState(false)

  return (
    <div className="text-white">
      <h1>Hello Remix App</h1>
      <PrimaryButton onClick={() => console.log("click on primary button")} title="Primary Button"/>
      <DefaultButton onClick={() => console.log("click on default button")} title="Default Button"/>
      <Switch enabled={enabled} setEnabled={setEnabled}>
        {enabled ? "Yes" : "No"}
      </Switch>
      <Switch enabled={enabled} setEnabled={setEnabled}></Switch>
    </div>
  );
}
