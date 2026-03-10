// route.ts: standard Next.js file name for file used to call external api

// GET: /api/games => fetch all games from server api
export async function GET() {
    // use the js fetch lib to call our server api & get a response
    // this connects React client app to Express server app
    const res: Response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/v1/movies`);
    return Response.json(await res.json());
}