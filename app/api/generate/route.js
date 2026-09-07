import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const SYSTEM_PROMPT = `
You are SnapSell™, the AI Sales Command Center created by Geestablish.

Your framework is:

SNAP → ANALYZE → POSITION → CREATE → CONVERSE → CLOSE → IMPROVE.

Your job is to turn honest product information into practical sales execution.

IMPORTANT RULES:
- Never invent testimonials.
- Never invent statistics.
- Never invent certifications.
- Never invent product features.
- Never invent guarantees.
- Never invent discounts or scarcity.
- Never make fake income claims.
- Never promise guaranteed sales or results.
- If important information is missing, clearly say so.
- Use ethical persuasion.
- Avoid spam and manipulative pressure.
- Make recommendations specific to the product.
- Make WhatsApp messages sound natural and human.
- Prioritize clarity, relevance and customer fit.

SnapSell™ is a proprietary sales system by Geestablish.
`;

function buildPrompt(data) {
  return `
SNAPSELL™ REQUEST

MODE:
${data.mode || "Full Campaign"}

PRODUCT:
${data.product}

TARGET CUSTOMER:
${data.audience || "Not provided"}

PRICE:
${data.price || "Not provided"}

PRIMARY GOAL:
${data.goal || "Not provided"}

Build the strongest useful output for this request.

If the mode is "Full Campaign", include:

1. PRODUCT SNAPSHOT
2. IDEAL CUSTOMER
3. CUSTOMER PAIN
4. CUSTOMER DESIRE
5. UNIQUE POSITIONING
6. OFFER STRUCTURE
7. 10 SALES ANGLES
8. 10 SALES HOOKS
9. 5 SOCIAL POSTS
10. 7 WHATSAPP STATUS IDEAS
11. WHATSAPP SALES CONVERSATION
12. 10 OBJECTION RESPONSES
13. 5 FOLLOW-UP MESSAGES
14. 5 CALLS TO ACTION
15. 7-DAY SALES ACTION PLAN
16. KEY METRICS TO TRACK
17. MISSING INFORMATION / RISKS

If the mode is "Product Analyzer", provide a deep analysis of:
- Product
- Customer
- Problem
- Desire
- Benefits
- Differentiation
- Objections
- Positioning opportunities
- Offer opportunities
- Missing information

If the mode is "WhatsApp Closer", create:
- Opening message
- Qualification questions
- Natural conversation flow
- Product presentation
- Objection handling
- Closing messages
- Follow-up sequence

If the mode is "Content Machine", create:
- 20 hooks
- 10 social posts
- 10 CTAs
- 7 WhatsApp status ideas
- 30-day content calendar

Finish with:

GEESTABLISH QUALITY CHECK

Give 5 checks the seller should complete before publishing or selling.
`;
}

export async function POST(request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          error: "OPENAI_API_KEY is missing from the server environment."
        },
        { status: 500 }
      );
    }

    const data = await request.json();

    if (
      !data.product ||
      typeof data.product !== "string" ||
      data.product.trim().length < 5
    ) {
      return NextResponse.json(
        {
          error: "Please provide more information about the product."
        },
        { status: 400 }
      );
    }

    const response = await openai.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5",
      instructions: SYSTEM_PROMPT,
      input: buildPrompt(data)
    });

    return NextResponse.json({
      output: response.output_text
    });

  } catch (error) {
    console.error("SnapSell API error:", error);

    return NextResponse.json(
      {
        error:
          "SnapSell could not generate the campaign. Check the server configuration and API settings."
      },
      { status: 500 }
    );
  }
}
