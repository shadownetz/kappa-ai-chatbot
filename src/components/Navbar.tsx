import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-200 shadow-neu py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    AI Chat
                </Link>
                <div className="space-x-4">
                    <Link href="/characters" className="hover:text-blue-500">
                        Characters
                    </Link>
                    <Link href="/chat" className="hover:text-blue-500">
                        Chat
                    </Link>
                    <Link href="/documentation" className="hover:text-blue-500">
                        Documentation
                    </Link>
                </div>
            </div>
        </nav>
    );
}
