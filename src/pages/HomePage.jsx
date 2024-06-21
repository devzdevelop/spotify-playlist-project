import { useCallback, useState } from 'react';

import Playlist from '@/components/Playlist';
import SearchBar from '@/components/SearchBar';
import SearchResult from '@/components/SearchResult';
import useSearchValue from '@/hooks/useSearchValue';

const HomePage = () => {
  const { searchValue, handleSearch } = useSearchValue();

  const handleSearchValue = useCallback((search) => {
    handleSearch(search);
  }, []);

  return (
    <>
      <div className='h-screen w-full bg-slate-950 text-slate-50'>
        <SearchBar handleSearchValue={handleSearchValue} />
        <div className='flex flex-row flex-wrap justify-center gap-20 pt-10'>
          <SearchResult searchValue={searchValue} />
          <Playlist />
        </div>
      </div>
    </>
  );
};

export default HomePage;
