"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/dashboard");
      } else {
        if (data.message === "Password incorrect") {
          alert("Incorrect password");
        } else if (data.message === "Invalid user, please Sign Up") {
          alert("Invalid user. Please sign up.");
        } else {
          alert(data.message || "Login failed");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server error");
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 rounded-lg w-80 space-y-4">
        <h2 className="text-xl font-semibold text-green-600">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4 text-black">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
          <p className="text-center">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/signup")}
              className="text-blue-600 hover:underline"
            >
              Sign up
            </button>
          </p>
        </form>
      </div>
    </main>
  );
}
