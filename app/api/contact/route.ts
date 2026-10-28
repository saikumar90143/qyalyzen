import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";
import { sendContactEmail } from "@/lib/email";

export const runtime = "nodejs";


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parseResult = contactFormSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parseResult.data;

    await sendContactEmail(data);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for contacting Qualyzen. Your message has been received and our team will respond shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected error occurred while processing your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
