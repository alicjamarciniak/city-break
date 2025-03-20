import { NextRequest, NextResponse } from 'next/server';
import { getLocale } from 'next-intl/server';
import { contentfulClient } from '@/utils/contentful/contentfulClient';

export async function GET(req: NextRequest): Promise<NextResponse<any>> {
  try {
    const { searchParams } = new URL(req.url);
    const contentType = searchParams.get('contentType');

    if (!contentType) {
      return NextResponse.json(
        { error: 'Missing contentType parameter' },
        { status: 400 },
      );
    }

    const locale = await getLocale(); // Get dynamic locale
    const response = await contentfulClient.getEntries({
      content_type: contentType!,
      ...(locale !== 'en' && { locale }),
    });

    const data = response.items.map((item) => ({
      id: item.sys.id,
      ...item.fields,
    }));

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      error: 'Failed to fetch entries',
      details: (error as Error).message,
    });
  }
}
