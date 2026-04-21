import { pipelineItems, platformMetrics } from "../data";
import { Icon } from "../icons";

export function StaticDashboardDemo() {
  return (
    <div className="relative mx-auto mt-14 max-w-6xl lg:mt-0">
      <div className="accent-glow-bg absolute -inset-8 rounded-[2rem] blur-3xl" />
      <div className="float-card relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/90 shadow-2xl shadow-slate-200/80 backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-rose-400/80" />
            <span className="size-3 rounded-full bg-amber-300/80" />
            <span className="size-3 rounded-full bg-emerald-300/80" />
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
            Live command center
          </div>
        </div>

        <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="accent-text text-xs uppercase tracking-[0.24em]">Pipeline pulse</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">Today&apos;s lead intelligence</h3>
              </div>
              <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                AI active
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {platformMetrics.map((metric) => (
                <div
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60"
                  key={metric.label}
                >
                  <p className="text-xs text-slate-500">{metric.label}</p>
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <span className="text-2xl font-semibold text-slate-950">{metric.value}</span>
                    <span className="accent-text text-xs font-semibold">{metric.trend}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              {pipelineItems.map((lead) => (
                <div
                  className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60 sm:grid-cols-[1fr_auto]"
                  key={lead.name}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="accent-soft accent-text grid size-9 place-items-center rounded-full text-sm font-semibold">
                        {lead.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </span>
                      <div>
                        <p className="font-medium text-slate-950">{lead.name}</p>
                        <p className="text-sm text-slate-500">{lead.intent}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-24 rounded-full bg-slate-200">
                      <div className="accent-fill-gradient h-full rounded-full" style={{ width: `${lead.score}%` }} />
                    </div>
                    <span className="min-w-28 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-center text-xs text-slate-600">
                      {lead.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="accent-border accent-soft rounded-3xl border p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="accent-text text-xs uppercase tracking-[0.24em]">AI summary</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">Agent handoff</h3>
                </div>
                <Icon name="spark" className="accent-text size-6" />
              </div>
              <div className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                <p className="accent-soft-shadow rounded-2xl bg-white p-4">
                  Buyer is pre-approved to $780K, prefers North Austin, wants a Saturday showing, and asked about school districts.
                </p>
                <p className="accent-soft-shadow rounded-2xl bg-white p-4">
                  Next action: confirm two listings and route to the on-duty buyer agent.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
                <div className="mb-5 flex items-center justify-between text-sm">
                  <span className="text-slate-600">Tour slots</span>
                  <Icon name="calendar" className="size-5 text-emerald-600" />
                </div>
                <div className="space-y-2">
                  {["10:30 AM", "2:00 PM", "4:30 PM"].map((slot, index) => (
                    <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-sm" key={slot}>
                      <span className="text-slate-600">{slot}</span>
                      <span className={index === 2 ? "accent-text" : "text-slate-400"}>
                        {index === 2 ? "Booked" : "Open"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
                <div className="mb-5 flex items-center justify-between text-sm">
                  <span className="text-slate-600">Channels</span>
                  <Icon name="sync" className="accent-text size-5" />
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                  {["Web", "Call", "SMS", "CRM"].map((channel) => (
                    <span className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-center" key={channel}>
                      {channel}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
