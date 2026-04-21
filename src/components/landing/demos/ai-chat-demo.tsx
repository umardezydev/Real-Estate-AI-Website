import { Icon } from "../icons";

const chatMessages = [
  {
    role: "visitor",
    text: "Hi, I want to see homes near North Austin under $800K this weekend.",
  },
  {
    role: "ai",
    text: "I can help with that. Are you already pre-approved, or would you like lender options before booking tours?",
  },
  {
    role: "visitor",
    text: "Pre-approved. Saturday afternoon works best.",
  },
  {
    role: "ai",
    text: "Great. I found 3 matching listings and reserved a 4:30 PM tour window for the strongest fit.",
  },
];

const capturedFields = [
  { label: "Budget", value: "$780K" },
  { label: "Timeline", value: "Weekend" },
  { label: "Intent", value: "Buyer tour" },
  { label: "Score", value: "92/100" },
];

export function AiChatDemo() {
  return (
    <div className="relative mx-auto mt-14 max-w-4xl lg:mt-0">
      <div className="accent-glow-bg absolute -inset-8 rounded-[2rem] blur-3xl" />
      <div className="float-card relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/90 shadow-2xl shadow-slate-200/80 backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="accent-soft accent-text grid size-10 place-items-center rounded-full">
              <Icon name="message" className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-950">EstateFlow AI Concierge</p>
              <p className="text-xs text-slate-500">Live website chat qualification</p>
            </div>
          </div>
          <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Online
          </div>
        </div>

        <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[1fr_0.75fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="space-y-3">
              {chatMessages.map((message, index) => {
                const isAi = message.role === "ai";

                return (
                  <div className={isAi ? "flex justify-start" : "flex justify-end"} key={`${message.role}-${index}`}>
                    <div
                      className={
                        isAi
                          ? "max-w-[84%] rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm shadow-slate-200/70"
                          : "max-w-[84%] rounded-2xl bg-slate-950 p-4 text-sm leading-6 text-white shadow-lg shadow-slate-300/60"
                      }
                    >
                      {message.text}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-200/60">
              <div className="flex items-center gap-2">
                <div className="min-w-0 flex-1 rounded-full bg-slate-50 px-4 py-3 text-sm text-slate-400">
                  Ask about listings, tours, financing, or selling...
                </div>
                <button
                  className="hover-accent-strong grid size-11 shrink-0 place-items-center rounded-full bg-slate-950 text-white transition"
                  type="button"
                  aria-label="Send chat message"
                >
                  <Icon name="arrow" className="size-5" />
                </button>
              </div>
            </div>
          </div>

          <aside className="grid gap-4">
            <div className="accent-border accent-soft rounded-3xl border p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="accent-text text-xs uppercase tracking-[0.24em]">Lead captured</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">Ready for agent</h3>
                </div>
                <Icon name="spark" className="accent-text size-6" />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {capturedFields.map((field) => (
                  <div className="rounded-2xl bg-white p-4 shadow-sm shadow-slate-200/70" key={field.label}>
                    <p className="text-xs text-slate-500">{field.label}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-950">{field.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-950">Automation fired</p>
                <Icon name="sync" className="accent-text size-5" />
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                {["CRM record created", "Calendar slot held", "Agent brief generated"].map((item) => (
                  <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-3 py-3" key={item}>
                    <Icon name="check" className="accent-text size-4 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
