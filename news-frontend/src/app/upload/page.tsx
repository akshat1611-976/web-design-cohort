export default function UploadPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="newspaper-heading text-2xl font-black uppercase">Upload</h2>
      <p className="newspaper-serif text-sm text-neutral-700 mt-1">Submit a link or file to summarise.</p>

      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-semibold">Article URL</label>
          <input
            type="url"
            placeholder="https://example.com/story"
            className="mt-1 w-full border border-newspaper bg-white/70 p-2 rounded-sm outline-none focus:ring-2 focus:ring-neutral-400"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold">Or upload a file (PDF, TXT)</label>
          <input type="file" className="mt-1 w-full text-sm" />
        </div>
        <div>
          <label className="block text-sm font-semibold">Notes (optional)</label>
          <textarea className="mt-1 w-full border border-newspaper bg-white/70 p-2 rounded-sm h-28 outline-none focus:ring-2 focus:ring-neutral-400" />
        </div>
        <button type="submit" className="px-4 py-2 border border-newspaper bg-white/80 hover:bg-white rounded-sm">Submit</button>
      </form>
    </div>
  );
}