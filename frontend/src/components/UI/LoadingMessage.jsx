import { cn } from "../../lib/utils";

const LoadingMessage = ({ text = "Loading...", className }) => {
  return (
    <div className={cn("flex items-center justify-center gap-2 py-4", className)}>
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
};

export default LoadingMessage;