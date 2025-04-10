import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				{/* HOME */}
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				{/* BENJA */}
				<a href="/benja" class={url == '/benja' && 'active'}>
					Benja
				</a>
				{/* BENJA - PARAMS NAME */}
				<a href="/benja/params/name/Carlos" class={url == '/benja/params/name/Carlos' && 'active'}>
					Benja - Params Name: Carlos
				</a>
				{/* 404 - NOT FOUND */}
				<a href="/404" class={url == '/404' && 'active'}>
					404
				</a>
			</nav>
		</header>
	);
}
