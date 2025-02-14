import Input from "@/components/Input";
import ListArtist from "@/components/listArtist";
export default function Artists() {
  return (
    <main className="flex flex-col items-center mt-4">
      <Input placeholder="search" />
      <ListArtist />
    </main>
  );
}
