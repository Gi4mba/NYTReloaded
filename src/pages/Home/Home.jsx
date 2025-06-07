import NewsCard from '/src/components/NewsCard/NewsCard';
import useArticles from '/src/hooks/useArticles';
import './Home.css';

const Home = () => {
    const { articles, loading, error } = useArticles();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading articles: {error.message}</div>;
    if (!articles || articles.length === 0) {
        return <div>No articles available</div>;
    }

    const leftColumnArticles = articles.slice(0,3) || [];
    const rightColumnArticles = articles.slice(3, 7) || [];

    return (
        <div className="nytr-home">
            <div className="nytr-grid">
                <div className="nytr-main-article">
                    {leftColumnArticles.map(article => (
                        <NewsCard key={article.url} article={article} variant="main" />
                    ))}
                </div>
                <div className="nytr-side-articles">
                    {rightColumnArticles.map(article => (
                        <NewsCard key={article.url} article={article} variant="side" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;