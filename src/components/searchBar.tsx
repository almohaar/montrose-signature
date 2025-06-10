'use client'

import { Input } from './ui/input'
import { Button } from './ui/button'
import { useState } from 'react'

const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    onSearch(query)
  }

  return (
    <div className="flex gap-2 p-4 bg-gray-100 shadow-md rounded-md">
      <Input
        type="text"
        placeholder="Search Apartments..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1"
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  )
}

export default SearchBar
