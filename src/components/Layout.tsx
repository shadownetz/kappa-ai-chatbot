import { ReactNode } from 'react';
import Navbar from "@/components/Navbar";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>{children}</main>
            <footer className="text-center py-4 text-gray-600">
                © {new Date().getFullYear()} AI Chat App. All rights reserved.
            </footer>
        </div>
    );
}
