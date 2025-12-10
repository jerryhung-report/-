import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult, ImageSize } from '../types';

// Use gemini-2.5-flash-lite for fast analysis as requested
const TEXT_MODEL = 'gemini-2.5-flash-lite-preview-02-05'; 
// Use gemini-3-pro-image-preview for high quality images as requested
const IMAGE_MODEL = 'gemini-3-pro-image-preview';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzePersonality = async (
  answers: { question: string; answer: string }[]
): Promise<AnalysisResult> => {
  
  const prompt = `
    You are an expert financial advisor using a "Money Tree / Cosmic Farmer" metaphor to analyze investment personalities.
    
    Here are the user's answers to the Money Tree Personality Test:
    ${JSON.stringify(answers, null, 2)}

    Based on these answers:
    1. Assign them a creative "Farmer Persona" title (e.g., "The Strategic Sower", "The Wild Harvester").
    2. Write a short, engaging description of their financial personality (max 100 words).
    3. Determine their investment style (Conservative, Moderate, Aggressive, Balanced).
    4. Recommend 3 specific types of investment funds (e.g., "Global Technology ETF", "High-Yield Bond Fund") with a short reason for each.
    5. Create a descriptive visual prompt for an image generator to create a 3D, high-quality "Money Tree" that represents their persona. The prompt should include details about lighting, atmosphere, and the appearance of the tree and coins.

    Return the result as JSON.
  `;

  try {
    const response = await ai.models.generateContent({
      model: TEXT_MODEL,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            personaTitle: { type: Type.STRING },
            personaDescription: { type: Type.STRING },
            investmentStyle: { type: Type.STRING },
            recommendedFunds: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  fundType: { type: Type.STRING },
                  reason: { type: Type.STRING },
                },
              },
            },
            visualPrompt: { type: Type.STRING },
          },
          required: ["personaTitle", "personaDescription", "investmentStyle", "recommendedFunds", "visualPrompt"],
        },
      },
    });

    if (!response.text) {
        throw new Error("No text returned from Gemini");
    }

    return JSON.parse(response.text) as AnalysisResult;

  } catch (error) {
    console.error("Error analyzing personality:", error);
    // Fallback in case of error
    return {
      personaTitle: "The Mysterious Planter",
      personaDescription: "We couldn't fully analyze your data, but you seem to be a thoughtful investor.",
      investmentStyle: "Balanced",
      recommendedFunds: [
        { fundType: "Broad Market Index Fund", reason: "A safe bet for diversified growth." }
      ],
      visualPrompt: "A mysterious glowing golden tree in a cosmic garden, cinematic lighting, 8k resolution"
    };
  }
};

export const generateTreeImage = async (prompt: string, size: ImageSize): Promise<string | null> => {
  try {
    const response = await ai.models.generateContent({
      model: IMAGE_MODEL,
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
          imageSize: size
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};