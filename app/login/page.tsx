export default function Login() {
    return (
        <main>
            <h1>Login</h1>
            <form>
                <fieldset><label htmlFor="username">Username: *</label>
                    <input id="username" name="username" />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password: *</label>
                    <input type="password" id="password" name="password" />
                </fieldset>
                <button>Login</button>
            </form>
        </main>
    )
}