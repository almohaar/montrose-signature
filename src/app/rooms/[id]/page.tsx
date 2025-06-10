import { RoomDetailsPage } from "@/components";

export default function RoomPage({ params }: { params: { id: string } }) {
  return <RoomDetailsPage roomId={params.id} />;
}
