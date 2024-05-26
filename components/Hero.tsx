import Image from "next/image";
import React from "react";

interface HeroProps {
	title: string;
	description: string;
	img: string;
	img2: string;
}

const Hero = ({ title, description, img, img2 }: HeroProps) => {
	return (
		<div>
			<div className="flex relative h-80">
				<div className="absolute flex">
					<div className="p-5 bg-sky-700 w-3/4 text-cyan-500 flex flex-col gap-3 ">
						<h2>{title}</h2>
						<p>{description}</p>
					</div>
					<div className="w-2/4 flex justify-center">
						<Image
							src={img2}
							alt="nextImage"
							width={550}
							height={250}
							className="w-200 h-100 rounded-lg shadow-xl"
						/>
					</div>
				</div>

				<div className="h-3/6">
					<Image
						src={img}
						alt="nextImage"
						width={550}
						height={550}
						className="w-full h-250"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
