export function AwardsStrip() {
  const items = [
    "MSME Certified",
    "ISO 9001:2015",
    "Google Partner",
    "StartupIndia",
    "Nasscom Member",
    "DIPP Registered",
  ];
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Trusted, Recognised, and Certified
        </h3>
        <p className="text-gray-500 mb-10">
          Our work is recognised by industry bodies and technology leaders across India.
        </p>
        <div className="flex items-center justify-center gap-x-12 gap-y-4 flex-wrap">
          {items.map((i) => (
            <span
              key={i}
              className="text-gray-300 font-bold text-lg uppercase tracking-widest hover:text-gray-500 transition"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
