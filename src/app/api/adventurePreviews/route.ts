import { NextResponse } from 'next/server';
import response from './data.json';

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(response);
}
