"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div
      className="flex  w-full min-h-screen p-8 items-center justify-center justify-end bg-gradient-to-r from-blue-500 to-green-700  ">
      
        <button
          onClick={() => router.push("/login")}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          LogIn
        </button>

    </div>
  );
}
