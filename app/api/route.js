import { connnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

export async function GET() {
  await connnectDB(); // Ensure the DB connection works
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos: todos });
}

export async function POST(request) {
  await connnectDB(); // Ensure the DB connection works
  const { title, description } = await request.json();
  await TodoModel.create({ title, description });
  return NextResponse.json({ msg: "Todo Created!" });
}

export async function DELETE(request) {
  const mongoId = await request.nextUrl.searchParams.get("mongoId");
  await TodoModel.findByIdAndDelete(mongoId);
  return NextResponse.json({ msg: "Todo Deletedd!" });
}

export async function PUT(request) {
  const mongoId = await request.nextUrl.searchParams.get("mongoId");
  await TodoModel.findByIdAndUpdate(mongoId, {
    $set: {
      isCompleted: true,
    },
  });
  return NextResponse.json({ msg: "Task Completed" });
}
