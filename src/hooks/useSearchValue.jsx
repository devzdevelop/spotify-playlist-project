import { memo, useCallback, useState } from 'react';

const useSearchValue = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = useCallback((search) => {
    console.log('Search Value:', search);
    setSearchValue(search);
  }, []);

  return { searchValue, setSearchValue, handleSearch };
};

export default useSearchValue;
