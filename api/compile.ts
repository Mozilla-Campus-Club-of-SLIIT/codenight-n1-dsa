export async function POST(request: Request) {
  let body: { compiler?: string; code?: string };
  try {
    body = await request.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const { compiler, code } = body;
  if (!compiler || !code) {
    return new Response("Missing compiler or code", { status: 400 });
  }

  const response = await fetch(
    "https://api.onlinecompiler.io/api/run-code-sync",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.VITE_ONLINE_COMPILER_API_KEY ?? "",
      },
      body: JSON.stringify({ compiler, code }),
    }
  );

  const result = await response.json();
  if (result.error) throw result.error;

  return new Response(JSON.stringify({ output: result.output }), {
    headers: { "Content-Type": "application/json" },
  });
}