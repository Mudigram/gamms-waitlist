import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("Missing Supabase environment variables");
}

const supabaseServer = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const { data, error } = await supabaseServer
      .from("waitlist")
      .insert([
        { email: email.toLowerCase(), source: source || "gamms-waitlist" },
      ])
      .select();

    if (error) {
      if (error.message.includes("duplicate key")) {
        return NextResponse.json(
          { error: "You're already on the list!" },
          { status: 400 }
        );
      }
      console.error("Supabase Error:", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    return NextResponse.json({ message: "Successfully added!", data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
