const animeProjects = [
  { id: '14Iqj750kapB0wy_UjrZZXDerWJRS_BEr', title: 'Anime edit 1', poster: 'anime-1-thumb.jpg' },
  { id: '19E7kktYbHrtgEas5k1QbPqH3hMsAAqBn', title: 'Anime edit 2', poster: 'anime-2-thumb.jpg' },
  { id: '1dN9B88eKhh3IoWUNifPBYzzyh7tSmgK5', title: 'Anime edit 3', poster: 'anime-3-thumb.jpg' },
  { id: '1jxel8Q2XGnKoAtFuLCYWq50HtQdetD7j', title: 'Anime edit 5', poster: 'anime-5-thumb.jpg' },
  { id: '1WSNk4OytfP88MacdPtdxjYq-oad3IS83', title: 'Final cut', playerTitle: 'Final anime edit', poster: 'anime-final-thumb.jpg' },
];

export const featuredEdit = animeProjects[1];

export const projectSections = [
  {
    id: 'anime-work',
    title: 'Anime edits',
    grid: 'anime',
    description: 'Five finished edits from my collection. Watch them here or open the original files in Google Drive.',
    projects: animeProjects,
  },
  {
    id: 'youtube-work',
    title: 'YouTube & long form',
    grid: 'landscape',
    projects: [
      { id: '7QkkaD6M1mI', provider: 'youtube', title: 'Every Minute Wiser', category: 'YouTube edit', action: 'Watch edit' },
      { id: 'AmIM8p1WswM', provider: 'youtube', title: 'Digital Marketing Heros', category: 'Podcast edit', action: 'Watch podcast' },
    ],
  },
  {
    id: 'short-work',
    title: 'Shorts & reels',
    grid: 'short',
    projects: [
      { id: '1Xpal15n4Qz3H7-zdk9vuokJKytrZ2fXi', title: 'Short-form edit', action: 'Watch short', shareQuery: '?usp=drive_link' },
    ],
  },
  {
    id: 'brand-work',
    title: 'Brand & promo',
    grid: 'landscape',
    projects: [
      { id: 'KaPjkj5WAaI', provider: 'youtube', title: 'Product teaser', action: 'Watch teaser' },
      { id: '2F8_QP-0mP0', provider: 'youtube', title: 'Blender portfolio intro', category: '3D intro', action: 'Watch intro' },
    ],
  },
];

export function videoSource({ id, provider, poster, shareQuery = '' }) {
  if (provider === 'youtube') {
    return {
      watchUrl: `https://youtu.be/${id}`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${id}`,
      posterUrl: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
      label: 'Open on YouTube',
    };
  }

  const driveUrl = `https://drive.google.com/file/d/${id}`;
  return {
    watchUrl: `${driveUrl}/view${shareQuery}`,
    embedUrl: `${driveUrl}/preview`,
    posterUrl: poster ? `/assets/${poster}` : `https://drive.google.com/thumbnail?id=${id}&sz=w480`,
    label: 'Open in Drive',
  };
}
