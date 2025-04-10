//Assets:
import preactLogo from '../assets/preact.svg';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

export const HREF_PREACT = 'https://preactjs.com';
export const HREF_REACT = 'https://reactjs.org';
export const HREF_VITE = 'https://vitejs.dev';

export const SIZE_CARDS_IMG = { WIDTH: '160', HEIGHT: '160' };

export const LOGOS_OBJECT = {
	PREACT: {
		logo: preactLogo,
		alt: 'Preact logo',
		height: SIZE_CARDS_IMG.HEIGHT,
		width: SIZE_CARDS_IMG.WIDTH,
	},
	REACT: {
		logo: reactLogo,
		alt: 'React logo',
		height: SIZE_CARDS_IMG.HEIGHT,
		width: SIZE_CARDS_IMG.WIDTH,
	},
	VITE: {
		logo: viteLogo,
		alt: 'Vite logo',
		height: SIZE_CARDS_IMG.HEIGHT,
		width: SIZE_CARDS_IMG.WIDTH,
	},
};

export const FAKE_DATA_CARDS = [
    {
        title: 'Learn Preact',
        description: 'If you\'re new to Preact, try the interactive tutorial to learn important concepts',
    },
    {
        title: 'Differences to React',
        description: 'If you\'re coming from React, you may want to check out our docs to see where Preact differs'
    },
    {
        title: 'Learn Vite',
        description: 'To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation'
    },
]