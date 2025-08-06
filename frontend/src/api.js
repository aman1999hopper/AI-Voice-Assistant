import Vapi from "@vapi-ai/web";

export const vapi = new Vapi(import.meta.env.VAPI_API_KEY);
const assistantId = import.meta.env.VITE_ASSISTANT_API_KEY;

export const startAssistant = async () => {
    const assistants = await vapi.getAssistants();
  return await vapi.start(assistantId, assistants)
};

export const stopAssistant = async () => {
    return await vapi.stop(assistantId);
};
