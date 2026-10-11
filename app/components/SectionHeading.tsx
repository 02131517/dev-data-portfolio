
type SectionHeadingProps = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-sm text-cyan-400">
          {number}
        </span>

        <span className="h-px w-8 bg-cyan-500/50" />

        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          {eyebrow}
        </span>
      </div>

      <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}
