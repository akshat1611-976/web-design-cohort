export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="newspaper-heading text-2xl font-black uppercase">About Us</h2>
      <p className="newspaper-serif text-neutral-700 mt-2">
        We build tools that turn the news cycle into clear, concise summaries. Our mission is to help you stay informed without the overwhelm.
      </p>
      <div className="mt-6 space-y-4 newspaper-serif leading-relaxed">
        <p>
          This project uses machine learning to extract the key points from long-form articles, spotlight sources, and present diverse viewpoints. We believe in transparency: each summary links back to the original source.
        </p>
        <p>
          Have feedback or partnerships in mind? Reach out and help us improve.
        </p>
      </div>
    </div>
  );
}