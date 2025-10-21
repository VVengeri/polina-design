
import { GoogleGenAI, Type } from "@google/genai";
import type { Analysis } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const analysisSchema = {
    type: Type.OBJECT,
    properties: {
        title: { type: Type.STRING, description: "The main title of the document." },
        companyName: { type: Type.STRING, description: "The name of the company or studio mentioned." },
        summary: { type: Type.STRING, description: "A concise summary of the document's purpose and content, in 2-3 sentences." },
        keySections: {
            type: Type.ARRAY,
            description: "An array of the main sections found in the document.",
            items: {
                type: Type.OBJECT,
                properties: {
                    title: { type: Type.STRING, description: "The title of the section." },
                    content: { type: Type.STRING, description: "A brief summary of the section's content." },
                },
                required: ["title", "content"],
            },
        },
        competitorAnalysis: {
            type: Type.ARRAY,
            description: "A list of competitors mentioned and their key characteristics.",
            items: {
                type: Type.OBJECT,
                properties: {
                    name: { type: Type.STRING, description: "Competitor's name." },
                    description: { type: Type.STRING, description: "Brief description of the competitor." },
                },
                required: ["name", "description"],
            },
        },
        uiUxCritique: {
            type: Type.OBJECT,
            description: "A UI/UX critique of the document itself.",
            properties: {
                positive: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Positive aspects of the document's layout and design." },
                suggestions: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Suggestions for improvement." },
            },
            required: ["positive", "suggestions"],
        },
        brandIdentity: {
            type: Type.OBJECT,
            description: "Analysis of the brand's identity from the document.",
            properties: {
                logoDescription: { type: Type.STRING, description: "A brief description of the company logo." },
                colorPalette: {
                    type: Type.ARRAY,
                    description: "Key colors used in the document, especially in branding elements.",
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            hex: { type: Type.STRING, description: "The hex code of the color." },
                            name: { type: Type.STRING, description: "A descriptive name for the color (e.g., 'Primary Purple', 'Background Gray')." },
                        },
                        required: ["hex", "name"],
                    },
                },
            },
            required: ["logoDescription", "colorPalette"],
        },
    },
    required: ["title", "companyName", "summary", "keySections", "competitorAnalysis", "uiUxCritique", "brandIdentity"],
};


export const analyzeHtmlContent = async (html: string): Promise<Analysis> => {
  const prompt = `
    Analyze the following HTML content, which represents a technical specification document for a design studio.
    Extract key information, analyze the brand identity, and provide a UI/UX critique of the document's presentation.
    Your response must be a valid JSON object matching the provided schema. Do not include any text before or after the JSON object.

    HTML Content:
    \`\`\`html
    ${html}
    \`\`\`
  `;

  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: analysisSchema,
        },
    });

    const jsonText = response.text.trim();
    const result: Analysis = JSON.parse(jsonText);
    return result;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error && error.message.includes('json')) {
        throw new Error("Failed to get a valid JSON response from the AI. The model may have returned an unexpected format.");
    }
    throw new Error("Failed to analyze HTML content.");
  }
};
