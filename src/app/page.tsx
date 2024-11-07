import { Input } from "@/components/ui/input"

const Search = () => {
  return (
    <div className="drop-shadow-md w-64 mx-auto">
      <Input className="w-72" placeholder="Ex Europe, USA, Oslo"/>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto pt-4">
      <h1 className="text-3xl py-6 text-center text-red-500">Search to find a venue</h1>
      <Search />
    </div>
  );
}
