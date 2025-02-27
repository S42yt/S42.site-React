"use client";

export default function ShopPage() {
  return (
    <div className="min-h-screen p-5 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-blue-300/80">Shop Coming Soon</h1>
      <p className="text-gray-400 mb-4">
        We're working on setting up our shop. Check back soon for merchandise and digital products!
      </p>
      <div className="mt-8 p-4 bg-gray-800/50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Want to be notified?</h2>
        <p className="text-gray-400 mb-4">
          Join our mailing list to be the first to know when our shop launches.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}