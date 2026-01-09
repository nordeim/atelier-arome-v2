const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

class ApiError extends Error {
  status: number;
  data: any;

  constructor(message: string, status: number, data: any) {
    super(message);
    this.status = status;
    this.data = data;
    this.name = 'ApiError';
  }
}

export async function apiClient<T>(
  endpoint: string,
  { method = 'GET', body, headers = {}, ...customConfig }: RequestInit = {}
): Promise<T> {
  const config = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    ...customConfig,
  };

  // Clean up endpoint to avoid double slashes
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  
  const response = await fetch(`${API_URL}${cleanEndpoint}`, config);
  const data = await response.json();

  if (response.ok) {
    return data;
  }

  throw new ApiError(
    data.message || 'An error occurred while fetching data.',
    response.status,
    data
  );
}
