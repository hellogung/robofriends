import React from 'react'

const Search = ({searchChange}) => {
  return (
    <div>
        <input type="search" placeholder='Find Your Bot...' className='mt-8 px-8 py-5 outline-none rounded-xl text-xl font-semibold' onChange={searchChange} />
    </div>
  )
}

export default Search