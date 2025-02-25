import { contentfulClient } from './contentfulClient';

export async function fetchContentfulData<T>(
  contentType: string,
  query: Record<string, any> = {},
) {
  const response = await contentfulClient.getEntries({
    content_type: contentType,
    ...query,
  });

  return response.items.map((item) => ({
    id: item.sys.id,
    ...item.fields,
  })) as Array<{ id: string } & T>;
}

export async function fetchContentfulEntry<T>(id: string) {
  const { sys, fields } = await contentfulClient.getEntry(id);
  return { id: sys.id, ...fields } as { id: string } & T;
}
