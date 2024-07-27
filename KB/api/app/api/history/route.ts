import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json(
    [
      {
        id: 1,
        title: "Spent Points",
        summary: "Supporting by Repository",
        logo: "/Vector.png",
        point: 11301,
        updated: "last month",
        percent: 2.5,
      },
      {
        id: 2,
        title: "Earned Points",
        summary: "Gained By Paypal",
        logo: "/174861_1.png",
        point: 24034,
        updated: "last month",
        percent: "0.0",
      },
      {
        id: 3,
        title: "Earned Points",
        summary: "Gained By Ads",
        logo: "/Vector_(1).png",
        point: 102,
        updated: "last month",
        percent: -1.7,
      },
      {
        id: 4,
        title: "Earned Points",
        summary: "Gained By Sponsor",
        logo: "/Vector_(2).png",
        point: 1203,
        updated: "last month",
        percent: 10.5,
      },
    ],
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}
