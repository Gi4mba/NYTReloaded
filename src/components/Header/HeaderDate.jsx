const HeaderDate = () => {
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    return (
        <div className="header-date">{today}</div>
    )
};
export { HeaderDate };