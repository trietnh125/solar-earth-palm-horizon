import { useState, type FormEvent } from "react";
import { CityScene } from "@/components/city-scene";

const NAV = [
  { href: "#founders", label: "01 Founders" },
  { href: "#infrastructure", label: "02 Energy" },
  { href: "#systems", label: "03 Systems" },
  { href: "#housing", label: "04 Housing" },
  { href: "#balance", label: "05 Balance" },
  { href: "#invest", label: "06 Invest" },
];

export function VinCavePage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-deep/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <a href="#top" className="font-display text-2xl tracking-wide text-cream">
            VINCAVE
          </a>
          <nav className="hidden items-center gap-4 text-xs uppercase tracking-wider text-cream/75 lg:flex">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gold-soft">
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="shrink-0 rounded-full bg-gold px-4 py-2 text-sm font-medium text-deep">
            Contact us
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-[100svh] bg-deep text-cream">
          <img
            src="/images/hero.jpg"
            alt="VinCave industrial city cut into a cliff"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-deep/20" />
          <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28">
            <p className="text-xs uppercase tracking-[0.28em] text-gold-soft">22-10-2026</p>
            <h1 className="mt-3 font-display text-7xl leading-none sm:text-9xl">VINCAVE</h1>
            <p className="mt-6 max-w-xl font-display text-3xl leading-snug">Beyond boundaries. Building tomorrow.</p>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-cream/70">
              One team. One vision. A new world.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#city" className="rounded-full bg-gold px-5 py-3 text-sm font-medium text-deep">
                Explore the city
              </a>
              <a href="#contact" className="rounded-full border border-cream/30 px-5 py-3 text-sm">
                Contact us for more
              </a>
            </div>
          </div>
        </section>

        <section className="bg-ink text-cream">
          <div className="mx-auto grid max-w-6xl items-end gap-8 px-5 py-20 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-gold">The Lobby</p>
              <h2 className="mt-3 font-display text-6xl">The Lobby</h2>
            </div>
            <div className="space-y-4 text-lg font-light leading-relaxed text-cream/85">
              <p>Imagine discovering an entire city hidden beneath the Earth.</p>
              <p>
                Welcome to VinCave, where nature meets innovation and extraordinary adventures await. Are you
                ready to explore a world beyond imagination?
              </p>
              <p className="text-sm text-cream/70">
                Email: VinCaveTheBest@gmail.com
                <br />
                Website: www.vincavethanks.vn
                <br />
                Visitor Information: The VinCenter
              </p>
            </div>
          </div>
          <img src="/images/lobby.jpg" alt="Overhead view of The Lobby plaza" className="h-[28rem] w-full object-cover" />
        </section>

        <section id="founders" className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">01 · Letter from the Founders</p>
          <h2 className="mt-3 font-display text-5xl leading-tight md:text-6xl">The vision and the crisis</h2>
          <div className="mt-8 grid gap-6 text-lg font-light leading-relaxed md:grid-cols-2">
            <p>
              To create a comfortable and thriving city under our feet. Through advanced technologies, innovative
              infrastructure, and sustainable systems, we aim to ensure VinCave's long-term prosperity,
              environmental responsibility, and resilience for generations to come.
            </p>
            <p>
              With climate change, rising sea levels, and overcrowding becoming major challenges, we believe
              it's time to explore new places to live. VinCave aims to create a safe underground city using
              modern technology and sustainable systems, giving people a better place to live today and in the
              future.
            </p>
          </div>
          <p className="mt-10 font-display text-3xl">Beyond boundaries. Building tomorrow.</p>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted">One team — one vision — a new world.</p>
        </section>

        <section id="city" className="bg-deep px-5 py-20 text-cream">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs uppercase tracking-[0.22em] text-gold">3D city file</p>
            <h2 className="mt-3 font-display text-5xl">Walk the model.</h2>
            <p className="mt-3 max-w-2xl text-cream/75">
              A cavern district built from the proposal: cliff shell, civic ring, towers, and the yellow plant on
              the upper ledge. Orbit it here, or take the GLB.
            </p>
            <div className="mt-8">
              <CityScene />
            </div>
          </div>
        </section>

        <section id="infrastructure" className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">02 · Infrastructure and Energy</p>
          <h2 className="mt-3 font-display text-6xl">Energy</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <img src="/images/solar.jpg" alt="Solar power plant" className="h-full min-h-72 w-full rounded-2xl object-cover" />
            <article className="rounded-2xl bg-cream p-8">
              <h3 className="font-display text-3xl text-gold">Solar Power Plant System</h3>
              <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed">
                <li>To convert sunlight into clean, renewable electricity and feed it directly into the regional power grid.</li>
                <li>
                  Equipped with high-efficiency photovoltaic panels, solar tracking mounts, central inverters, and
                  utility-scale battery storage (BESS).
                </li>
              </ul>
            </article>
          </div>

          <h2 className="mt-20 font-display text-6xl">Infrastructure</h2>
          <p className="mt-4 max-w-xl text-sm uppercase tracking-[0.14em] text-muted">
            Built on strong infrastructure, VinCave ensures reliable and efficient living for every resident.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl bg-navy p-8 text-cream">
              <h3 className="font-display text-3xl text-gold-soft">Municipal Underground Drainage & Water Supply System</h3>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-cream/85">
                <li>To manage urban flood control by draining wastewater/stormwater while reliably delivering clean drinking water to city households.</li>
                <li>Features subterranean smart-monitored pipelines, separate blackwater drainage channels, and anti-leak hydraulic control valves.</li>
              </ul>
            </article>
            <article className="overflow-hidden rounded-2xl bg-ink text-cream">
              <img src="/images/water.jpg" alt="Underground water works" className="h-52 w-full object-cover" />
              <div className="p-8">
                <h3 className="font-display text-3xl text-gold-soft">Urban Electrical Grid & Power Distribution System</h3>
                <p className="mt-4 text-cream/80">
                  The same subterranean standard: smart-monitored lines, separated service channels, and anti-leak
                  control so power reaches every household without interrupting the city above the rock.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="systems" className="bg-ink py-24 text-cream">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs uppercase tracking-[0.22em] text-gold">03 · Smart System</p>
            <h2 className="mt-3 font-display text-6xl">Smart System</h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              <article className="rounded-2xl bg-navy p-6">
                <img src="/images/atrium.jpg" alt="Artificial sun atrium" className="mb-5 h-44 w-full rounded-xl object-cover" />
                <h3 className="font-display text-2xl">Urban Air Purification System</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-cream/80">
                  <li>To filter fine dust, harmful gases, and supply clean, oxygen-rich air to dense urban areas.</li>
                  <li>Uses multi-stage HEPA/bio-tech filters, smart IoT sensors, and doubles as smart street infrastructure.</li>
                </ul>
              </article>
              <article className="rounded-2xl bg-navy p-6">
                <img src="/images/water.jpg" alt="Clean water filtration" className="mb-5 h-44 w-full rounded-xl object-cover" />
                <h3 className="font-display text-2xl">Urban Clean Water Supply & Filtration System</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-cream/80">
                  <li>To treat raw water sources, remove contaminants, and supply safe drinking water to city residents.</li>
                  <li>Uses multi-stage membrane filtration (UF/RO), real-time IoT quality monitoring, and automated smart distribution networks.</li>
                </ul>
              </article>
              <article className="rounded-2xl bg-navy p-6">
                <img src="/images/atrium.jpg" alt="Full-spectrum lighting" className="mb-5 h-44 w-full rounded-xl object-cover" />
                <h3 className="font-display text-2xl">Artificial Sun & Lighting Distribution System</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-cream/80">
                  <li>To provide bright, full-spectrum light that closely mimics natural sunlight in areas with limited sunlight or during nighttime.</li>
                  <li>Uses energy-efficient plasma or LED lights, automatic reflectors to track the Sun, and smart optical systems to spread light across large areas.</li>
                </ul>
              </article>
            </div>
            <p className="mt-8 max-w-3xl text-cream/75">
              Every system is carefully designed to ensure safety, reliability, and a smooth, sustainable life beneath the surface.
            </p>

            <h2 className="mt-20 font-display text-6xl">Emergency Hubs</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <img src="/images/hubs.jpg" alt="Emergency hospital, station, and water reserve" className="h-full min-h-72 w-full rounded-2xl object-cover" />
              <div className="space-y-6">
                <article>
                  <h3 className="font-display text-2xl text-gold-soft">Modern General Hospital System</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-cream/80">
                    <li>To maintain public order, ensure community safety, enforce laws, and respond to local criminal incidents or emergencies.</li>
                    <li>Features secure holding areas, dispatch communication centers, public reporting reception desks, and round-the-clock patrol fleet parking.</li>
                  </ul>
                </article>
                <article>
                  <h3 className="font-display text-2xl text-gold-soft">Emergency Water Reserve & Storage Facility</h3>
                  <p className="mt-2 text-sm text-cream/80">Reserve volume held inside the rock for the city when surface supply is interrupted.</p>
                </article>
              </div>
            </div>

            <h2 className="mt-20 font-display text-6xl">Farming</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl bg-navy p-6">
                <h3 className="font-display text-2xl text-gold-soft">Automated Crop & Livestock Farming Zone</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-cream/80">
                  <li>Sustainably cultivate food crops with automated irrigation systems.</li>
                  <li>Controlled-environment livestock barns ensuring strict biosecurity.</li>
                  <li>Feed storage silos and modern animal waste management systems.</li>
                </ul>
              </article>
              <article className="rounded-2xl bg-navy p-6">
                <h3 className="font-display text-2xl text-gold-soft">Supply Chain Mission</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-cream/80">
                  <li>Sustainably produce clean food to fully meet the needs of the underground urban supply chain.</li>
                  <li>Ensure a fresh, closed-loop, and eco-friendly food supply for the cave environment every day.</li>
                </ul>
              </article>
            </div>
            <img src="/images/farm.jpg" alt="Automated crop zone" className="mt-6 h-80 w-full rounded-2xl object-cover" />
          </div>
        </section>

        <section id="housing" className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">04 · Housing and Special Locations</p>
          <h2 className="mt-3 font-display text-6xl">Housing</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Luxury High-Rise Commercial & Residential Tower", "/images/tower.jpg"],
              ["Modern High-Rise Apartment Complex", "/images/transit.jpg"],
              ["Affordable Student Dormitory & Rental Complex", "/images/lobby.jpg"],
            ].map(([name, src]) => (
              <article key={name} className="overflow-hidden rounded-2xl bg-cream">
                <img src={src} alt={name} className="h-56 w-full object-cover" />
                <h3 className="p-5 font-display text-2xl">{name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="balance" className="bg-cream py-24">
          <div className="mx-auto max-w-6xl px-5">
            <p className="text-xs uppercase tracking-[0.22em] text-gold">05 · Advantages & Disadvantages</p>
            <h2 className="mt-3 font-display text-6xl">Advantages</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl bg-ink p-8 text-cream">
                <h3 className="font-display text-3xl text-gold-soft">Strong disaster protection</h3>
                <p className="mt-4 leading-relaxed text-cream/80">
                  Underground cities are protected from many surface hazards, such as severe storms, tsunamis,
                  heatwaves, and radiation. The surrounding rock also helps maintain stable temperatures throughout
                  the year.
                </p>
              </article>
              <article className="rounded-2xl bg-white p-8">
                <h3 className="font-display text-3xl">Surface ecosystem restoration</h3>
                <ul className="mt-4 list-disc pl-5 leading-relaxed">
                  <li>Frees up land for forests, farming, and wildlife habitats, reducing urban sprawl and the need for more concrete buildings.</li>
                </ul>
              </article>
            </div>

            <h2 className="mt-16 font-display text-6xl">Disadvantages</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-line bg-paper p-8">
                <h3 className="font-display text-3xl">Psychological and physical strain</h3>
                <ul className="mt-4 list-disc pl-5 leading-relaxed">
                  <li>
                    Long periods without natural sunlight can cause seasonal depression (SAD), disrupt sleep patterns,
                    and increase feelings of being trapped, making mental health support essential.
                  </li>
                </ul>
              </article>
              <article className="rounded-2xl border border-line bg-paper p-8">
                <h3 className="font-display text-3xl">High costs</h3>
                <p className="mt-4 leading-relaxed">
                  High initial costs for digging deep underground, along with ongoing expenses for running
                  life-support and ventilation systems 24/7.
                </p>
              </article>
            </div>
            <p className="mt-6 rounded-2xl bg-ink px-6 py-4 font-mono text-xs uppercase tracking-wider text-gold-soft">
              System status: operational. Caution: OPEX energy consumption: 650MW. Required maintenance: weekly.
              Lifetime CAPEX: $4.5 trillion.
            </p>
          </div>
        </section>

        <section id="invest" className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">06 · Investing in Tomorrow</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">Why invest in VinCave?</h2>
          <ul className="mt-6 max-w-3xl list-disc space-y-2 pl-5 text-lg">
            <li>
              <strong>Advanced Technology:</strong> Smart infrastructure and innovative systems.
            </li>
            <li>
              <strong>Sustainability:</strong> Efficient resource use and long-term urban resilience.
            </li>
            <li>
              <strong>Future Potential:</strong> A new vision for future housing and urban development.
            </li>
          </ul>
          <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed">
            VinCave is more than just an underground city. It's our idea of what future living could look like.
            With modern technology and reliable infrastructure, we hope to create a city where people can live safely
            and comfortably for years to come.
          </p>
          <p className="mt-4 font-display text-3xl">Be part of what's next.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Studio Apartment", "35–50 m² · Ideal for individuals", "50,000–80,000 $"],
              ["Family Residence", "80–120 m² · Designed for families", "120,000–200,000 $"],
              ["Luxury Underground Villa", "150–250 m² · Premium living", "300,000–500,000 $"],
            ].map(([name, meta, price]) => (
              <article key={name} className="rounded-2xl border border-line bg-cream p-6">
                <h3 className="font-display text-3xl">{name}</h3>
                <p className="mt-2 text-sm text-muted">{meta}</p>
                <p className="mt-8 text-lg">{price}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-ink py-24 text-cream">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
            <div>
              <h2 className="font-display text-6xl">The VinCave</h2>
              <p className="mt-4 font-display text-3xl text-gold">Contact us for more!</p>
              <p className="mt-6 leading-relaxed text-cream/80">
                Email: VinCaveTheBest@gmail.com
                <br />
                Website: www.VinCaveBest4Best.com
                <br />
                Visitor Information: The VinCenter
              </p>
            </div>
            {sent ? (
              <div className="rounded-2xl bg-navy p-8">
                <h3 className="font-display text-4xl">Received.</h3>
                <p className="mt-3 text-cream/75">Write VinCaveTheBest@gmail.com — this preview does not store the form.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4">
                <label className="grid gap-1 text-sm">
                  Name
                  <input required name="name" className="rounded-xl bg-paper px-4 py-3 text-ink" />
                </label>
                <label className="grid gap-1 text-sm">
                  Email
                  <input required type="email" name="email" className="rounded-xl bg-paper px-4 py-3 text-ink" />
                </label>
                <label className="grid gap-1 text-sm">
                  Note
                  <textarea name="note" rows={4} className="rounded-xl bg-paper px-4 py-3 text-ink" />
                </label>
                <button type="submit" className="rounded-full bg-gold px-5 py-3 font-medium text-deep">
                  Contact us for more
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-deep px-5 py-8 text-sm text-cream/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 md:flex-row md:justify-between">
          <p className="font-display text-2xl text-cream">VINCAVE</p>
          <p>22-10-2026 · One team. One vision. A new world.</p>
        </div>
      </footer>
    </div>
  );
}
