export const API_KEY = import.meta.env.VITE_NYTR_API_KEY;
export const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2';

export const AVAILABLE_SECTIONS = [
    'us',
    'world',
    'business',
    'arts',
    'realestate',
    'opinion',
    'science',
    'technology',
    'food',
    'politics',
    'travel',
];

export const SECTION_URL = (section) => {
    return section || 'home';
};