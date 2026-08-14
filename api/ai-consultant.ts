import { GoogleGenAI } from "@google/genai";

const systemInstruction = `You are the Lead Solar Systems Engineer at Sun Leaf Solar, an ISO 9001:2015 certified solar engineering provider. Provide precise, technical, encouraging, and actionable solar engineering analysis. Detail recommended panel technology (N-Type TOPCon), inverter sizing, mounting ballast structures, and grid safety protocols. Keep response well-structured with concise bullet points.`;

// Vercel automatically exposes this file at POST /api/ai-consultant.
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const model = process.env.GEMINI_MODEL || "gemini-3.6-flash";
    const { prompt, propertyType, loadRequirements } = req.body || {};

    if (!apiKey || apiKey === "PASTE_YOUR_GEMINI_API_KEY_HERE") {
      return res.status(503).json({
        error: "Gemini API key is not configured.",
        details: "Add GEMINI_API_KEY in the Vercel project environment variables and redeploy.",
      });
    }

    const userPrompt = String(prompt || "").trim();
    if (!userPrompt) {
      return res.status(400).json({ error: "Please enter an engineering question." });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model,
      contents: userPrompt,
      config: {
        systemInstruction: `${systemInstruction}\n\nUser context: Property Type: ${propertyType || "Industrial"}, Load: ${loadRequirements || "Custom load consultation"}. Answer the user's exact question. Do not reuse a generic answer when the question changes. If information is missing, state the assumption clearly.`,
      },
    });

    const reply = response.text?.trim();
    if (!reply) {
      return res.status(502).json({ error: "Gemini returned an empty response." });
    }

    return res.status(200).json({ reply });
  } catch (error: any) {
    console.error("Gemini AI API Error:", error);
    return res.status(500).json({
      error: "Failed to generate AI consultation.",
      details: error?.message || String(error),
    });
  }
}
