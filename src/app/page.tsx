import Link from 'next/link';
import Layout from "@/components/Layout";

export default function Home() {
  return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl font-bold mb-4">Welcome to AI Chat</h1>
          <p className="text-lg mb-8">
            Engage in meaningful conversations with our AI characters.
          </p>
          <Link href="/characters" className="bg-gray-200 px-6 py-3 rounded-lg shadow-neu text-gray-800 hover:bg-gray-300 transition">
              Start Conversation
          </Link>
        </div>
      </Layout>
  );
}
