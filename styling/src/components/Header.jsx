import logo from "../assets/logo.png";

export default function Header() {
	return (
		<header className="flex flex-col items-center mt-8 mb-16">
			<img
				className="w-16"
				src={logo}
				alt="A canvas"
			/>
			<h1 className="text-4xl font-semibold tracking-widest text-center uppercase text-amber-800">ReactArt</h1>
			<p>A community of artists and art-lovers.</p>
		</header>
	);
}
