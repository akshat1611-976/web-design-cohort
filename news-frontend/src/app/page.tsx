import Link from "next/link";
import RecentNewsSlider from "@/components/RecentNewsSlider";

type NewsItem = {
  id: string;
  title: string;
  summary: string;
  imageUrl?: string;
  source?: string;
  publishedAt?: string;
};

const mockTopNews: NewsItem[] = Array.from({ length: 4 }).map((_, idx) => ({
  id: `top-${idx + 1}`,
  title: `Top Headline ${idx + 1}: Major Event Shakes the World`,
  summary: `A brief summary of the major event number ${idx + 1} that has significant global implications. This is a concise overview to fit the newspaper grid.`,
  imageUrl: `https://picsum.photos/seed/top-${idx + 1}/400/260`,
  source: "Wire Service",
  publishedAt: new Date().toISOString(),
}));

const mockRecentPages: NewsItem[][] = Array.from({ length: 4 }).map((_, pageIdx) =>
  Array.from({ length: 5 }).map((__, idx) => ({
    id: `recent-${pageIdx + 1}-${idx + 1}`,
    title: `Recent Story ${pageIdx + 1}.${idx + 1}: Development in Ongoing Issue`,
    summary: `Key developments and concise takeaways for item ${pageIdx + 1}.${idx + 1}.`,
    imageUrl: `https://picsum.photos/seed/recent-${pageIdx + 1}-${idx + 1}/300/200`,
    source: "News Desk",
    publishedAt: new Date().toISOString(),
  }))
);

function TopNewsSection({ items }: { items: NewsItem[] }) {
  return (
    <section>
      <div className="flex items-baseline justify-between">
        <h2 className="newspaper-heading text-2xl font-black uppercase">Top News</h2>
        <Link href="/upload" className="text-xs underline">Submit tip</Link>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <article key={item.id} className="border border-newspaper bg-white/70 shadow-sm p-3 rounded-sm">
            {item.imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.imageUrl} alt="" className="w-full aspect-[4/3] object-cover mb-2" />
            )}
            <h3 className="newspaper-serif font-bold leading-snug">{item.title}</h3>
            <p className="newspaper-serif text-sm mt-1 text-neutral-700">{item.summary}</p>
            <div className="mt-2 text-[10px] text-neutral-500">{item.source} • {new Date(item.publishedAt ?? '').toLocaleDateString()}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-10">
      <TopNewsSection items={mockTopNews} />
      <RecentNewsSlider pages={mockRecentPages.slice(0, 4)} />
    </div>
  );
}
