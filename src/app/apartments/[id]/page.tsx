import { RoomDetailsPage } from "@/components";

export default async function RoomPage({ params }: { params: Promise<{ id: string }> }) {
  const {id} = await params
  return <RoomDetailsPage roomId={id} />;
}
