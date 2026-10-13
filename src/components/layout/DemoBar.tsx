import React from 'react';

export function DemoBar() {
  return (
    <div className="on-dark bg-gradient-to-r from-forest-deep via-forest to-[#126A86] text-ivory">
      <p className="mx-auto max-w-site px-5 py-2 text-[13px] leading-snug sm:px-8 lg:px-10">
        <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-sun align-middle" aria-hidden="true" />
        <span className="font-semibold">Win Auto Group preview.</span> Listings are copied from the dealership website and may change.
        Use the official listing or call to confirm availability. Forms on this site do not send.
      </p>
    </div>);

}