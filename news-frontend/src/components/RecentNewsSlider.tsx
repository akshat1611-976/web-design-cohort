"use client";

import { useState } from "react";

export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  imageUrl?: string;
  source?: string;
  publishedAt?: string;
};

export default function RecentNewsSlider({ pages }: { pages: NewsItem[][] }) {
  const [page, setPage] = useState(0);
  const total = pages.length;

  return (
    <section className="mt-10">
      <div className="flex items-baseline justify-between">
        <h2 className="newspaper-heading text-2xl font-black uppercase">Recent News</h2>
        <div className="flex items-center gap-2 text-xs">
          <button
            className="px-2 py-1 border border-newspaper disabled:opacity-40"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Previous page"
          >Prev</button>
          <span className="tabular-nums">{page + 1} / {total}</span>
          <button
            className="px-2 py-1 border border-newspaper disabled:opacity-40"
            onClick={() => setPage((p) => Math.min(total - 1, p + 1))}
            disabled={page === total - 1}
            aria-label="Next page"
          >Next</button>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 transition-all">
        {pages[page].map((item) => (
          <article key={item.id} className="border border-newspaper bg-white/70 shadow-sm p-3 rounded-sm">
            {item.imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={item.imageUrl} alt="" className="w-full aspect-[3/2] object-cover mb-2" />
            )}
            <h3 className="newspaper-serif font-bold leading-snug text-sm">{item.title}</h3>
            <p className="newspaper-serif text-xs mt-1 text-neutral-700">{item.summary}</p>
            <div className="mt-2 text-[10px] text-neutral-500">{item.source} • {new Date(item.publishedAt ?? '').toLocaleDateString()}</div>
          </article>
        ))}
      </div>
    </section>
  );
}