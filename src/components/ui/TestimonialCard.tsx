import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "card-base p-6 flex flex-col transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-muted text-muted"
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-foreground mb-6 flex-1">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
          <span className="text-sm font-medium text-muted-foreground">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">{author}</p>
          <p className="text-xs text-muted-foreground">
            {role} • {company}
          </p>
        </div>
      </div>
    </div>
  );
}
