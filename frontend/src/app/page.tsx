// src/app/page.tsx
"use client"; // needed because we are using hooks in a Client Component

import React from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-gray-900">
      <h1 className="text-4xl font-bold mb-4 text-white">Welcome to My Website</h1>
      <p className="text-lg text-amber-50">This is the custom home page content.</p>
      <div className="flex gap-4 mt-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => router.push("/login")}
        >
          Go to Login
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => router.push("/signup")}
        >
          Go to Signup
        </button>
      </div>
    </main>
  );
}
