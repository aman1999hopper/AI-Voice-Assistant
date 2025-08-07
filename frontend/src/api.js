import Vapi from "@vapi-ai/web";

export const vapi = new Vapi({
  apiKey: import.meta.env.VITE_VAPI_API_KEY, // ✅ key name corrected
});

const assistantId = import.meta.env.VITE_ASSISTANT_API_KEY;

export const startAssistant = async () => {
  await vapi.start(assistantId);
};

export const stopAssistant = async () => {
  await vapi.stop(); // No ID needed here
};
