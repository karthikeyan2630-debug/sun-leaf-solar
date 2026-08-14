# Sun Leaf Solar - AI Bot Fix

## Gemini AI setup
1. Open `.env.local`.
2. Replace `PASTE_YOUR_GEMINI_API_KEY_HERE` with your real Gemini API key.
3. Restart the server after changing the key:

```bash
npm install
npm run dev
```

The AI assistant now sends every user question to the `/api/ai-consultant` endpoint and returns the Gemini response. It no longer displays a hard-coded fallback answer when Gemini is unavailable.

## Vercel deployment

Vercel serves the chatbot through `api/ai-consultant.ts`; it does not run the local Express development server (`server.ts`). In your Vercel project, open **Settings → Environment Variables**, add `GEMINI_API_KEY` with your real Gemini API key for **Production** (and Preview if needed), then redeploy. Never commit the key to GitHub.

If the key is missing or invalid, the chat displays the actual configuration/API error so it can be fixed instead of repeating the same engineering answer.


## Gemini AI configuration

Set your Gemini API key in `.env.local`:

```env
GEMINI_API_KEY="YOUR_REAL_GEMINI_API_KEY"
GEMINI_MODEL=gemini-3.6-flash
```

Restart the server after changing `.env.local`:

```bash
Ctrl+C
npm run dev
```

The AI consultant uses the stable `gemini-3.6-flash` model.
