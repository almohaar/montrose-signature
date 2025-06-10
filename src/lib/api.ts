// lib/api.ts
export async function fetcher(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Fetch failed at ${url} → ${res.status} ${res.statusText} : ${text}`);
  }
  return res.json();
}
