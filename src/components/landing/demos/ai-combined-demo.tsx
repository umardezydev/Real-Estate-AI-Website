"use client";

import { useEffect, useMemo, useState } from "react";
import { Icon } from "../icons";

type ChatMessage = {
  role: "visitor" | "ai";
  text: string;
};

const voiceNotes = [
  "Caller asked for seller valuation",
  "Move timeline: 30-45 days",
  "Agent handoff brief generated",
];

const channelStats = [
  { label: "Chat lead score", value: "92" },
  { label: "Call urgency", value: "Hot" },
  { label: "Next action", value: "Book" },
];

function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const remainingSeconds = (seconds % 60).toString().padStart(2, "0");

  return `${minutes}:${remainingSeconds}`;
}

function getTypingDelay(character: string, index: number) {
  if (character === "," || character === ".") {
    return 76;
  }

  if (character === "?") {
    return 92;
  }

  return 18 + ((index % 4) * 7);
}

export function AiCombinedDemo() {
  const chatScript = useMemo<ChatMessage[]>(
    () => [
      {
        role: "visitor",
        text: "Can I see the Westlake listing this Saturday?",
      },
      {
        role: "ai",
        text: "Yes. I can hold a 4:30 PM tour and send the agent your financing notes.",
      },
      {
        role: "visitor",
        text: "Perfect, I am pre-approved up to $780K.",
      },
      {
        role: "ai",
        text: "Done. I also created the CRM record and merged your call notes into the handoff.",
      },
    ],
    [],
  );

  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [activeVoiceNote, setActiveVoiceNote] = useState(0);
  const [callSeconds, setCallSeconds] = useState(168);

  const activeMessage = chatScript[activeIndex];

  useEffect(() => {
    if (activeIndex >= chatScript.length) {
      const resetTimer = window.setTimeout(() => {
        setVisibleMessages([]);
        setTypedText("");
        setIsSending(false);
        setActiveIndex(0);
      }, 2200);

      return () => window.clearTimeout(resetTimer);
    }

    const message = chatScript[activeIndex];
    let currentChar = 0;
    let typingTimer: number | undefined;
    let commitTimer: number | undefined;

    const commitMessage = () => {
      commitTimer = window.setTimeout(
        () => {
          setVisibleMessages((messages) => [...messages, message]);
          setTypedText("");
          setIsSending(false);
          setActiveIndex((index) => index + 1);
        },
        message.role === "visitor" ? 260 : 520,
      );
    };

    const typeNextCharacter = () => {
      currentChar += 1;
      setTypedText(message.text.slice(0, currentChar));

      if (currentChar >= message.text.length) {
        if (message.role === "visitor") {
          setIsSending(true);
        }

        commitMessage();
        return;
      }

      typingTimer = window.setTimeout(
        typeNextCharacter,
        getTypingDelay(message.text[currentChar] ?? "", currentChar),
      );
    };

    const startTimer = window.setTimeout(typeNextCharacter, message.role === "ai" ? 560 : 180);

    return () => {
      window.clearTimeout(startTimer);
      if (typingTimer) {
        window.clearTimeout(typingTimer);
      }
      if (commitTimer) {
        window.clearTimeout(commitTimer);
      }
    };
  }, [activeIndex, chatScript]);

  useEffect(() => {
    const noteTimer = window.setInterval(() => {
      setActiveVoiceNote((index) => (index + 1) % voiceNotes.length);
    }, 1500);

    const durationTimer = window.setInterval(() => {
      setCallSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => {
      window.clearInterval(noteTimer);
      window.clearInterval(durationTimer);
    };
  }, []);

  return (
    <div className="relative mx-auto mt-14 max-w-5xl lg:mt-0">
      <div className="accent-glow-bg absolute -inset-8 rounded-4xl blur-3xl" />
      <div className="float-card relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white/90 shadow-2xl shadow-slate-200/80 backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div className="flex items-center gap-3">
            <span className="accent-soft accent-text grid size-10 place-items-center rounded-2xl">
              <Icon name="sync" className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold tracking-tight text-slate-950">Omnichannel AI Desk</p>
              <p className="text-xs font-medium text-slate-500">Chat and voice qualification in one flow</p>
            </div>
          </div>
          <div className="live-pill text-nowrap rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            2 channels active
          </div>
        </div>

        <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="flex min-h-128 flex-col rounded-3xl border border-slate-200 bg-slate-50/90 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="accent-text text-[0.68rem] font-semibold uppercase tracking-[0.26em]">Website chat</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">Buyer conversation</h3>
              </div>
              <span className="accent-soft accent-text grid size-10 place-items-center rounded-2xl">
                <Icon name="message" className="size-5" />
              </span>
            </div>

            <div className="flex flex-1 flex-col justify-end space-y-3 overflow-hidden">
              {visibleMessages.map((message, index) => {
                const isAi = message.role === "ai";

                return (
                  <div className={isAi ? "message-pop flex justify-start" : "message-pop flex justify-end"} key={`${message.role}-${index}`}>
                    <div
                      className={
                        isAi
                          ? "max-w-[88%] rounded-2xl border border-slate-200 bg-white p-4 text-[0.84rem] leading-6 text-slate-700 shadow-sm shadow-slate-200/70"
                          : "max-w-[88%] rounded-2xl bg-slate-950 p-4 text-[0.84rem] leading-6 text-white shadow-lg shadow-slate-300/60"
                      }
                    >
                      {message.text}
                    </div>
                  </div>
                );
              })}

              {activeMessage?.role === "ai" && !typedText ? (
                <div className="flex justify-start">
                  <div className="message-pop rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm shadow-slate-200/70">
                    <span className="typing-dot" />
                    <span className="typing-dot typing-dot-delay-1" />
                    <span className="typing-dot typing-dot-delay-2" />
                  </div>
                </div>
              ) : null}

              {activeMessage?.role === "ai" && typedText ? (
                <div className="flex justify-start">
                  <div className="max-w-[88%] rounded-2xl border border-slate-200 bg-white p-4 text-[0.84rem] leading-6 text-slate-700 shadow-sm shadow-slate-200/70">
                    {typedText}
                    <span className="typing-cursor" />
                  </div>
                </div>
              ) : null}
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-200/60">
              <div className="flex items-center gap-2">
                <div className="min-w-0 flex-1 rounded-full bg-slate-50 px-4 py-3 text-[0.84rem] font-medium text-slate-500">
                  {activeMessage?.role === "visitor" && typedText ? (
                    <>
                      {typedText}
                      <span className="typing-cursor" />
                    </>
                  ) : (
                    "Ask about listings, tours, financing, or selling..."
                  )}
                </div>
                <button
                  className={`hover-accent-strong grid size-11 shrink-0 place-items-center rounded-full bg-slate-950 text-white shadow-lg shadow-slate-300/60 transition ${
                    isSending ? "send-pulse" : ""
                  }`}
                  type="button"
                  aria-label="Send chat message"
                >
                  <Icon name="arrow" className="size-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="accent-border accent-soft rounded-3xl border p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="accent-text text-[0.68rem] font-semibold uppercase tracking-[0.26em]">Voice call</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">Seller intake</h3>
                </div>
                <div className="relative grid size-14 place-items-center rounded-full bg-slate-950 text-white">
                  <span className="voice-ring absolute inset-1 rounded-full border border-white/25" />
                  <span className="voice-ring voice-ring-delay absolute inset-3 rounded-full border border-white/20" />
                  <Icon name="phone" className="relative size-6" />
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-white p-4 shadow-sm shadow-slate-200/70">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Live call</p>
                    <p className="mt-1 text-2xl font-semibold text-slate-950">{formatDuration(callSeconds)}</p>
                  </div>
                  <div className="flex h-12 items-end gap-1.5">
                    {[0, 1, 2, 3, 4, 5, 6].map((bar) => (
                      <span
                        className="voice-bar accent-fill-gradient w-1.5 rounded-full"
                        key={bar}
                        style={{ animationDelay: `${bar * 110}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {voiceNotes.map((note, index) => {
                  const isActive = index === activeVoiceNote;

                  return (
                    <div
                      className={`flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-sm shadow-sm transition ${
                        isActive
                          ? "voice-note-active text-slate-950 shadow-slate-300/80"
                          : "text-slate-600 shadow-slate-200/70"
                      }`}
                      key={note}
                    >
                      {isActive ? (
                        <span className="voice-processing accent-fill-gradient size-4 shrink-0 rounded-full" />
                      ) : (
                        <Icon name="check" className="accent-text size-4 shrink-0" />
                      )}
                        <span className="font-medium">{note}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {channelStats.map((stat) => (
                <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm shadow-slate-200/60" key={stat.label}>
                  <p className="text-xs leading-5 text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold tracking-tight text-slate-950">Unified handoff</p>
                  <p className="mt-1 text-sm text-slate-500">CRM record, booking context, and transcript summary merged.</p>
                </div>
                <Icon name="layers" className="accent-text size-6 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
