import { ReactNode } from 'react';

const variants: Record<string, { className: string }> = {
  primary: { className: 'badge-primary' },
  accent: { className: 'badge-accent' },
  amber: { className: 'badge-amber' },
  gray: { className: 'badge-gray' },

  encrypt: { className: 'badge-primary' },
  blue: { className: 'badge-primary' },
  teal: { className: 'badge-accent' },
};

export function Badge({ children, variant = 'primary' }: { children: ReactNode; variant?: string }) {
  const resolved = variants[variant] || variants.primary;
  return (
    <span className={`badge ${resolved.className}`}>
      {children}
    </span>
  );
}
