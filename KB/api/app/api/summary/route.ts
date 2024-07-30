import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      date: new Date(),
      point: -213,
      username: "ambition-kwon",
      repository: "PreFlightCheck",
      status: "IN PROGRESS",
    },
    {
      id: 2,
      date: new Date(),
      point: -323,
      username: "ambition-kwon",
      repository: "AI-TUTOR",
      status: "Completed",
    },
    {
      id: 3,
      date: new Date(),
      point: -2312,
      username: "ambition-kwon",
      repository: "Design-Branch",
      status: "Completed",
    },
    {
      id: 4,
      date: new Date(),
      point: -4342,
      username: "ambition-kwon",
      repository: "Please-Helpme",
      status: "Completed",
    },
    {
      id: 5,
      date: new Date(),
      point: -665,
      username: "ambition-kwon",
      repository: "PointBlock",
      status: "Completed",
    },
    {
      id: 6,
      date: new Date(),
      point: -12,
      username: "ambition-kwon",
      repository: "ambition-kwon.github.io",
      status: "Completed",
    },
    {
      id: 7,
      date: new Date(),
      point: -578,
      username: "ambition-kwon",
      repository: "RealDesignBusy",
      status: "Completed",
    },
    {
      id: 8,
      date: new Date(),
      point: -323,
      username: "ambition-kwon",
      repository: "PreHotelCheck",
      status: "Completed",
    },
  ]);
}
