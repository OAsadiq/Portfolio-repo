import { useEffect } from "react";
import { Link } from "react-router-dom";

const stats = [
  { value: "41", label: "signups" },
  { value: "20", label: "portfolios published" },
  { value: "46%", label: "of signups publish a page" },
  { value: "315", label: "unit tests on the core logic" },
];

const stack = ["React", "TypeScript", "TailwindCSS", "Supabase (Postgres + Auth)", "Stripe", "Vercel serverless", "Node test runner"];

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="py-10 border-t border-[#213555]">
    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-5">{title}</h2>
    <div className="space-y-4 text-[#F5EFE7]/90 leading-relaxed">{children}</div>
  </section>
);

const Figure = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <figure className="my-6">
    <img src={src} alt={alt} loading="lazy" className="w-full rounded-md border border-[#3E5879]" />
    <figcaption className="text-sm text-gray-400 mt-2">{caption}</figcaption>
  </figure>
);

const PorfilrCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prev = document.title;
    document.title = "Porfilr case study — Abubakarsadiq Olayinka";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <main className="pt-28 pb-20">
      <article className="max-w-3xl mx-auto px-6">
        <Link to="/#projects" className="text-sm text-[#D8C4B6] hover:underline">
          ← Back to all work
        </Link>

        <header className="mt-6 mb-8">
          <p className="text-sm uppercase tracking-widest text-[#D8C4B6] mb-3">Case study</p>
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            Porfilr: from portfolio builder to a trading journal people use daily
          </h1>
          <p className="mt-5 text-lg text-[#F5EFE7]/90">
            I founded, designed and built Porfilr end to end, a SaaS that turns people's work into a
            professional public page. Its first real traction came from an unexpected group: traders who
            needed a credible way to show their track record.
          </p>
          <dl className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <div><dt className="text-gray-400">Role</dt><dd className="text-white">Founder &amp; full-stack developer</dd></div>
            <div><dt className="text-gray-400">Timeline</dt><dd className="text-white">Nov 2025 – present</dd></div>
            <div><dt className="text-gray-400">Live</dt><dd><a href="https://porfilr.com/" target="_blank" rel="noopener noreferrer" className="text-[#D8C4B6] underline">porfilr.com</a></dd></div>
          </dl>
          <ul className="mt-5 flex flex-wrap gap-2">
            {stack.map((s) => (
              <li key={s} className="bg-[#213555] text-[#F5EFE7] text-xs px-2.5 py-1 rounded">{s}</li>
            ))}
          </ul>
        </header>

        <Figure src="/assets/projects/porfilr.jpg" alt="Porfilr home page" caption="The Porfilr home page: build a professional portfolio in minutes, no code." />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#213555] rounded-md p-4 text-center">
              <p className="text-3xl font-bold text-[#D8C4B6]">{s.value}</p>
              <p className="text-xs text-[#F5EFE7]/80 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <Section id="problem" title="The problem">
          <p>
            Writers, designers and marketers are told to "have a portfolio", but building one means either
            fighting a generic site builder or paying someone. Most never finish, and their best work stays
            buried in Google Drive links and DMs.
          </p>
          <p>
            Porfilr's promise was simple: pick a template, fill in your work, and publish a fast, professional
            page with your own link in about ten minutes, with no code and no design skills needed.
          </p>
        </Section>

        <Section id="build" title="What I built">
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Visual builder:</strong> a React + TypeScript editor with live preview, niche templates and draft/publish states, so people see their page take shape as they type.</li>
            <li><strong className="text-white">Public portfolio pages:</strong> rendered by Vercel serverless functions from Supabase data, so every page has a real URL, proper metadata and fast first paint.</li>
            <li><strong className="text-white">Custom domains:</strong> users connect their own domain, verified by DNS lookup before it goes live.</li>
            <li><strong className="text-white">Payments:</strong> Stripe checkout and webhooks for one-time purchases and Pro plans, plus a crypto checkout option for users who couldn't pay by card.</li>
            <li><strong className="text-white">Data &amp; security:</strong> Postgres on Supabase with row-level security policies, versioned through 22 SQL migrations.</li>
            <li><strong className="text-white">Growth tooling:</strong> view analytics, tracked referral links, transactional emails, and pre-rendered niche landing pages for SEO.</li>
          </ul>
        </Section>

        <Section id="pivot" title="Following the data: the pivot to a trading journal">
          <p>
            Traders need a credible track record to win investors, prop-firm funding or students, but
            screenshots are easy to fake and verification tools aren't a pitch. So I built a Trader Kit: a page with an equity curve, win rate,
            drawdown and a public P&amp;L calendar, backed by a trade journal.
          </p>
          <p>
            Then I looked hard at how people actually used it. Most kit owners had never logged a single
            trade, and the one active trader used the journal daily but kept his public page switched
            off. Free access already existed, so price wasn't the blocker. Time-to-value was.
          </p>
          <p>
            So I flipped the product: <strong className="text-white">the journal is the product, and the public page is
            what makes it yours.</strong> I made it free to start with no card required, and added broker CSV import
            (Bybit, MEXC, Binance, MT4/MT5) so a trader sees their own equity curve and calendar within minutes.
            A cap on stored trades only kicks in after they've seen their own data.
          </p>
          <Figure src="/assets/projects/porfilr-journal.jpg" alt="Porfilr trading journal landing page" caption="The journal-first landing page: log or import trades, see the patterns, share a page that updates itself." />
          <p>
            The result: traders now use Porfilr daily without being prompted, and one logged 25 trades in a single
            month. The shape generalizes, too: records you add over time become computed stats on your public
            page. Trades today; shoots booked, projects shipped or clients served next.
          </p>
        </Section>

        <Section id="engineering" title="Engineering decisions I'm proud of">
          <ul className="list-disc pl-5 space-y-3">
            <li>
              <strong className="text-white">Numbers people can trust.</strong> These stats end up in front of investors,
              so all metric, chart, calendar and import logic lives in pure functions covered by 315 unit tests.
            </li>
            <li>
              <strong className="text-white">Never silently drop a row.</strong> The CSV importer turns messy broker exports
              into validated trades. Every row either imports cleanly or is reported back with a human-readable reason.
            </li>
            <li>
              <strong className="text-white">One source of truth for sharing.</strong> The text a trader posts with their
              report card is generated from the same stats object the card renders, so a tweet can never disagree with
              its image.
            </li>
            <li>
              <strong className="text-white">Fixing SEO in a client-rendered app.</strong> Crawlers were seeing a generic
              shell for every niche landing page, so I added a build step that pre-renders them to static HTML with the
              right titles and content.
            </li>
          </ul>
        </Section>

        <Section id="learned" title="What I learned">
          <ul className="list-disc pl-5 space-y-2">
            <li>Usage data beats assumptions. The pivot came from counting what users did, not what they said.</li>
            <li>Time-to-value is a feature. Import-first onboarding did more than any price change could.</li>
            <li>Building the product is half the job. The current focus is distribution: content, partnerships and SEO.</li>
          </ul>
        </Section>

        <div className="mt-12 flex flex-wrap gap-4">
          <a href="https://porfilr.com/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#D8C4B6] px-6 py-3 text-sm font-semibold text-[#213555] hover:bg-[#F5EFE7] transition">
            Visit porfilr.com
          </a>
          <Link to="/#contact" className="rounded-full border border-[#D8C4B6] px-6 py-3 text-sm font-semibold text-[#D8C4B6] hover:bg-[#213555] transition">
            Work with me
          </Link>
        </div>
      </article>
    </main>
  );
};

export default PorfilrCaseStudy;
