export const dynamic = 'force-dynamic';

import Link from "next/link";
import { Movie } from "@/types/movie";

async function getMovies(): Promise<Movie[]> {
  const res: Response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/movies`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const movies: Movie[] = await res.json();
  return movies;
}

export default async function Movies() {
  const movies = await getMovies();

  return (
    <main>
      <h1>Our Movies</h1>
      <Link href="/movies/create" className="standardLink">
        Add a New Movie
      </Link>

      <ul>
        {movies.map((movie) => (
          <li className="card" key={movie._id}>
            <Link href={`/movies/${movie._id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}