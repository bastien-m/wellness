import type { LinksFunction } from "@remix-run/node";
import { Outlet,  } from "@remix-run/react"
import styles from "../styles/jokes/jokes.css"

export const links: LinksFunction = () => {
    return [{ rel: "stylesheet", href: styles }];
};


export default () => {
    return (
        <>
            <h1>
                Jokes Module        
            </h1>
            <Outlet />
        </>
    )
}