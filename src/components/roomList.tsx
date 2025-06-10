"use client";

import { useState } from "react";
import { RoomFilter } from "./roomFilter";

const sampleRooms = [
  {
    id: 1,
    name: "Executive Suite",
    type: "Luxury",
    price: 450,
    image: "/images/room1.jpg",
  },
  {
    id: 2,
    name: "Deluxe Room",
    type: "Deluxe",
    price: 300,
    image: "/images/room2.jpg",
  },
];

const RoomList = () => {
  const [filteredRooms, setFilteredRooms] = useState(sampleRooms);

  const handleFilterChange = (filters: any) => {
    const { roomType, priceRange, keyword } = filters;

    const filtered = sampleRooms.filter((room) => {
      const matchesType = roomType === "All" || room.type === roomType;
      const matchesPrice =
        room.price >= priceRange[0] && room.price <= priceRange[1];
      const matchesKeyword = room.name
        .toLowerCase()
        .includes(keyword.toLowerCase());

      return matchesType && matchesPrice && matchesKeyword;
    });

    setFilteredRooms(filtered);
  };

  return (
    <div className="container mx-auto py-10">
      <RoomFilter onFilter={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{room.name}</h2>
              <p className="text-gray-500">{room.type}</p>
              <p className="text-montrose-wine font-semibold">
                ${room.price} / night
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { RoomList };
