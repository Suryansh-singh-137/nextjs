import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prismaClient = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const user = await prismaClient.user.create({
      data: {
        username: data.username,
        password: data.password,
      },
    });

    return NextResponse.json({
      message: "You have been signed in",
      user,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
