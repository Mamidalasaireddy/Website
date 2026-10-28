import { useEffect, useRef, useState } from 'react';

const steps = [
  {
    name: 'EDI 810',
    role: 'The vendor invoice arrives from the trading partner',
    code: 'monitored in WE02 and WE05',
  },
  {
    name: 'SAP AIF',
    role: 'The invoice is validated and mapped; errors are fixed and reprocessed',
    code: 'touchless, or fix and reprocess',
  },
  {
    name: 'Invoice verification',
    role: 'Three-way match against the purchase order and goods receipt',
    code: 'MIRO, MIR7, GR/IR clearing',
  },
  {
    name: 'Payment run',
    role: 'Approved invoices are paid by ACH, wire or check',
    code: 'F110, with EDI 820 remittance',
  },
];

export function InvoiceFlow() {
  const [active, setActive] = useState(0);
  const userTookOver = useRef(false);

  // One short sequence on load: the invoice moves through the process once.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let step = 0;
    setActive(0);
    const timer = window.setInterval(() => {
      if (userTookOver.current) {
        window.clearInterval(timer);
        return;
      }
      step += 1;
      if (step < steps.length) {
        setActive(step);
      } else {
        window.clearInterval(timer);
        setActive(0);
      }
    }, 750);

    return () => window.clearInterval(timer);
  }, []);

  const select = (index: number) => {
    userTookOver.current = true;
    setActive(index);
  };

  return (
    <figure>
      <div role="group" aria-label="How a vendor invoice moves through SAP" className="flex flex-col">
        {steps.map((step, index) => {
          const isActive = index === active;
          return (
            <div key={step.name} className="flex flex-col">
              <button
                type="button"
                onClick={() => select(index)}
                aria-pressed={isActive}
                className={`w-full rounded-lg border px-5 py-4 text-left transition-colors duration-300 ${
                  isActive
                    ? 'border-ink bg-ink text-paper'
                    : 'border-line bg-white text-ink hover:border-ink/40'
                }`}
              >
                <span className="flex items-center justify-between gap-4">
                  <span className="font-display text-xl font-bold tracking-tight">{step.name}</span>
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                      isActive ? 'bg-signal' : 'bg-line'
                    }`}
                  />
                </span>
                <span className={`mt-1 block text-sm ${isActive ? 'text-paper/80' : 'text-muted'}`}>
                  {step.role}
                </span>
                <span
                  className={`mt-3 block font-mono text-sm transition-colors duration-300 ${
                    isActive ? 'text-signal' : 'text-muted/70'
                  }`}
                >
                  {step.code}
                </span>
              </button>
              {index < steps.length - 1 && (
                <span aria-hidden="true" className="mx-auto h-4 w-px bg-line" />
              )}
            </div>
          );
        })}
      </div>
      <figcaption className="mt-4 text-sm text-muted">
        Select a step to see what happens to a vendor invoice in Accounts Payable.
      </figcaption>
    </figure>
  );
}
