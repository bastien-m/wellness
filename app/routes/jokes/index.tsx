import type { Joke } from "@prisma/client";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { db } from "prisma/seed";

type LoaderData = {
    jokes: Joke[]
}

export const loader: LoaderFunction = async () => {
    const jokes = await db.joke.findMany()
    return json({jokes})
}


export default () => {
    const { jokes } = useLoaderData<LoaderData>();

    return (
        <div className="form-wrapper">
            <h1>Jokes home page</h1>
            {jokes && jokes.map(joke => (
                <div key={joke.id}>
                    <h2>{joke.name}</h2>
                    <div>{joke.content}</div>
                    <Link to={`/jokes/${joke.id}`}>Open</Link>
                </div>
            ))}
        </div>
    )
}