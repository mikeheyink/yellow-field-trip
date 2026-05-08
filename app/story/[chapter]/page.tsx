import { notFound } from 'next/navigation';
import { chapters } from '@/content/chapters';
import { ChapterReader } from '@/components/ChapterReader';

type Params = { chapter: string };

export function generateStaticParams(): Params[] {
  return chapters.map((c) => ({ chapter: c.slug }));
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { chapter: slug } = await params;
  const idx = chapters.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();
  return <ChapterReader chapters={chapters} startIndex={idx} />;
}
