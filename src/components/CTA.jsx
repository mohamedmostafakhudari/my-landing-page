import React from "react";

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-neutral-100">
      <div className="container">
        <div className="flex | flex-wrap gap-4 items-center justify-between bg-primary-400 py-12 px-12 rounded-lg | sm:px-24">
          <div>
            <div className="font-bold text-2xl text-neutral-100">
              Call to action! it&apos;s time!
            </div>
            <p>
              Sign up for our product by clicking that button right over there!
            </p>
          </div>
          <div>
            <button className="button" data-type="cta">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
