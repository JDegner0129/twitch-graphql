import fetch from 'node-fetch';

const API_URL = 'https://api.twitch.tv/kraken';

async function fetchJson(url) {
  const res = await fetch(url);

  return await res.json();
}

export async function getUser(name) {
  return await fetchJson(`${API_URL}/users/${name}`);
}

export async function getChannel(name) {
  return await fetchJson(`${API_URL}/channels/${name}`);
}

export async function getStream(name) {
  return (await fetchJson(`${API_URL}/streams/${name}`)).stream;
}
