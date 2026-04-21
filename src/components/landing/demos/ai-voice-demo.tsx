import { Icon } from "../icons";

const callSignals = [
  { label: "Intent", value: "Seller valuation" },
  { label: "Timeline", value: "30-45 days" },
  { label: "Property", value: "4 bed single-family" },
  { label: "Priority", value: "Hot lead" },
];

const transcript = [
  {
    speaker: "Caller",
    text: "I am thinking about selling my home, but I need to know what it could list for first.",
  },
  {
    speaker: "EstateFlow AI",
    text: "I can help capture the details. What is the property address and when are you hoping to move?",
  },
  {
    speaker: "Caller",
    text: "Sometime next month. It is a four bedroom near Westlake.",
  },
];

export function AiVoiceDemo() {
  return (
    <div className="relative mx-auto mt-14 max-w-4xl lg:mt-0">
      <div className="accent-glow-bg absolute -inset-8 rounded-[2rem] blur-3xl" />
      <div className="float-card relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/90 shadow-2xl shadow-slate-200/80 backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="accent-soft accent-text grid size-10 place-items-center rounded-full">
              <Icon name="phone" className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-950">EstateFlow Voice Agent</p>
              <p className="text-xs text-slate-500">Inbound call qualification</p>
            </div>
          </div>
          <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            Live call
          </div>
        </div>

        <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="accent-border accent-soft rounded-3xl border p-5">
            <div className="mx-auto grid aspect-square max-w-64 place-items-center rounded-full border border-white bg-white/65 p-5 shadow-xl shadow-slate-200/60">
              <div className="relative grid size-full place-items-center rounded-full bg-slate-950 text-white">
                <div className="voice-ring absolute inset-4 rounded-full border border-white/20" />
                <div className="voice-ring voice-ring-delay absolute inset-8 rounded-full border border-white/20" />
                <div className="relative grid size-20 place-items-center rounded-full bg-white text-slate-950 shadow-xl shadow-slate-900/20">
                  <Icon name="phone" className="size-8" />
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Call duration</p>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">02:48</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                AI is collecting seller context, urgency, and handoff notes while the caller stays engaged.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {["Voice", "Notes", "CRM"].map((item) => (
                <span className="rounded-2xl bg-white px-3 py-3 text-center text-xs font-medium text-slate-600" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="accent-text text-xs uppercase tracking-[0.24em]">Real-time transcript</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">Seller lead captured</h3>
                </div>
                <Icon name="spark" className="accent-text size-6" />
              </div>
              <div className="mt-5 space-y-3">
                {transcript.map((line) => (
                  <div className="rounded-2xl bg-white p-4 shadow-sm shadow-slate-200/70" key={`${line.speaker}-${line.text}`}>
                    <p className="text-xs font-semibold text-slate-500">{line.speaker}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{line.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {callSignals.map((signal) => (
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60" key={signal.label}>
                  <p className="text-xs text-slate-500">{signal.label}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-950">{signal.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
