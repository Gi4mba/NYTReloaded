import './NewsCard.css';

const NewsCard = ({ article, variant = 'side' }) => {
  if (!article) return null;
  const { title, abstract, url, multimedia } = article;

  const image = multimedia?.[0]?.url;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="news-card-link">
      <div className={`news-card ${variant}`}>
        {image && (
          <img src={image} alt={title} className="news-card-image" />
        )}
        <h2 className="news-card-title">{title}</h2>
        <p className="news-card-abstract">{abstract}</p>
        <div className="news-card-footer">
          <p className="news-card-read-more">Read more</p>
          <span>→</span>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;