import { Image, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaPlaceholderProps {
  type?: "image" | "video";
  aspectRatio?: "16:9" | "4:3" | "1:1" | "9:16";
  label?: string;
  className?: string;
}

const aspectRatioClasses = {
  "16:9": "aspect-video",
  "4:3": "aspect-[4/3]",
  "1:1": "aspect-square",
  "9:16": "aspect-[9/16]",
};

export function MediaPlaceholder({
  type = "image",
  aspectRatio = "16:9",
  label,
  className,
}: MediaPlaceholderProps) {
  const Icon = type === "video" ? Play : Image;

  return (
    <div
      className={cn(
        "media-placeholder",
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      <div className="flex flex-col items-center gap-2 text-muted-foreground">
        <Icon className="h-12 w-12" />
        <span className="text-sm font-medium">
          {label || `Placeholder de ${type === "video" ? "Vídeo" : "Imagem"}`}
        </span>
        <span className="text-xs">Ratio: {aspectRatio}</span>
      </div>
    </div>
  );
}
