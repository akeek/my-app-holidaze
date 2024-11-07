import { Input } from "@/components/ui/input"

const Search = () => {
  return (
    <div className="drop-shadow-md w-64 mx-auto">
      <h3 className="text-2xl text-center">All products</h3>
      <Input placeholder="Search our products"/>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto">
      <h1 className="text-2xl text-center">Search to find a venue</h1>
      <Search />
    </div>
  );
}
