import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import TrackList from './TrackList';

const SearchResult = ({ SearchResult }) => {
  const [tracks] = useState([
    {
      songName: 'Falva',
      artist: 'Valiant',
      album: 'Success Lifestyle',
      id: 0,
      uri: 'spotify:track:abc123def456',
    },
    {
      songName: 'Expensive',
      artist: 'Valiant',
      album: 'Success Lifestyle',
      id: 1,
      uri: 'spotify:track:abc123def147',
    },
    {
      songName: 'Real Estate',
      artist: 'Valiant',
      album: 'Success Lifestyle',
      id: 2,
      uri: 'spotify:track:abc123def571',
    },
  ]);

  return (
    <>
      <Card className='h-96 w-96 bg-slate-500 text-slate-50'>
        <CardHeader>
          <CardTitle>Search Results</CardTitle>
          {/* <CardDescription>Card Description</CardDescription> */}
          <Separator />
        </CardHeader>

        <CardContent>
          <TrackList tracks={tracks} />
        </CardContent>
        {/* <CardFooter>
                <p>Card Footer</p>
            </CardFooter> */}
      </Card>
    </>
  );
};

export default SearchResult;
