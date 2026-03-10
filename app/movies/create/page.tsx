export default function CreateMovie() {
    return (
        <main>
            <h1>Movie Details</h1>
            <form>
                <fieldset><label htmlFor="">Title: *</label><input type="text" /></fieldset>
                <fieldset><label htmlFor="">Year: *</label><input type="text" /></fieldset>
                <fieldset><label htmlFor="">Genre: </label><input type="text" /></fieldset>
                <fieldset><label htmlFor="">Rating /10:</label><input type="text" /></fieldset>
                <fieldset><label htmlFor="">Duration (mins)</label><input type="text" /></fieldset>
                <button>Save</button>
            </form>
        </main>
    )
}