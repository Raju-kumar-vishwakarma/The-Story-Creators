import logo from "../assets/logo.png";
import MenuIcon from "../assets/menu_icon.svg";
import Carousel1 from "../assets/Carousel1.jpeg";
import Carousel2 from "../assets/Carousel2.jpeg";
import Carousel3 from "../assets/Carousel3.jpeg";
import Carousel4 from "../assets/Carousel4.jpeg";
import Gallery1 from '../assets/Gallery1.jpeg';
import Gallery2 from '../assets/Gallery2.jpeg';
import Gallery3 from '../assets/Gallery3.jpeg';
import Gallery4 from '../assets/Gallery4.jpeg';
import Gallery5 from '../assets/Gallery5.jpeg';
import Gallery6 from '../assets/Gallery6.jpeg';
import Gallery7 from '../assets/Gallery7.jpeg';
import Gallery8 from '../assets/Gallery8.jpeg';
import Gallery9 from '../assets/Gallery9.jpeg';
import Gallery10  from '../assets/Gallery10.jpeg';
import film1 from '../assets/film1.png';
import film2 from '../assets/film2.png';

export const assets = {
  logo,
  MenuIcon,
  Carousel1,
  Carousel2,
  Carousel3,
  Carousel4,
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  Gallery9,
  Gallery10,

};

export const images = [Carousel1, Carousel2, Carousel3, Carousel4];


export const filmItems = [
	{
		thumb: film1,
		video: "https://www.youtube.com/shorts/s5n2muO4fcQ?feature=share",
		category: "wedding",
	},
	{
		thumb: film2,
		video: "https://www.youtube.com/shorts/0NYBTrGKvW0?feature=share",
		category: "wedding",
	}
];

export const photoItems = [
	{ url: Gallery1, category: "pre-wedding" },
	{ url: Gallery2, category: "engagement" },
	{ url: Gallery7, category: "pre-wedding" },
	{ url: Gallery8, category: "Haldi" },
	// { url: Gallery3, category: "engagement" },
	{ url: Gallery4, category: "pre-wedding" },
	{ url: Gallery5, category: "engagement" },
	{ url: Gallery6, category: "Haldi" },
	{ url: Gallery9, category: "pre-wedding" },
	{ url: Gallery10, category: "engagement" },
];
