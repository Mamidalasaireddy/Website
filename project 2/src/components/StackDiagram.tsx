import { useEffect, useRef, useState } from 'react';

const layers = [
  {
    name: 'Angular',
    role: 'The interface people use',
    code: "http.get('/api/orders/42')",
  },
  {
    name: 'Spring Boot',
    role: 'REST endpoints and request handling',
    code: '@GetMapping("/orders/{id}")',
  },
  {
    name: 'Java',
    role: 'Business rules and services',
    code: 'orderService.findById(id)',
  },
  {
    name: 'AWS',
    role: 'Hosting, storage and deployment',
    code: 'deployed and running on AWS',
  },
];

export function StackDiagram() {
  const [active, setActive] = useState(0);
  const userTookOver = useRef(false);

  // One short sequence on load: the request travels down the stack once.
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
      if (step < layers.length) {
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
      <div role="group" aria-label="How a request moves through the stack" className="flex flex-col">
        {layers.map((layer, index) => {
          const isActive = index === active;
          return (
            <div key={layer.name} className="flex flex-col">
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
                  <span className="font-display text-xl font-bold tracking-tight">{layer.name}</span>
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                      isActive ? 'bg-signal' : 'bg-line'
                    }`}
                  />
                </span>
                <span className={`mt-1 block text-sm ${isActive ? 'text-paper/80' : 'text-muted'}`}>
                  {layer.role}
                </span>
                <span
                  className={`mt-3 block font-mono text-sm transition-colors duration-300 ${
                    isActive ? 'text-signal' : 'text-muted/70'
                  }`}
                >
                  {layer.code}
                </span>
              </button>
              {index < layers.length - 1 && (
                <span aria-hidden="true" className="mx-auto h-4 w-px bg-line" />
              )}
            </div>
          );
        })}
      </div>
      <figcaption className="mt-4 text-sm text-muted">
        Select a layer to see what it does in a typical request.
      </figcaption>
    </figure>
  );
}
