const base =
'inline-flex items-center justify-center gap-2 rounded font-medium whitespace-nowrap transition-all duration-200 ease-out disabled:cursor-not-allowed disabled:opacity-50';

export const btn = {
  primary: `${base} h-12 px-5 text-[15px] bg-forest text-ivory shadow-md shadow-forest/15 hover:-translate-y-0.5 hover:bg-forest-deep hover:shadow-lg hover:shadow-forest/20`,
  secondary: `${base} h-12 px-5 text-[15px] border border-forest/20 bg-white/65 text-forest hover:-translate-y-0.5 hover:border-aqua hover:bg-aqua-soft`,
  light: `${base} h-12 px-5 text-[15px] bg-ivory text-ink hover:bg-paper`,
  outlineLight: `${base} h-12 px-5 text-[15px] border border-ivory/60 text-ivory hover:bg-ivory hover:text-ink`,
  small: `${base} h-10 px-3.5 text-sm border border-forest/15 bg-white text-forest hover:-translate-y-0.5 hover:border-aqua hover:bg-aqua-soft`
};

export const textLink =
'font-medium text-forest underline decoration-forest/30 underline-offset-4 transition-colors duration-150 hover:decoration-forest';

export const container = 'mx-auto w-full max-w-site px-5 sm:px-8 lg:px-10';