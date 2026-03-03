const BASE_URL = import.meta.env.VITE_API_BASE_URL

async function request<T>(input: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_URL}${input}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...init,
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => '')
    throw new Error(
      errorText || `Request failed with status ${response.status}`,
    )
  }

  return (await response.json()) as T
}

export const apiClient = {
  get: <T>(path: string) => request<T>(path),
  put: <T>(path: string, body: unknown) =>
    request<T>(path, {
      method: 'PUT',
      body: JSON.stringify(body),
    }),
}

