import Album1 from '../images/Albums/Album1.jpg';
import Album2 from '../images/Albums/Album2.jpg';
import Album3 from '../images/Albums/Album3.jpg';
import Album4 from '../images/Albums/Album4.jpg';
import Album5 from '../images/Albums/Album5.jpg';
import Album6 from '../images/Albums/Album6.jpg';
import Track1 from '../images/Section4/Fon1.jpg';
import Track2 from '../images/Section4/Fon2.jpg';
import Track3 from '../images/Section4/Fon3.jpg';
import Artist1 from '../images/Section2/Artist1.jpg';
import Artist2 from '../images/Section2/Artist2.jpg';
import Artist3 from '../images/Section2/Artist3.jpg';
import Artist4 from '../images/Section2/Artist4.jpg';
import Artist5 from '../images/Section2/Artist5.jpg';
import Artist6 from '../images/Section2/Artist6.jpg';

interface Artist {
  name: string;
  albumsReleased: number;
  currentPosition: number;
  changeInPosition: number;
  image: string;
}

interface Album {
  title: string;
  author: string;
  image: string;
}

interface Song {
  title: string;
  artist: string;
  image: string;
  position: number; 
}

export const popularSongs: Song[] = [
  {
    title: 'Echoes of Tomorrow',
    artist: 'Liam Rivers',
    image: Track1,
    position: 1,
  },
  {
    title: 'Midnight Dreams',
    artist: 'Ella Hart',
    image: Track2,
    position: 2, 
  },
  {
    title: 'Whispers in the Wind',
    artist: 'Alex Storm',
    image: Track3,
    position: 3, 
  },
];

export const trendingArtists: Artist[] = [
  {
    name: 'Liam Rivers',
    albumsReleased: 4,
    currentPosition: 1,
    changeInPosition: 3,
    image: Artist1,
  },
  {
    name: 'Ella Hart',
    albumsReleased: 6,
    currentPosition: 2,
    changeInPosition: -1,
    image: Artist2,
  },
  {
    name: 'Alex Storm',
    albumsReleased: 5,
    currentPosition: 3,
    changeInPosition: 0,
    image: Artist3,
  },
  {
    name: 'Sophie Lane',
    albumsReleased: 7,
    currentPosition: 4,
    changeInPosition: 2,
    image: Artist4,
  },
  {
    name: 'Jasper Quinn',
    albumsReleased: 3,
    currentPosition: 5,
    changeInPosition: -2,
    image: Artist5,
  },
  {
    name: 'Nina Blaze',
    albumsReleased: 8,
    currentPosition: 6,
    changeInPosition: 1,
    image: Artist6,
  },
];

export const albumsOfTheWeek: Album[] = [
  {
    title: 'Horizon Unveiled',
    author: 'Liam Rivers',
    image: Album1,
  },
  {
    title: 'Starlit Echoes',
    author: 'Ella Hart',
    image: Album2,
  },
  {
    title: 'Dusk & Dawn',
    author: 'Alex Storm',
    image: Album3,
  },
  {
    title: 'Celestial Journey',
    author: 'Sophie Lane',
    image: Album4,
  },
  {
    title: 'Midnight Reverie',
    author: 'Jasper Quinn',
    image: Album5,
  },
  {
    title: 'Eternal Flames',
    author: 'Nina Blaze',
    image: Album6,
  },
];
