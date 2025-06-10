'use client'

import { useState } from 'react'
import { Button } from './ui/button'
// import { Slider } from './ui/slider'
// import { Checkbox } from './ui/checkbox'

const Filters = ({
  onApply,
}: {
  onApply: (filters: any) => void
}) => {
  const [priceRange, setPriceRange] = useState([50, 500])
  const [wifi, setWifi] = useState(false)
  const [pool, setPool] = useState(false)
  const [parking, setParking] = useState(false)

  const applyFilters = () => {
    onApply({ priceRange, wifi, pool, parking })
  }

  return (
    <div className="p-4 bg-gray-100 shadow-md rounded-md space-y-4">
      {/* Price Range */}
      {/* <div>
        <h3 className="font-semibold">Price Range</h3>
        <Slider
          defaultValue={priceRange}
          min={0}
          max={1000}
          step={10}
          onValueChange={(value) => setPriceRange(value)}
        />
        <p className="text-sm text-gray-600">
          ${priceRange[0]} - ${priceRange[1]}
        </p>
      </div>


      <div>
        <h3 className="font-semibold">Amenities</h3>
        <div className="flex gap-2">
          <label className="flex items-center gap-2">
            <Checkbox
              checked={wifi}
              onCheckedChange={() => setWifi(!wifi)}
            />
            WiFi
          </label>
          <label className="flex items-center gap-2">
            <Checkbox
              checked={pool}
              onCheckedChange={() => setPool(!pool)}
            />
            Pool
          </label>
          <label className="flex items-center gap-2">
            <Checkbox
              checked={parking}
              onCheckedChange={() => setParking(!parking)}
            />
            Parking
          </label>
        </div>
      </div> */}

      {/* Apply Button */}
      <Button onClick={applyFilters}>Apply Filters</Button>
    </div>
  )
}

export  {Filters}
