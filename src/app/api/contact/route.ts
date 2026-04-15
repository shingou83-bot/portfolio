import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validators";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;

  if (process.env.NODE_ENV === "development") {
    console.info("[contact]", {
      name: data.name,
      organization: data.organization,
      email: data.email,
      messageLength: data.message.length,
    });
  }

  // 本番では Resend 等で data をメール送信する場合はここに実装
  // const apiKey = process.env.RESEND_API_KEY;

  return NextResponse.json({ ok: true }, { status: 200 });
}
