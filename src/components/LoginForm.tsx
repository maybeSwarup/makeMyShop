'use client'

import { useState } from "react";

// Mock API function to simulate backend authentication
async function mockLoginApi(email: string, password: string): Promise<{ success: boolean; message?: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "user@example.com" && password === "password123") {
        resolve({ success: true });
      } else {
        resolve({ success: false, message: "Invalid credentials" });
      }
    }, 800);
  });
}

// This is a client component because it uses useState for form state and error handling.
export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await mockLoginApi(email, password);
    setLoading(false);
    if (!result.success) {
      setError(result.message || "Login failed");
    } else {
      // In a real app, redirect or set auth state here
      alert("Login successful (mock)");
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit} aria-label="Login form">
      <label htmlFor="email" className="font-medium">
        Email
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="username"
          required
          className="mt-1 p-2 border rounded w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password" className="font-medium">
        Password
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="mt-1 p-2 border rounded w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <button
        type="submit"
        className="bg-foreground text-background py-2 px-4 rounded font-semibold hover:bg-opacity-90 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
} 