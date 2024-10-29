// app/api/items/route.js
import items from '../../data/items.json';

export async function GET(request) {
  return new Response(JSON.stringify(items), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
