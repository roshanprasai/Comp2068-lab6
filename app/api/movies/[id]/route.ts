// api routes for /api/movies/[id]: GET (one), PUT, DELETE

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const res: Response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/movies/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return Response.json(
        { message: "Failed to fetch movie" },
        { status: res.status }
      );
    }

    return Response.json(await res.json());
  } catch (error) {
    return Response.json(
      { message: "Server error while fetching movie" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();

    const res: Response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/movies/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      return Response.json(
        { message: "Failed to update movie" },
        { status: res.status }
      );
    }

    return Response.json(await res.json());
  } catch (error) {
    return Response.json(
      { message: "Server error while updating movie" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const res: Response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/movies/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) {
      return Response.json(
        { message: "Failed to delete movie" },
        { status: res.status }
      );
    }

    return new Response(null, { status: 204 });
  } catch (error) {
    return Response.json(
      { message: "Server error while deleting movie" },
      { status: 500 }
    );
  }
}