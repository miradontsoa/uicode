import { NextResponse } from "next/server";

export async function GET(request: Request) {
    // doc: https://beta.nextjs.org/docs/routing/route-handlers
    const svgCode = {
        title: "this is an svg code"
    }
    return NextResponse.json({ svgCode })
}