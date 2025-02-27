import Layout from "@/components/Layout";

export default function Documentation() {
    return (
        <Layout>
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-4">Project Documentation</h1>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Overview</h2>
                    <p className="mb-2">
                        This project is an AI-powered conversation platform that lets users engage with AI characters via text. It’s built with Next.js, TypeScript, and Tailwind CSS and features a clean, mobile responsive, neuomorphic design.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Design Decisions</h2>
                    <p className="mb-2">
                        The front end is organized into modular pages and reusable components. The neuomorphic UI provides a tactile modern look, while Tailwind CSS helps streamline styling.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
                    <p className="mb-2">
                        Key challenges included integrating dynamic AI character selection, ensuring responsive design across devices, and preparing for bonus features like voice/video and conversation persistence.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Features</h2>
                    <ul className="list-disc ml-6">
                        <li>Text-Based Interaction & Character Selection</li>
                        <li>Dynamic Character Determination (Bonus)</li>
                        <li>Voice/Video Communication (Bonus)</li>
                        <li>Persistent Conversation History (Bonus)</li>
                    </ul>
                </section>

                <section className="mt-6">
                    <h2 className="text-2xl font-semibold mb-2">Deployment</h2>
                    <p className="mb-2">
                        The solution is deployed at:{" "}
                        <a
                            href="https://your-deployment-url.com"
                            className="text-blue-500 underline"
                        >
                            https://your-deployment-url.com
                        </a>
                    </p>
                </section>
            </div>
        </Layout>
    );
}
