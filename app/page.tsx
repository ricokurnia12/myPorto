import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from "./components";

export default function Home() {
	return (
		<div className="relative z-0 bg-primary font-sans">
			<div className="bg-hero-pattern   bg-no-repeat xl:bg-center bg-right-bottom bg-cover xl:bg-fixed ">
				{/* <Navbar /> */}
				<Hero />
			</div>

			<About />
			<Experience />
			{/* <Tech /> */}
			<Works />
			{/* <Feedbacks /> */}
			<div className="relative z-0">
				{/* <Contact /> */}
				<StarsCanvas />
			</div>
		</div>
	);
}
