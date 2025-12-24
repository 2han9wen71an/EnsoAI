import { useXterm } from '@/hooks/useXterm';

interface ShellTerminalProps {
  cwd?: string;
  isActive?: boolean;
  onExit?: () => void;
}

export function ShellTerminal({ cwd, isActive = false, onExit }: ShellTerminalProps) {
  const { containerRef, isLoading, settings } = useXterm({
    cwd,
    isActive,
    onExit,
  });

  return (
    <div className="relative h-full w-full" style={{ backgroundColor: settings.theme.background }}>
      <div ref={containerRef} className="h-full w-full px-[5px] py-[2px]" />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div
              className="h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent"
              style={{ color: settings.theme.foreground, opacity: 0.5 }}
            />
            <span style={{ color: settings.theme.foreground, opacity: 0.5 }} className="text-sm">
              Starting shell...
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
