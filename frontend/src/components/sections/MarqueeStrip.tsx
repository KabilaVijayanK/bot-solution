import { CLIENTS } from "../../data/site";

export function MarqueeStrip() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <section className="bg-white py-10 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center gap-8">
        <div className="text-gray-400 text-sm font-medium whitespace-nowrap shrink-0 hidden md:block">
          Trusted by leading organizations
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="marquee-track flex w-max">
            {items.map((c, i) => (
              <div key={i} className="text-gray-500 font-semibold text-base mx-8 whitespace-nowrap">
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
