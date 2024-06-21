import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

import requestAuth from './RequestAuth';

const Authorization = () => {
  const [authUrl, setAuthUrl] = useState(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    console.log('Enter function');
    if (click) {
      const initAuth = async () => {
        const { authUrl, codeVerifier } = await requestAuth();
        window.localStorage.setItem('code_verifier', codeVerifier);
        setAuthUrl(authUrl);
      };

      initAuth();

      if (authUrl) {
        // Redirect the user to the Spotify authorization URL
        window.location.href = authUrl;
      }
      setClick(false);
    } else {
      setClick(true);
    }
  };

  console.log('Button State: ', click);

  // useEffect(() => {
  //     const initAuth = async () => {
  //         const { authUrl, codeVerifier } = await requestAuth();
  //         window.localStorage.setItem('code_verifier', codeVerifier);
  //         setAuthUrl(authUrl);
  //     };

  //     initAuth();
  // }, []);

  // useEffect(() => {
  //     if (authUrl) {
  //         // Redirect the user to the Spotify authorization URL
  //         window.location.href = authUrl;
  //     }
  // }, [authUrl]);

  // const urlParams = new URLSearchParams(window.location.search);
  // let code = urlParams.get('code');

  return (
    <>
      <h1>Spotify Authorization</h1>
      <p className='py-2'>
        Use the button below to connect your spotify account to Jamming
        Playlist.
      </p>
      <div className='flex justify-center underline'>
        <Button variant='destructive' onClick={handleClick}>
          Connect Spotify Account
        </Button>
      </div>
      {/* {click && <requestAuth />} */}
    </>
  );
};

export default Authorization;
