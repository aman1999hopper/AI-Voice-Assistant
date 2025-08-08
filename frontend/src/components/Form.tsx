'use client';

import InputField from "./InputField";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "@/lib/axios"; // ✅ import your axios instance

type FormProps = {
  type: "login" | "signup";
};

export default function Form({ type }: FormProps) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (type === "signup") {
        // ✅ Use Django endpoint
        const res = await axios.post("/users/register/", {
          username,
          password,
        });

        console.log(res.data); // Optional: Inspect response
        alert("Signup successful");
        router.push("/login");
      } else {
        // ✅ Use Next.js internal login route (as you already have)
        const res = await fetch("/api/login", {
          method: "POST",
          body: JSON.stringify({ email: username, password }),
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        if (data.success) {
          alert("Login successful");
          router.push("/");
        } else {
          alert(data.message);
        }
      }
    } catch (error: unknown) {
      console.error("Error:", error);
      alert("An error occurred. See console for details.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
      <h2 className="text-2xl font-bold mb-4 capitalize text-gray-800 text-center">{type}</h2>

      <InputField
        label="Email"
        type="email"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />

      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {type === "signup" ? "Sign Up" : "Login"}
      </button>
    </form>
  );
}
