export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Tech Recruiters &amp; Engineering Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect Copied Coding<br />
          <span className="text-[#58a6ff]">Interview Solutions</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Instantly analyze candidate submissions against GitHub, Stack Overflow, and LeetCode.
          Get confidence scores and exact source matches before you make a hire.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Detecting Plagiarism — $12/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            ["GitHub", "50M+ repos scanned"],
            ["Stack Overflow", "60M+ answers checked"],
            ["LeetCode", "3,000+ problems matched"]
          ].map(([platform, stat]) => (
            <div key={platform} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm">{platform}</div>
              <div className="text-[#8b949e] text-xs mt-1">{stat}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited submissions per month",
              "GitHub, Stack Overflow & LeetCode scanning",
              "Confidence score + source match report",
              "Paste code or upload files (.py, .js, .java, .cpp)",
              "Queue-based processing with email alerts",
              "Export reports as PDF"
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the plagiarism detection work?",
              "We use token-based similarity algorithms (similar to MOSS) to compare submitted code against indexed public repositories, Stack Overflow answers, and LeetCode solutions. Each match is scored by similarity percentage and ranked by confidence."
            ],
            [
              "What programming languages are supported?",
              "Python, JavaScript, TypeScript, Java, C++, C, Go, and Ruby. More languages are added regularly based on user demand."
            ],
            [
              "Is candidate data kept private?",
              "Yes. All submissions are encrypted at rest and in transit. We never share or index candidate code. You can delete submissions at any time from your dashboard."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="text-white font-semibold text-sm mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} PlagiaCheck. Built for fair hiring.
      </footer>
    </main>
  );
}
