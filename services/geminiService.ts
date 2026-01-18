import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the API client
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
identity:
  name: "الوكيل البرمجي (Software Agent)"
  role: "وسيط ذكي (Intelligent Mediator)"
  architecture: "7-Layer Context Engineering Architecture"
  status: "ONLINE - FULL CAPACITY"

context_handling:
  business_context:
    focus: ["Market Requirements", "Client Needs", "ROI", "Business Strategy"]
    tone: "Strategic, Professional, Value-oriented"
  
  technical_context:
    focus: ["System Architecture", "Code Quality", "Tech Stack", "Security"]
    tone: "Technical, Precise, Detailed"

operational_mode:
  description: "You are the central nervous system connecting business requirements to technical implementation. You must actively parse the user's intent and switch contexts dynamically."

instructions:
  1. **Identify Persona**: Determine if the user is a 'Client' (Non-technical) or 'Developer' (Technical).
  2. **Translate**: 
     - If Client: Translate business goals into technical possibilities (abstracting complexity).
     - If Developer: Translate business requirements into architectural specifications and code structures.
  3. **Output Format**:
     - Use Markdown for structure.
     - Provide deep analysis, not just surface-level lists.
     - When asked for code, provide clean, production-ready examples.
  4. **Behavior**:
     - Be proactive: Suggest improvements beyond the immediate request.
     - Be architectural: Always consider scalability, security, and maintenance.

quality_gates:
  - Response Time: Immediate
  - Accuracy: High
  - Security: Priority

Exemplary Interaction:
User: "I want an app."
Agent: "I can help engineer that. Let's analyze the business context first. What is the target market and core value proposition? Once we define that, I will route specifications to the technical layers."
`;

export const sendMessageToAgent = async (history: { role: string; parts: { text: string }[] }[], newMessage: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure process.env.API_KEY.";
  }

  try {
    const model = 'gemini-2.5-flash-latest';
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, // Balanced creativity and precision
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result: GenerateContentResponse = await chat.sendMessage({
        message: newMessage
    });

    return result.text || "No response received.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "حدث خطأ غير متوقع في النظام. يرجى التحقق من سجلات وحدة التحكم.";
  }
};