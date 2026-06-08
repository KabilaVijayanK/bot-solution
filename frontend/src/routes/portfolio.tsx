import { createFileRoute, Outlet, useParams } from "@tanstack/react-router";
import { PageHero } from "../components/sections/PageHero";
import PortfolioGrid from "../components/sections/PortfolioGrid";
import { CTABanner } from "../components/sections/CTABanner";

export const Route = createFileRoute("/portfolio")({ component: PortfolioPage });

function PortfolioPage() {
  const { slug } = useParams({ strict: false });
  const showGrid = !slug;
  const showHero = !slug;

  return (
    <>
      {showHero && (
        <PageHero
          breadcrumb="Portfolio"
          title="Selected Projects & Client Work"
          subtitle="A curated selection of recent projects across industries — responsive, performant, and built for outcomes."
        />
      )}

      <main className="bg-white">
        {showGrid && <PortfolioGrid />}
        <div className="transition-all duration-300">
          <Outlet />
        </div>
      </main>

      <CTABanner />
    </>
  );
}
