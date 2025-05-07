
const API_BASE_URL = 'https://esimdulich.com/api/v1';

interface TokenData {
  token: string;
  expiresAt: number;
}

const getStoredToken = (): TokenData | null => {
  const tokenData = localStorage.getItem('sim_token');
  if (!tokenData) return null;
  
  const parsed = JSON.parse(tokenData);
  if (Date.now() >= parsed.expiresAt) {
    localStorage.removeItem('sim_token');
    return null;
  }
  
  return parsed;
};

const fetchNewToken = async (): Promise<string> => {
  const response = await fetch(`${API_BASE_URL}/one-token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: 'admin@covivu.com',
      client_secret: 'pUuXBqqzPLm/LCC/AmbjAyZexMHuNJQTDAC4brH8QqRAaypqmEZsdUlSzwOL/8r8lnCx1Hh4HwxsZsebO3lZDhCRJTQhO26Ha1f8vHayAd9rEb78ngRQZ8yiZESYA4BH'
    }),
  });

  const data = await response.json();
  
  // Store token with 30-day expiration
  const tokenData: TokenData = {
    token: data.token,
    expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000), // 30 days
  };
  
  localStorage.setItem('sim_token', JSON.stringify(tokenData));
  return data.token;
};

const getToken = async (): Promise<string> => {
  const storedToken = getStoredToken();
  if (storedToken) {
    return storedToken.token;
  }
  return await fetchNewToken();
};

export const getSimPackages = async (country: string) => {
  const token = await getToken();
  
  const response = await fetch(`${API_BASE_URL}/one-get-package-by-slug?slug=${country}`, {
    headers: {
      'authen-token': token,
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch SIM packages');
  }
  
  return await response.json();
};
