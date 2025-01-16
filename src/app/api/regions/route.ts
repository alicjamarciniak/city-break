import { NextResponse } from 'next/server';
import response from './data.json';
import { type RegionsResponse } from './types';

export async function GET(): Promise<NextResponse<RegionsResponse>> {
  return NextResponse.json(response);
}
