import { memo, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Search = ({ handleSearchValue }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = () => {
    handleSearchValue(searchValue);
  };

  return (
    <>
      <div className='flex h-28 w-full flex-row  justify-center gap-8  pb-16 pt-16'>
        <Input
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          className='w-52'
          placeholder='Search'
          name='search'
        />
        <div>
          <Button
            className='w-20 bg-green-300 text-slate-950'
            variant='outline'
            onClick={handleSubmit}
          >
            Search
          </Button>
        </div>
      </div>
    </>
  );
};

export default memo(Search);
