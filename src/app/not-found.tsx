"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen p-5 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-400 mb-8">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-6">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/" 
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}