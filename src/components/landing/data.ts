export const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "Workflow", href: "#workflow" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
];

export const heroStats = [
  { value: "24/7", label: "Always-on lead desk" },
  { value: "8 min", label: "Target response window" },
  { value: "42%", label: "Tour-ready lead lift" },
];

export const platformMetrics = [
  { label: "Qualified leads", value: "186", trend: "+31%" },
  { label: "Tours booked", value: "42", trend: "+18%" },
  { label: "Hot follow-ups", value: "17", trend: "Live" },
];

export const pipelineItems = [
  { name: "Sarah Mitchell", intent: "Seller valuation", score: 94, status: "Ready for agent" },
  { name: "Daniel Cho", intent: "Buyer tour", score: 88, status: "Booked 4:30 PM" },
  { name: "Priya Shah", intent: "Rental inquiry", score: 81, status: "Nurture sequence" },
];

export const capabilities = [
  {
    eyebrow: "Capture",
    title: "Respond the moment intent appears",
    body: "Engage buyers, sellers, renters, and owners across chat, missed calls, SMS, and WhatsApp with fast, property-aware conversations.",
  },
  {
    eyebrow: "Qualify",
    title: "Turn raw inquiries into agent-ready context",
    body: "Capture budget, timeline, location, financing status, property needs, and urgency before a prospect reaches your team.",
  },
  {
    eyebrow: "Schedule",
    title: "Move qualified prospects toward appointments",
    body: "Coordinate viewing windows, reminders, reschedules, and follow-up prompts while keeping calendars and agents aligned.",
  },
  {
    eyebrow: "Sync",
    title: "Keep every handoff organized and searchable",
    body: "Convert conversations into structured records with source, urgency, property interest, transcript notes, and next best action.",
  },
];

export const workflow = [
  {
    step: "01",
    title: "A prospect reaches out",
    body: "An inquiry arrives from your website, phone line, SMS campaign, WhatsApp thread, listing portal, or open house follow-up.",
  },
  {
    step: "02",
    title: "EstateFlow AI qualifies intent",
    body: "The assistant asks relevant real estate questions, identifies urgency, and turns the conversation into clean lead data.",
  },
  {
    step: "03",
    title: "The next action is routed",
    body: "Qualified prospects are guided toward a tour, valuation consultation, rental response, or nurture sequence based on intent.",
  },
  {
    step: "04",
    title: "Your team steps in with clarity",
    body: "Agents receive the transcript, qualification summary, lead score, recommended action, and CRM-ready record before outreach.",
  },
];

export const useCases = [
  "Inbound buyer qualification",
  "Seller valuation requests",
  "Rental inquiry routing",
  "Open house follow-up",
  "Past client reactivation",
  "Property manager support",
];

export const integrations = [
  "Zillow",
  "Realtor.com",
  "Follow Up Boss",
  "HubSpot",
  "Salesforce",
  "Google Calendar",
  "Twilio",
  "WhatsApp",
];

export const testimonials = [
  {
    quote:
      "EstateFlow AI gives our team the context we need before the first call. The biggest operational win is fewer missed opportunities after hours.",
    name: "Maya Reynolds",
    role: "Broker owner, Northline Realty",
  },
  {
    quote:
      "Our website finally behaves like part of the sales operation. Inquiries are qualified, routed, and followed up without relying on manual chasing.",
    name: "Andre Collins",
    role: "Team lead, MetroNest Group",
  },
  {
    quote:
      "It works like a front desk for rentals and sales. Conversations keep moving, and the most urgent prospects surface for our agents quickly.",
    name: "Lina Park",
    role: "Operations director, Harbor Keys",
  },
];

export const pricingPlans = [
  {
    name: "Launch",
    price: "$99",
    description: "For agents who want a reliable AI intake layer on their website.",
    features: ["Website chat concierge", "Buyer and seller qualification", "Email follow-up prompts", "Lead activity dashboard"],
  },
  {
    name: "Growth",
    price: "$249",
    description: "For teams that need omnichannel capture, scheduling, and cleaner handoffs.",
    features: ["Everything in Launch", "SMS and missed-call capture", "Tour and consultation routing", "CRM-ready handoff fields"],
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    description: "For brokerages and property teams with custom routing and operational needs.",
    features: ["Multi-office routing", "Custom qualification workflows", "Team permissions", "Priority onboarding"],
  },
];

export const faqs = [
  {
    question: "What does EstateFlow AI help real estate teams automate?",
    answer:
      "EstateFlow AI is designed to automate lead intake, qualification, appointment routing, follow-up prompts, and CRM-ready handoff summaries across the channels where prospects already reach out.",
  },
  {
    question: "Can agents stay in control of the conversation?",
    answer:
      "Yes. The assistant prepares context and handles repetitive intake, while agents can step in for negotiations, relationship-building, listing strategy, and high-value conversations.",
  },
  {
    question: "How does the platform support brokerages and teams?",
    answer:
      "Team workflows can be organized by office, agent availability, lead source, property type, service area, and routing rules so the right person gets the right opportunity.",
  },
  {
    question: "Which integrations matter most for rollout?",
    answer:
      "The most important integrations are usually calendars, CRMs, messaging providers, listing sources, and notification channels. EstateFlow AI is positioned to fit around the tools a real estate team already uses.",
  },
];
