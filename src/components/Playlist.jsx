import { memo, useState } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

import Tracks from './Tracks';
import { Button } from './ui/button';

const Playlist = () => {
  const [playlistName, setPlaylistName] = useState('');

  const handleSave = () => {
    console.log(
      `'Playlist - ${playlistName}' has been saved successfully to spotify.`,
    );
  };
  return (
    <>
      <Card className='bg-slate-500 text-slate-50'>
        <CardHeader>
          <CardTitle>
            <Input
              onChange={({ target }) => setPlaylistName(target.value)}
              placeholder='Playlist Name'
              className='placeholder'
              value={playlistName}
            />
          </CardTitle>
          <CardDescription className='text-gray-200'>
            Add and save all your favourite tracks to this playlist.
          </CardDescription>
          <Separator />
        </CardHeader>
        <CardContent>
          <Tracks />
        </CardContent>
        <CardFooter className='flex flex-row justify-center'>
          <Button
            variant='outline'
            className='bg-green-300 font-bold uppercase text-gray-900'
            onClick={handleSave}
          >
            Save Playlist
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default memo(Playlist);
