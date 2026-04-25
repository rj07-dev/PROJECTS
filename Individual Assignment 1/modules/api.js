 export async function getTimeData() {
  const url = 'https://timeapi.io/api/Time/current/zone?timeZone=America/Toronto';

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Could not load time data');
  }

  const data = await response.json();
  return data;
}