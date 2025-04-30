"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [validation, setValidation] = useState({
    email: false,
    username: false,
    password: false,
    confirmPassword: false,
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Update validation state
    if (name === "email") {
      setValidation(prev => ({ ...prev, email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) }));
    } else if (name === "username") {
      setValidation(prev => ({ ...prev, username: value.length >= 3 }));
    } else if (name === "password") {
      setValidation(prev => ({ ...prev, password: value.length >= 6 }));
    } else if (name === "confirmPassword") {
      setValidation(prev => ({ ...prev, confirmPassword: value === formData.password }));
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Password wrong. Check again");
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/login");
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Server error");
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-green-700">
      <div className="bg-green-200  p-6 rounded-lg w-100 space-y-8">
        <h2 className="text-xl font-semibold text-green-500">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-8 text-black">
          <div className="relative">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded pr-10"
              required
            />
            {formData.email && (
              <span className={`absolute right-3 top-9 ${validation.email ? 'text-green-500' : 'text-red-500'}`}>
                {validation.email ? '✓' : '✗'}
              </span>
            )}
          </div>
          
          <div className="relative">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded pr-10"
              required
            />
            {formData.username && (
              <span className={`absolute right-3 top-9 ${validation.username ? 'text-green-500' : 'text-red-500'}`}>
                {validation.username ? '✓' : '✗'}
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
              className=" w-full p-2 border rounded pr-10"
              required
            />
            {formData.password && (
              <span className={`absolute right-3 top-9 ${validation.password ? 'text-green-500' : 'text-red-500'}`}>
                {validation.password ? '✓' : '✗'}
              </span>
            )}
          </div>
          
          <div className="relative">
            <label>ConfirmPassword</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className=" w-full p-2 border rounded pr-10"
              required
            />
            {formData.confirmPassword && (
              <span className={`absolute right-3 top-9 ${validation.confirmPassword ? 'text-green-500' : 'text-red-500'}`}>
                {validation.confirmPassword ? '✓' : '✗'}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="text-blue-600 hover:underline"
            >
              Login
            </button>
          </p>
        </form>
      </div>
    </main>
  );
} 