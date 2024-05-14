export async function POST(request) {
  const res = await request.json();
  const sessionToken = res.payload?.metadata?.token;
  if (!sessionToken) {
    return Response.json(
      { message: "No take session token" },
      {
        status: 400,
      }
    );
  }

  return Response.json(res.payload, {
    status: 200,
  });
}
