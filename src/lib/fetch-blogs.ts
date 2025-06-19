// Fetch blogs for a given username from dev.to API
export async function fetchBlogs(username: string) {
  const res = await fetch(`https://dev.to/api/articles?username=${username}`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}
