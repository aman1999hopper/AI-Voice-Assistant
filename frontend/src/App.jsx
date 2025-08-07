import { useEffect } from "react";
import "./App.css";
import { startAssistant } from "./api";
import "tailwindcss";

function App() {
  useEffect(() => {
    startAssistant();
  });
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">AI Voice Assistant</h1>
          <p className="text-gray-700 text-center">
            Your personal AI assistant is ready to help you!
          </p>

          <div className="mt-4 flex space-x-4 justify-between">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Start Assistant
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Stop Assistant
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
