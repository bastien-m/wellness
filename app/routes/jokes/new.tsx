import type { ActionFunction} from "@remix-run/node";
import { redirect } from "@remix-run/node"
import { db } from "prisma/seed"
import React from "react"

export type Joke = {
    name: string
    content: string
}

export const action: ActionFunction = async ({
    request,
}) => {
    const form = await request.formData()
    const name = form.get("name")?.toString()
    const content = form.get("content")?.toString()

    if (!name || !content) throw new Error("Bad Request")

    const fields = { name, content }

    const joke = await db.joke.create({
        data: fields
    })

    return redirect(`/jokes/${joke.id}`)
}

export default () => {
    const [newJoke, setNewJoke] = React.useState<Joke>()
        const handleNameChanged = React.useCallback((e: React.FormEvent<HTMLInputElement>) => {
        const newName = e.currentTarget.value;
        setNewJoke(joke => ({name: newName, content: joke?.content ?? ""}))
        console.log(newName)
    }, [])

    const handleContentChanged = React.useCallback((e: React.FormEvent<HTMLTextAreaElement>) => {
        const newContent = e.currentTarget.value
        setNewJoke(joke => ({name: joke?.name ?? "", content: newContent}))
    }, [])
    
    return (
        <form method="post">
            <div className="form-wrapper">
                <div className="form-row">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text" id="name" name="name" placeholder="Joke name" onChange={handleNameChanged}/>
                </div>
                <div className="form-row">
                    <label htmlFor="content">
                        Joke
                    </label>
                    <textarea id="content" name="content" placeholder="Content" onChange={handleContentChanged}></textarea>
                </div>
                <div className="form-action">
                    <button type="submit" disabled={newJoke === undefined}>Create</button>
                </div>
            </div>
        </form>
    )
}