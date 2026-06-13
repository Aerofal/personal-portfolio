'use client'

const FIELDS: Array<{ key: string; value: string; isString: boolean }> = [
  { key: 'role', value: "'Aspiring Domain Expert'", isString: true },
  { key: 'focus', value: "['Product', 'Project', 'People', 'Ops']", isString: true },
  { key: 'education', value: "'BINUS University'", isString: true },
  { key: 'stack', value: "['TypeScript', 'React', 'Next.js']", isString: true },
  { key: 'learning', value: "'Swift'", isString: true },
  { key: 'openToWork', value: 'true', isString: false },
]

export default function CodeCard() {
  return (
    <div
      aria-hidden="true"
      className="rounded-lg border border-foreground/10 bg-foreground/[0.03]"
    >
      <div className="flex items-center gap-2 border-b border-foreground/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="ml-2 font-mono text-xs text-foreground/40">
          naufal.ts
        </span>
      </div>
      <pre className="overflow-x-auto px-5 py-4 font-mono text-sm leading-7">
        <code>
          <span className="text-accent">const</span>
          <span className="text-foreground/80"> naufal </span>
          <span className="text-foreground/40">= {'{'}</span>
          {'\n'}
          {FIELDS.map((field) => (
            <span key={field.key}>
              {'  '}
              <span className="text-foreground/60">{field.key}</span>
              <span className="text-foreground/40">: </span>
              <span className={field.isString ? 'text-accent' : 'text-foreground/80'}>
                {field.value}
              </span>
              <span className="text-foreground/40">,</span>
              {'\n'}
            </span>
          ))}
          <span className="text-foreground/40">{'}'}</span>
        </code>
      </pre>
    </div>
  )
}
