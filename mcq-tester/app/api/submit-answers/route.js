import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.formData();
  console.log(data);

  // Process the submitted answers here
  // For example, save to database or validate answers

  return NextResponse.json({ success: true, received: data });
}
