export default function Icon({ name, className = 'h-6 w-6' }: { name: string; className?: string }) {
  const common = { className, fill: 'currentColor', viewBox: '0 0 24 24' } as const;
  switch (name) {
    case 'bolt':
      return <svg {...common}><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" /></svg>;
    case 'headset':
      return <svg {...common}><path d="M12 1a9 9 0 0 0-9 9v7a3 3 0 0 0 3 3h2v-8H5v-2a7 7 0 0 1 14 0v2h-3v8h3a3 3 0 0 0 3-3v-7a9 9 0 0 0-9-9z"/></svg>;
    case 'card':
      return <svg {...common}><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>;
    case 'shield':
      return <svg {...common}><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 17l-5-5 1.4-1.4L11 14.2l6.6-6.6L19 9l-8 9z"/></svg>;
    case 'tune':
      return <svg {...common}><path d="M3 17v2h6v-2H3zm0-7v2h10v-2H3zm0-7v2h14V3H3zm18 14h-6v2h6v-2zm0-7h-4v2h4v-2zm-4-7v2h4V3h-4z"/></svg>;
    case 'tag':
      return <svg {...common}><path d="M21.4 11L12.6 2.2A2 2 0 0 0 11.2 1.6L4 1.6a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4L11.4 21a2 2 0 0 0 2.8 0l7.2-7.2a2 2 0 0 0 0-2.8zM7 8.5A1.5 1.5 0 1 1 8.5 7 1.5 1.5 0 0 1 7 8.5z"/></svg>;
    case 'lock':
      return <svg {...common}><path d="M18 8h-1V6a5 5 0 0 0-10 0v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM9 6a3 3 0 1 1 6 0v2H9V6zm3 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>;
    case 'star':
      return <svg {...common}><path d="M12 .587l3.668 7.568L24 9.75l-6 5.853L19.336 24 12 19.897 4.664 24 6 15.603 0 9.75l8.332-1.595z"/></svg>;
    case 'check':
      return <svg {...common}><path d="M9 16.2L4.8 12 3.4 13.4 9 19l12-12-1.4-1.4z"/></svg>;
    case 'arrow':
      return <svg {...common}><path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case 'pin':
      return <svg {...common}><path d="M12 2a8 8 0 0 0-8 8c0 5.4 8 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>;
    case 'plane':
      return <svg {...common}><path d="M21 16v-2l-8-5V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>;
    default:
      return null;
  }
}
