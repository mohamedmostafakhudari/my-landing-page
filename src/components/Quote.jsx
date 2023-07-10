export default function Quote() {
  return (
    <section id="quote" className="quote | py-24 bg-neutral-200">
      <div className="container" style={{ "--max-width": 48 + "rem" }}>
        <blockquote>
          This is an inspiring quote, or a testimonial from a customer. Maybe
          it&apos;s just filling up space, or maybe people will actually read
          it. Who knows? All i know is that it looks nice.
        </blockquote>
        <div className="text-right">
          <span className="not-italic text-xl font-bold md:text-2xl">
            -Thor, God of Thunder
          </span>
        </div>
      </div>
    </section>
  );
}
