export default function Register() {
    return (
        <main>
            <h1>Register</h1>
            <form>
                <fieldset><label htmlFor="username">Username: *</label>
                    <input type="email" id="username" name="username" />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password: *</label>
                    <input type="password" id="password" name="password" />
                </fieldset>
                <fieldset>
                    <label htmlFor="confirm">Confirm Password: *</label>
                    <input type="password" id="confirm" name="confirm"/>
                </fieldset>
                <button>Register</button>
            </form>
        </main>
    )
}