import { render } from 'preact';
//Router:
import { LocationProvider } from 'preact-iso';
//Components:
import { Header } from './components/Header.jsx';
//Routes:
import { Routes } from './routes';
//Styles:
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Routes />
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
