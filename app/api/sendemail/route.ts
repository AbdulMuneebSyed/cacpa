import { ChartColumnStacked } from "lucide-react";
export const runtime = "edge";

// app/api/send-email/route.js
interface EmailRequestBody {
    message: string;
}

interface ResendResponse {
    id?: string;
    object?: string;
    to?: string[];
    from?: string;
    subject?: string;
    text?: string;
    html?: string;
    created_at?: string;
    error?: string;
    [key: string]: any;
}

export async function POST(req: Request): Promise<Response> {
    const body: EmailRequestBody = await req.json();

    const resendRes: Response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "noreply@capco-cs.com",
        to: "capcocsqa@gmail.com",
        subject: "New Form Submission",
        text: body.message,
      }),
    });

    const data: ResendResponse = await resendRes.json();
    console.log("Response from Resend:", data);
    if (!resendRes.ok) {
        return new Response(JSON.stringify(data), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
}
