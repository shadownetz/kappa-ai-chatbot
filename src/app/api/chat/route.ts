import {NextResponse} from "next/server";
import {NextApiRequest} from "next";

export async function POST(req: NextApiRequest) {
    try{
        const { message } = req.body;
        // Simulate an AI response (replace with real AI integration)
        return NextResponse.json({ reply: `AI says: ${message}` });
    }catch(error){
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
