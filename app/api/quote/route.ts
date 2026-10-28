import { NextRequest, NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/schemas";

export const runtime = "nodejs";


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parseResult = quoteFormSchema.safeParse(body);
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

    // Log the received enquiry (in production, integrate with email delivery service / CRM)
    console.log("[Qualyzen Quote Request Received]:", {
      timestamp: new Date().toISOString(),
      fullName: data.fullName,
      company: data.company,
      email: data.email,
      phone: data.phone,
      service: data.service,
      equipmentSystem: data.equipmentSystem,
      preferredContact: data.preferredContact,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out. Your quotation enquiry has been received and our technical validation team will be in touch shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Quote API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
