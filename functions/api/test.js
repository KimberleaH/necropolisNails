export async function onRequest(context) {
    const { env } = context;
    return new Response(JSON.stringify({
        client_id: env.GITHUB_CLIENT_ID ? "✓ Set" : "✗ Undefined",
        client_secret: env.GITHUB_CLIENT_SECRET ? "✓ Set" : "✗ Undefined",
    }), {
        headers: { 'content-type': 'application/json' }
    });
}