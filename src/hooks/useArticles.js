import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL, SECTION_URL } from '../utils/constants';

const useArticles = (section = 'home') => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const fetchArticles = async () => {
            try {
                const url = `${BASE_URL}/${SECTION_URL(section)}.json?api-key=${API_KEY}`;
                const resp = await axios.get(url);
                setArticles(resp.data.results);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, [section]);

    return { articles, loading, error };
};

export default useArticles;