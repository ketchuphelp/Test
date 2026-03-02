const cityMetrics = [
  { label: "Population", value: "1,249,400", trend: "+2.4%" },
  { label: "Energy", value: "92%", trend: "Stable" },
  { label: "Budget", value: "$4.8B", trend: "+$120M" },
];

const zones = [
  { name: "Harbor District", status: "Operational", load: 76 },
  { name: "Central Arcology", status: "High Demand", load: 92 },
  { name: "Industrial Rim", status: "Balanced", load: 64 },
];

const Index = () => {
  return (
    <main className="city-scene min-h-screen px-6 py-10 md:px-12">
      <div className="scene-glow" aria-hidden="true" />
      <section className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.5fr_1fr]">
        <article className="holo-panel p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Nation Game Command</p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">Neo City: 3D Operations Deck</h1>
          <p className="mt-4 max-w-2xl text-base text-foreground/80 md:text-lg">
            A realistic command interface with layered depth, atmospheric lighting, and live district telemetry.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {cityMetrics.map((metric) => (
              <div key={metric.label} className="data-card">
                <span className="text-xs uppercase tracking-[0.25em] text-foreground/60">{metric.label}</span>
                <p className="mt-2 text-3xl font-semibold text-white game-stat">{metric.value}</p>
                <p className="mt-1 text-sm text-primary">{metric.trend}</p>
              </div>
            ))}
          </div>

          <div className="terrain-panel mt-8">
            <div className="terrain-grid" aria-hidden="true" />
            <div className="terrain-overlay" aria-hidden="true" />
            <div className="terrain-nodes" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <p className="relative z-10 text-left text-sm uppercase tracking-[0.3em] text-foreground/70">Simulated Terrain Projection</p>
          </div>
        </article>

        <aside className="holo-panel p-6">
          <h2 className="text-xl font-semibold text-white">District Status</h2>
          <div className="mt-5 space-y-4">
            {zones.map((zone) => (
              <div key={zone.name} className="zone-card">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-foreground">{zone.name}</p>
                  <span className="text-xs text-primary">{zone.status}</span>
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary/70">
                  <div className="h-full rounded-full bg-primary shadow-[0_0_14px_hsl(var(--primary)/0.75)]" style={{ width: `${zone.load}%` }} />
                </div>
              </div>
            ))}
          </div>
          <button className="game-btn-primary mt-8 w-full">Enter Strategic View</button>
        </aside>
      </section>
    </main>
  );
};

export default Index;
