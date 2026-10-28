import { NextRequest, NextResponse } from "next/server";
import { feedbackFormSchema } from "@/lib/schemas";

export const runtime = "nodejs";


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parseResult = feedbackFormSchema.safeParse(body);
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

    // Log the received feedback
    console.log("[Qualyzen Feedback Received]:", {
      timestamp: new Date().toISOString(),
      rating: data.rating,
      category: data.category,
      comments: data.comments,
      name: data.name,
      email: data.email,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your valuable feedback! We appreciate you taking the time to share your thoughts.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Feedback API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while processing your feedback. Please try again later.",
      },
      { status: 500 }
    );
  }
}
