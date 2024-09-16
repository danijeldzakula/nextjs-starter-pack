import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json(
    { message: 'Hello World - API folder' },
    { status: 200 }
  );
}
