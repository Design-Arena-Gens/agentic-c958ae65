import clsx from 'clsx';
import type { ReactNode } from 'react';

interface GlowCardProps {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

export function GlowCard({ title, subtitle, icon, className, children }: GlowCardProps) {
  return (
    <div className={clsx('glass relative overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-sky-500/20', className)}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="flex items-start gap-4">
        {icon && <div className="mt-1 text-accent">{icon}</div>}
        <div>
          {title && <h3 className="text-lg font-semibold text-foreground">{title}</h3>}
          {subtitle && <p className="mt-1 text-sm text-slate-300">{subtitle}</p>}
        </div>
      </div>
      <div className={clsx(title || subtitle ? 'mt-4' : undefined)}>{children}</div>
    </div>
  );
}
