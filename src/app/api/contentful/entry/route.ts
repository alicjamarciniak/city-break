// app/api/contentful/entry/route.ts
import { NextResponse, NextRequest } from 'next/server';
import { getLocale } from 'next-intl/server';
import { contentfulClient } from '@/utils/contentful/contentfulClient';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const entryId = searchParams.get('entryId');

    if (!entryId) {
      return NextResponse.json(
        { error: 'Missing entryId parameter' },
        { status: 400 },
      );
    }

    const locale = await getLocale();

    const { sys, fields } = await contentfulClient.getEntry(entryId, {
      ...(locale !== 'en' && { locale }),
    });

    const data = { id: sys.id, ...fields };

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch entry', details: (error as Error).message },
      { status: 500 },
    );
  }
}
