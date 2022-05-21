import type { Joke } from "@prisma/client";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "prisma/seed"

type LoaderData = {
    joke: Joke
}

export const loader: LoaderFunction = async ({params}) => {
    const joke = await db.joke.findUnique({
        where: { id: params.jokeId}
    })
    if (!joke) throw new Error("404 Not Found")
    return json({joke});
}

export default () => {
    const { joke } = useLoaderData<LoaderData>();
    return (
        <>
            <h1>{joke.name}</h1>
            <Link to="/jokes">
                <button type="button">Back</button>
            </Link>
            <div className="form-wrapper">{joke.content}</div>
            
        </>
    )
}