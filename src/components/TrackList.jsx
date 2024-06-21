import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import addButtonImage from '@/assets/add-btn2.svg';
import { addTrackData } from '@/state/trackData/trackDataSlice';

const TrackList = ({ tracks }) => {
  const trackData = useSelector((state) => state.trackData);
  const dispatch = useDispatch();

  const addButtonHandler = (index) => {
    tracks.forEach((track) => {
      if (track.id === index) {
        dispatch(
          addTrackData({
            songName: track.songName,
            artist: track.artist,
            album: track.album,
            id: track.id,
            uri: track.uri,
          }),
        );
      }
    });
  };

  return (
    <>
      {tracks.map((track, index) => (
        <div className='flex flex-row items-center gap-4' key={index}>
          <div className='flex h-11 flex-row items-center gap-2 font-normal'>
            <p id='songName'>
              {index + 1}. {track.songName}
            </p>
            <p id='dash'>-</p>
            <p id='artist'>{track.artist}</p>
            <p id='album'>({track.album})</p>
          </div>

          <div>
            <img
              onClick={() => addButtonHandler(index)}
              src={addButtonImage}
              alt='Add Button'
              className='h-5 w-5 cursor-pointer'
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default TrackList;
