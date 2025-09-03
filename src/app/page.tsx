import Hero from "@/components/Hero";
import { Features } from "@/components/sections/Features";
import { KeyFeatures } from "@/components/sections/KeyFeatures";
import { Contact } from "@/components/sections/Contact";
import { TargetAudiencePositioning } from "@/components/sections/TargetAudiencePositioning";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
      <section aria-labelledby="overview" className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="overview" className="sr-only">Overview</h2>
          <div className="glass rounded-2xl p-5">
            <p className="text-sm text-muted">
              Product: B2Breeze — “Business, as smooth as a breeze.” Purpose: Create a marketing website that communicates value, showcases features, drives conversions (trial/demo signups), and links to the existing web app.
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-3 text-sm">
              <li>• Educate prospects on core capabilities.</li>
              <li>• Capture leads and encourage trial/demo.</li>
              <li>• Provide shareable content and SEO pages.</li>
            </ul>
          </div>
        </div>
      </section>
      <TargetAudiencePositioning />
      {/* Placeholder anchor for demo modal/section */}
      <section id="demo" className="sr-only" aria-hidden>
        Demo placeholder
      </section>
      <KeyFeatures />
      <Features />
      <Contact />
    </>
  );
}
