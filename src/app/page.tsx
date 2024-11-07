import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import Image from "next/image";

const Search = () => {
  return (
    <div className="drop-shadow-md w-64 mx-auto pb-6">
      <Input className="w-72" placeholder="Ex Europe, USA, Oslo"/>
    </div>
  );
}

type LocationInfo = {
  id: string;
  name: string;
  desc: string;
  rating: number;
  price: number;
  imgUrl: string;
}

const locations: LocationInfo [] = [
  {
    id: "1",
    name: "Beach House",
    desc: "Beautiful wooden house by the beach",
    rating: 5,
    price: 999,
    imgUrl: "https://picsum.photos/id/42/3456/230"
  },
  {
    id: "2",
    name: "Beach House",
    desc: "Beautiful wooden house by the beach",
    rating: 5,
    price: 999,
    imgUrl: "https://picsum.photos/id/42/3456/230"
  },
  {
    id: "3",
    name: "Beach House",
    desc: "Beautiful wooden house by the beach",
    rating: 5,
    price: 999,
    imgUrl: "https://picsum.photos/id/42/3456/230"
  },
  {
    id: "4",
    name: "Beach House",
    desc: "Beautiful wooden house by the beach",
    rating: 5,
    price: 999,
    imgUrl: "https://picsum.photos/id/42/3456/230"
  },
]

const LocationCard = ({item: {name, desc, rating, price, imgUrl}}:{item:LocationInfo}) => {
  return (
    <Card>
      <CardTitle className="relative h-80">
          <img src={imgUrl} className="object-cover" alt="image description" />
      </CardTitle>
      <CardContent>
        <div>
          <h3>{name}</h3>
          <span>{rating}</span>
        </div>
        <div>
          <p>{desc}</p>
        </div>
      </CardContent>
      <CardFooter>
        <div>
          <p>{price}</p>
        </div>
      </CardFooter>
    </Card>
  )
}

export default function Home() {
  return (
    <>
    <div className="mx-auto pt-4">
      <h1 className="text-3xl py-6 text-center text-red-500">Search to find a venue</h1>
      <Search />
    </div>
    <h2 className="text-center text-3xl pb-5">The latest listings</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
      {locations.map((i) => (
        <LocationCard key={i.id} item={i} />
      ))}
    </div>
    </>
  );
}
