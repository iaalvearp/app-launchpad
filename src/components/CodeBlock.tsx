interface CodeBlockProps {
  code: string;
  filename?: string;
}

export const CodeBlock = ({ code, filename = "main.py" }: CodeBlockProps) => {
  const lines = code.trim().split("\n");
  return (
    <div className="rounded-2xl overflow-hidden border border-border/70 bg-[hsl(var(--surface-1))] shadow-elevated">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/70 bg-[hsl(var(--surface-2))]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
        </div>
        <span className="font-mono text-xs text-muted-foreground">{filename}</span>
        <span className="font-mono text-xs text-primary">▶ run</span>
      </div>
      <pre className="font-mono text-[13px] leading-relaxed p-4 overflow-x-auto">
        {lines.map((line, i) => (
          <div key={i} className="flex">
            <span className="select-none w-8 text-right pr-3 text-muted-foreground/50">
              {i + 1}
            </span>
            <code
              className="text-foreground/90"
              dangerouslySetInnerHTML={{ __html: highlight(line) }}
            />
          </div>
        ))}
        <div className="flex">
          <span className="select-none w-8 text-right pr-3 text-muted-foreground/50">
            {lines.length + 1}
          </span>
          <span className="inline-block w-2 h-4 bg-primary animate-blink" />
        </div>
      </pre>
    </div>
  );
};

function highlight(line: string): string {
  // very small Python-flavored highlighter
  return line
    .replace(/(#.*$)/g, '<span style="color:hsl(var(--muted-foreground))">$1</span>')
    .replace(
      /\b(import|from|as|def|return|if|else|for|in|class|with|print)\b/g,
      '<span style="color:hsl(var(--primary));font-weight:600">$1</span>'
    )
    .replace(/('[^']*'|"[^"]*")/g, '<span style="color:hsl(var(--primary-glow))">$1</span>')
    .replace(/\b(\d+\.?\d*)\b/g, '<span style="color:hsl(var(--primary-glow))">$1</span>');
}
