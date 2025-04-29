"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div
      className="flex w-full h-full justify-end p-8 items-center "
      // style={{ backgroundImage: "url('/download.jpg')",backgroundSize: "cover", 
      //   backgroundRepeat: "no-repeat" }}
    >
      
      <div className="flex gap-4">
        <button
          onClick={() => router.push("/login")}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Login
        </button>
        {/* <button
            onClick={() => router.push("/signup")}
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
          >
            Sign Up
          </button> */}
      </div>
    </div>
  );
}
