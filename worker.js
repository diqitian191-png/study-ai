export default {
  async fetch(request, env) {
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: cors });
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: cors });

    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    const minuteKey = 'rl:' + ip + ':' + Math.floor(Date.now() / 300000);
    const count = parseInt(await env.KV.get(minuteKey) || '0', 10);
    if (count >= 10) {
      return new Response(JSON.stringify({ error: '请求太频繁' }), {
        status: 429, headers: { ...cors, 'Content-Type': 'application/json' }
      });
    }
    await env.KV.put(minuteKey, String(count + 1), { expirationTtl: 300 });

    let body;
    try { body = await request.json(); } catch (e) {
      return new Response(JSON.stringify({ error: '无效请求' }), {
        status: 400, headers: { ...cors, 'Content-Type': 'application/json' }
      });
    }
    const { messages } = body;
    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: '缺少 messages' }), {
        status: 400, headers: { ...cors, 'Content-Type': 'application/json' }
      });
    }

    try {
      const upstream = await fetch(env.AI_URL + '/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + env.AI_KEY
        },
        body: JSON.stringify({
          model: env.AI_MODEL,
          messages: messages,
          temperature: 0.3
        })
      });
      const text = await upstream.text();
      return new Response(text, {
        status: upstream.status,
        headers: { ...cors, 'Content-Type': 'application/json' }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'AI 请求失败: ' + error.message }), {
        status: 502, headers: { ...cors, 'Content-Type': 'application/json' }
      });
    }
  }
};
