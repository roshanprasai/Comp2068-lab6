// route.ts: standard Next.js file name for file used to call external api GET (all) & POST

// GET: /api/movies => fetch all movies from server api
export async function GET() {
    const res: Response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/movies`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        return Response.json(
            { message: "Failed to fetch movies" },
            { status: res.status }
        );
    }

    return Response.json(await res.json());
}

// POST: /api/movies => submit new movie to db
export async function POST(req: Request) {
    const body = await req.json();

    const res: Response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/movies`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        }
    );

    if (!res.ok) {
        const errorText: string = await res.text();
        return new Response(errorText, { status: res.status });
    }

    return Response.json(await res.json(), { status: 201 });
}