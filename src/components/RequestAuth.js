const generateRandomString = (length) => {
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], '');
};

const codeVerifier = generateRandomString(64);

const sha256 = async (plain) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest('SHA-256', data);
};

const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
};

const getCodeChallenge = async (verifier) => {
  const hashed = await sha256(verifier);
  return base64encode(hashed);
};

const requestAuth = async () => {
  const clientId = '9800c59206984ca9bc05bb10e4fdecda';
  const redirectUri = 'http://localhost:5173';
  const scope = 'user-read-private user-read-email';

  const codeChallenge = await getCodeChallenge(codeVerifier);

  const params = {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  };

  const authUrl = `https://accounts.spotify.com/authorize?${new URLSearchParams(params).toString()}`;

  return { authUrl, codeVerifier };
};

export default requestAuth;
