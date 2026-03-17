'use client';
import { useState } from "react";

export default function CreateMovie() {
    // state vars for form inputs
    const [title, setTitle] = useState<string>('');

    // state var key/val dictionary of validation errors in form
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};

        // check title
        if (!title.trim()) newErrors.title = 'Title is required';

        setErrors(newErrors);

        // are there any errors in our dictionary?
        if (Object.keys(newErrors).length === 0) {
            alert('valid');
            return true;
        }

        alert('invalid');
        return false;
    };

    return (
        <main>
            <h1>Movie Details</h1>
            <form onSubmit={validate}>
                <fieldset>
                    <label htmlFor="">Title: *</label>
                    <input name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="">Year: *</label>
                    <input type="text" />
                </fieldset>
                <fieldset>
                    <label htmlFor="">Genre: </label>
                    <input type="text" />
                </fieldset>
                <fieldset>
                    <label htmlFor="">Rating /10:</label>
                    <input type="text" /></fieldset>
                <fieldset>
                    <label htmlFor="">Duration (mins)</label>
                    <input type="text" />
                </fieldset>
                <button>Save</button>
            </form>
        </main>
    )
}