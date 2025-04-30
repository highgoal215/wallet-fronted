"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
    
    // Update validation state
    if (name === "email") {
      setValidation(prev => ({ ...prev, email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) }));
    } else if (name === "password") {
      setValidation(prev => ({ ...prev, password: value.length >= 6 }));
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else {
        router.push("/wallet");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login");
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-green-700">
      <div className="bg-green-200 p-6 rounded-lg w-100 h-100 space-y-8">
        <h2 className="text-xl font-semibold text-green-600">Login</h2>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <form onSubmit={handleLogin} className="space-y-8 text-black">
          <div className="relative">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-green-200 w-full p-2 border rounded pr-10"
              required
            />
            {formData.email && (
              <span className={`absolute right-3 top-9 ${validation.email ? 'text-green-500' : 'text-red-500'}`}>
                {validation.email ? '✓' : '✗'}
              </span>
            )}
          </div>
          
          <div className="relative">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="bg-green-200 w-full p-2 border rounded pr-10"
              required
            />
            {formData.password && (
              <span className={`absolute right-3 top-9 ${validation.password ? 'text-green-500' : 'text-red-500'}`}>
                {validation.password ? '✓' : '✗'}
              </span>
            )}
          </div>
          
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
