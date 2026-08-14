import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
dotenv.config();
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", service: "Sun Leaf Solar Engine API" });
  });

  // Calculate Solar Sizing & Financial Estimates
  app.post("/api/solar-estimate", (req, res) => {
    const { propertyType, monthlyBillInr, roofAreaSqFt, desiredBackupHours = 4 } = req.body || {};
    
    const bill = Number(monthlyBillInr) || 50000;
    const area = Number(roofAreaSqFt) || 2500;
    
    // Average commercial tariff assumption: ₹8.50/kWh
    const estimatedMonthlyKwh = bill / 8.5;
    const dailyKwhNeeded = estimatedMonthlyKwh / 30;
    // Average peak sun hours: ~4.8 hrs/day
    const recommendedKw = Math.ceil((dailyKwhNeeded / 4.8) * 1.15); // 15% system loss buffer
    
    // Panel count (based on 580W panels)
    const panelCount = Math.ceil((recommendedKw * 1000) / 580);
    const requiredSqFt = panelCount * 28; // ~28 sq ft per panel with spacing
    
    const estCostInr = recommendedKw * 65000; // Indicative installed cost: ₹65,000/kW
    const annualSavingsInr = bill * 12 * 0.85; // 85% bill reduction
    const paybackYears = (estCostInr / annualSavingsInr).toFixed(1);
    const co2ReductionTonnes = (recommendedKw * 1.1).toFixed(1);

    res.json({
      propertyType: propertyType || 'industrial',
      recommendedKw,
      panelCount,
      requiredSqFt,
      areaFits: area >= requiredSqFt,
      estCostInr,
      annualSavingsInr: Math.round(annualSavingsInr),
      paybackYears,
      co2ReductionTonnes,
      recommendedInverter: recommendedKw > 30 ? 'SunLeaf PolyCab 50kW' : 'SunLeaf Smart Hybrid 15kW',
      batteryStorageKwh: propertyType === 'industrial' ? recommendedKw * 2 : recommendedKw * 1.2
    });
  });

  // Gemini AI Technical Solar Consultation
  app.post("/api/ai-consultant", async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      const model = process.env.GEMINI_MODEL || "gemini-3.6-flash";
      const { prompt, propertyType, loadRequirements } = req.body || {};

      if (!apiKey || apiKey === 'PASTE_YOUR_GEMINI_API_KEY_HERE') {
        return res.status(503).json({
          error: 'Gemini API key is not configured.',
          details: 'Add your real GEMINI_API_KEY to .env.local and restart the server.'
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `You are the Lead Solar Systems Engineer at Sun Leaf Solar, an ISO 9001:2015 certified solar engineering provider. Provide precise, technical, encouraging, and actionable solar engineering analysis. Detail recommended panel technology (N-Type TOPCon), inverter sizing, mounting ballast structures, and grid safety protocols. Keep response well-structured with concise bullet points.`;

      const userPrompt = String(prompt || '').trim();
      if (!userPrompt) {
        return res.status(400).json({ error: 'Please enter an engineering question.' });
      }

      const response = await ai.models.generateContent({
        model,
        contents: userPrompt,
        config: {
          systemInstruction: `${systemInstruction}\n\nUser context: Property Type: ${propertyType || 'Industrial'}, Load: ${loadRequirements || 'Custom load consultation'}.\nAnswer the user's exact question. Do not reuse a generic answer when the question changes. If information is missing, state the assumption clearly.`,
        }
      });

      const replyText = response.text?.trim();
      if (!replyText) {
        return res.status(502).json({ error: 'Gemini returned an empty response.' });
      }

      res.json({ reply: replyText });

    } catch (error: any) {
      console.error("Gemini AI API Error:", error);
      res.status(500).json({
        error: "Failed to generate AI consultation",
        details: error?.message || String(error)
      });
    }
  });

  // Quote Submission / Consultation Request
  app.post("/api/submit-quote", (req, res) => {
    const quoteData = req.body;
    console.log("New Quote Request Received:", quoteData);
    res.json({
      success: true,
      referenceNumber: `SLS-${Math.floor(100000 + Math.random() * 900000)}`,
      message: "Engineering team will analyze your load profile and respond within 24 business hours.",
      timestamp: new Date().toISOString()
    });
  });

  // Vite middleware for dev or static files for prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Sun Leaf Solar Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
