import { Construction } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function UnderConstruction() {
  return (
    <Card className="rounded-lg">
      <CardContent className="flex flex-col items-center gap-3 py-10 text-center">
        <Construction className="size-8 text-muted-foreground" />
        <div className="flex flex-col gap-1">
          <p className="font-medium text-foreground">Under Construction</p>
          <p className="text-sm text-muted-foreground">
            This section is coming soon.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
