"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, cn } from "@nextui-org/react";

import { Lock, Eye, EyeOff, Mail } from "lucide-react";
import MyInput from "@/components/my-input";

export default function SignIn() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - Replace with actual authentication
    if (email && password) {
      router.push("/register1");
      console.log("success!");
    } else {
      console.log("failed!");
    }
  };
  return (
    <div className="h-auto w-1/3 flex items-center justify-center border-r-3 shadow-lg bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-3xl font-bold">Welcome Back!</h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to access your personalized talent portal
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <MyInput
                id="email"
                classNames={{
                  innerWrapper: cn("pl-8"),
                }}
                type="email"
                placeholder="Enter your email"
                variant="bordered"
                radius="none"
                value={email}
                startContent={
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                }
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <MyInput
                id="password"
                classNames={{
                  innerWrapper: cn("pl-8"),
                }}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                variant="bordered"
                radius="none"
                value={password}
                startContent={
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                }
                endContent={
                  <button
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                }
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="/forgot-password"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <Button
              className="w-full bg-black text-white hover:bg-gray-900"
              onClick={handleSubmit}
            >
              Log in
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-50 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <img
                src="https://www.google.com/favicon.ico"
                className="h-5 w-5 mr-2"
                alt="Google logo"
              />
              Google
            </button>
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <img
                src="https://www.linkedin.com/favicon.ico"
                className="h-5 w-5 mr-2"
                alt="LinkedIn logo"
              />
              LinkedIn
            </button>
          </div>

          <p className="mt-2 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
