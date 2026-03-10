// child component
import Studio from "../components/studio";

export default function About() {
    return (
        <main>
            <h1>About this Site</h1>
            <p>This is using Next.js and React.</p>
            <Studio name="Universal Studios" yearFounded={1912} />
            <Studio name="Warner Bros." yearFounded={1910} />
            <Studio name="Sony Pictures" yearFounded={1987} />
            <Studio name="Walt Disney Studios" yearFounded={1923} />
         </main>
    )
}