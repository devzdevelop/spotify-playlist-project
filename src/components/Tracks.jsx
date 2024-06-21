import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import removeButtonImage from '@/assets/remove-btn.svg';
import { setTrackData } from '@/state/trackData/trackDataSlice';

const Tracks = () => {
  const trackData = useSelector((state) => state.trackData);
  const dispatch = useDispatch();
  const [tracks, setTracks] = useState([]);
  const [uriList, setUriList] = useState([]);

  useEffect(() => {
    setUriList(tracks.map((track) => track.uri));
  }, [trackData]);

  const removeTrackHandler = (index) => {
    // Remove the track at the specified index
    const updatedTracks = [...trackData];
    updatedTracks.splice(index, 1);
    dispatch(setTrackData(updatedTracks));
  };

  return (
    <div className='flex flex-row items-center gap-5'>
      <div>
        {trackData.map((track, index) => (
          <div className='flex flex-row items-center gap-4' key={index}>
            <div className='flex h-11 flex-row items-center gap-2 font-normal'>
              <p id='songName'>{track.songName}</p>
              <p id='dash'>-</p>
              <p id='artist'>{track.artist}</p>
              <p id='album'>{track.album}</p>
            </div>
            <div>
              <img
                onClick={() => removeTrackHandler(index)}
                src={removeButtonImage}
                key={index}
                className='h-5 w-5 cursor-pointer'
                alt='Remove Button'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
