import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: "increase" | "decrease";
  };
  icon: LucideIcon;
  className?: string;
  color?: "primary" | "success" | "warning" | "info";
}

export default function MetricCard({
  title,
  value,
  change,
  icon: Icon,
  className,
  color = "primary"
}: MetricCardProps) {
  const colorClasses = {
    primary: "bg-primary-light text-primary",
    success: "bg-success-light text-success",
    warning: "bg-warning-light text-warning",
    info: "bg-info-light text-info"
  };

  return (
    <Card className={cn("hover:shadow-md transition-shadow duration-200", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            {change && (
              <div className="flex items-center space-x-1">
                <span
                  className={cn(
                    "text-xs font-medium",
                    change.type === "increase" 
                      ? "text-success" 
                      : "text-destructive"
                  )}
                >
                  {change.type === "increase" ? "+" : "-"}{Math.abs(change.value)}%
                </span>
                <span className="text-xs text-muted-foreground">vs mes anterior</span>
              </div>
            )}
          </div>
          <div className={cn("p-3 rounded-lg", colorClasses[color])}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}