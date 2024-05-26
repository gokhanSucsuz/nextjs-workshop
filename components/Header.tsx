"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "@/public/next.svg";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
	const pathName = usePathname();
	const router = useRouter();
	return (
		<div className="flex justify-between items-center p-5">
			<div>
				<Image
					src={logoImage}
					alt="Picture of the author"
					width={120}
					blurDataURL="data:..."
					placeholder="blur"
				/>
			</div>
			<div className="flex items-center gap-2">
				<Link href="/" className={`${pathName === "/" && "underline"}`}>
					Home
				</Link>
				<Link
					href="/dashboard"
					className={`${pathName === "/dashboard" && "underline"}`}>
					Dashboard
				</Link>
				<Link
					href="/about"
					className={`${pathName === "/about" && "underline"}`}>
					About
				</Link>
				<button
					className="bg-cyan-800 rounded-lg p-2 text-white hover:bg-cyan-700 transition-colors"
					onClick={() => router.push("/auth/login")}>
					Login
				</button>
			</div>
		</div>
	);
};

export default Header;
