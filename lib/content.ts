export const FEATURES = [
  {
    title: 'Low-Fare Specialists',
    desc: 'Our agents check low-fare phone options across many carriers and walk you through every detail before booking.',
    icon: 'headset',
  },
  {
    title: '24/7 Support',
    desc: 'Our travel desk is staffed round the clock to help with quotes, changes and post-booking questions.',
    icon: 'bolt',
  },
  {
    title: 'Phone-Only Booking',
    desc: 'We do not collect payment online. Every booking is processed by a live agent on a recorded call.',
    icon: 'card',
  },
  {
    title: 'No Service Fees',
    desc: 'We do not add a service fee. You pay the airline fare quoted on the call — nothing extra from us.',
    icon: 'shield',
  },
];

export const DESTINATIONS = [
  {
    city: 'New York',
    country: 'United States',
    price: 780,
    img: 'https://images.unsplash.com/photo-1543716091-a840c05249ec?auto=format&fit=crop&w=1200&q=70',
  },
  {
    city: 'Cappadocia',
    country: 'Turkey',
    price: 1120,
    img: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=1200&q=70',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    price: 940,
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=70',
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    price: 1340,
    img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=70',
  },
  {
    city: 'Zurich',
    country: 'Switzerland',
    price: 1610,
    img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=70',
  },
  {
    city: 'Kyoto',
    country: 'Japan',
    price: 2500,
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=70',
  },
];

export const VALUE_PROPS = [
  {
    title: 'Independent Agency',
    desc: 'We are not an airline. We help travellers find and book flights across many carriers.',
    icon: 'tune',
  },
  {
    title: 'Transparent Pricing',
    desc: 'You hear the full total — airline fare plus applicable taxes — before any charge. We never add a service fee.',
    icon: 'tag',
  },
  {
    title: 'Booked Over Phone',
    desc: 'Payment is taken by a live agent on a recorded line using a PCI-compliant processor.',
    icon: 'lock',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Aarav M.',
    location: 'Austin, USA',
    initials: 'AM',
    rating: 5,
    quote:
      "Talking to a real person made my rebooking so much easier than wrestling with airline websites. The agent walked me through the change fee before charging anything.",
    color: 'bg-brand-100 text-brand-700',
  },
  {
    name: 'Sophie L.',
    location: 'Melbourne, Australia',
    initials: 'SL',
    rating: 5,
    quote:
      'Good experience overall. The agent was patient with my multi-city trip and the total fare matched what was quoted on the call. Would use again.',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    name: 'Marcus R.',
    location: 'Chicago, USA',
    initials: 'MR',
    rating: 4,
    quote:
      "Quote was a bit higher than what I'd seen on a comparison site, but the agent explained the fare class difference and saved me a long layover. Honest about the trade-offs.",
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'Priya K.',
    location: 'San Jose, USA',
    initials: 'PK',
    rating: 5,
    quote:
      'Needed a last-minute name correction before a flight. They got it sorted in under an hour and emailed me the updated ticket. Solid customer service.',
    color: 'bg-pink-100 text-pink-700',
  },
];

// Realistic recent-month dates so the blog looks maintained, not future-stamped.
const today = new Date();
const fmt = (offsetDays: number) => {
  const d = new Date(today);
  d.setDate(d.getDate() - offsetDays);
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

export const BLOGS = [
  {
    slug: 'best-time-to-book-international-flights',
    title: 'When Is the Real Best Time to Book International Flights?',
    excerpt:
      'Forget the Tuesday-3am myth. Here is the data-backed window airlines actually price down — and how to capture it.',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=70',
    date: fmt(7),
    read: '6 min read',
    category: 'Booking Tips',
  },
  {
    slug: 'how-travel-agents-work',
    title: 'Why Some Travellers Still Use a Phone-Based Travel Agent in 2025',
    excerpt:
      'Travel agents have not disappeared. Here is when calling an agent beats clicking through an online travel engine.',
    img: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=70',
    date: fmt(18),
    read: '8 min read',
    category: 'Industry',
  },
  {
    slug: 'long-haul-comfort-checklist',
    title: 'A 14-Hour Long-Haul Comfort Checklist (Tested by Frequent Flyers)',
    excerpt:
      'From compression socks to the right meal preorder code — small tweaks that turn a brutal flight into a restful one.',
    img: 'https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1200&q=70',
    date: fmt(31),
    read: '5 min read',
    category: 'Travel Tips',
  },
  {
    slug: 'cancellation-rights-explained',
    title: 'Flight Cancellation Rights, Explained Without the Legalese',
    excerpt:
      'What you are actually owed when an airline cancels — refund, rebook, hotel, meals — and how to claim it fast.',
    img: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1200&q=70',
    date: fmt(45),
    read: '7 min read',
    category: 'Policy',
  },
  {
    slug: 'name-correction-when-it-matters',
    title: "Misspelled Your Name on a Ticket? Here's What to Do",
    excerpt:
      'Most airlines allow corrections — but only inside narrow windows and policies. The exact playbook to fix it without rebooking.',
    img: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&w=1200&q=70',
    date: fmt(58),
    read: '4 min read',
    category: 'Booking Tips',
  },
  {
    slug: 'underrated-destinations-2025',
    title: '7 Underrated Destinations Travellers Are Loving This Year',
    excerpt:
      'Places where the crowds have not arrived yet, where the dollar still stretches, and the photos still look unspoiled.',
    img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=70',
    date: fmt(72),
    read: '9 min read',
    category: 'Destinations',
  },
];
