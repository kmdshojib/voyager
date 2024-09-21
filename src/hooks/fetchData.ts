export const fetchData = async (endpoint: string) => {
    try {
        const baseURL = process.env.NEXT_PUBLIC_baseUrl;
        const res = await fetch(`${baseURL}${endpoint}`, { next: { revalidate: 3600 } });

        if (!res.ok) {
            const errorDetails = await res.text();
            throw new Error(`Failed to fetch: ${errorDetails}`);
        }
        console.log(res)
        return res.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};
