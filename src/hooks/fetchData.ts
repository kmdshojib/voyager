export const fetchData = async (endpoint: string) => {
    const baseURL = process.env.NODE_ENV === 'production'
        ? process.env.production_URL
        : process.env.baseUrl;
    const res = await fetch(`${baseURL}${endpoint}`, { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error('Failed to fetch tours')

    return res.json()
};
