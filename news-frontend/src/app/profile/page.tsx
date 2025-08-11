export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="newspaper-heading text-2xl font-black uppercase">Profile</h2>
      <p className="newspaper-serif text-sm text-neutral-700 mt-1">Your uploads and saved summaries.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <section className="md:col-span-2 border border-newspaper bg-white/70 p-4 rounded-sm">
          <h3 className="font-semibold newspaper-serif">Saved Summaries</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-start justify-between gap-4 border-b border-neutral-200 pb-2">
              <div>
                <div className="font-semibold">Weekly Economic Roundup</div>
                <div className="text-neutral-600 text-xs">Added today</div>
              </div>
              <button className="text-xs underline">View</button>
            </li>
            <li className="flex items-start justify-between gap-4 border-b border-neutral-200 pb-2">
              <div>
                <div className="font-semibold">Tech Conference Highlights</div>
                <div className="text-neutral-600 text-xs">Added 2 days ago</div>
              </div>
              <button className="text-xs underline">View</button>
            </li>
          </ul>
        </section>
        <aside className="border border-newspaper bg-white/70 p-4 rounded-sm">
          <h3 className="font-semibold newspaper-serif">Account</h3>
          <dl className="mt-3 text-sm">
            <div className="flex justify-between border-b border-neutral-200 py-1">
              <dt>Email</dt>
              <dd>you@example.com</dd>
            </div>
            <div className="flex justify-between border-b border-neutral-200 py-1">
              <dt>Plan</dt>
              <dd>Free</dd>
            </div>
          </dl>
          <button className="mt-4 px-3 py-1.5 border border-newspaper bg-white/80 hover:bg-white rounded-sm text-sm">Log out</button>
        </aside>
      </div>
    </div>
  );
}