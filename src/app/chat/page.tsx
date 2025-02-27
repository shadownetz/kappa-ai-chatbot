import Layout from "@/components/Layout";
import ChatWindow from "@/components/ChatWindow";

export default function Chat() {
    return (
        <Layout>
            <div className="container mx-auto py-8">
                <ChatWindow />
            </div>
        </Layout>
    );
}
