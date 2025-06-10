import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const RoomSummaryCard = ({ room }: { room: any }) => {
  return (
    <Card>
      <CardHeader>
        <div className="relative w-full h-48 rounded overflow-hidden">
          <Image
            src={room.images?.[0] || "/placeholder.jpg"}
            alt={room.name}
            fill
            className="object-cover"
          />
        </div>
        <h2 className="text-lg font-bold mt-4">{room.name}</h2>
        <p className="text-muted-foreground text-sm">{room.type}</p>
      </CardHeader>
      <CardContent>
        <div className="mb-2 text-sm">{room.description}</div>
        <div className="flex flex-wrap gap-2 mt-2">
          {room.amenities.map((am: string) => (
            <Badge key={am} variant="outline" className="capitalize">
              {am}
            </Badge>
          ))}
        </div>
        <div className="text-right font-semibold text-montrose-wine mt-4">
          ₦{room.price.toLocaleString()} / night
        </div>
      </CardContent>
    </Card>
  );
};
