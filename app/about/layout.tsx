import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { layoutProps } from "../../.next/types/app/about/mission/page";
import { LayoutProps } from "../../.next/types/app/about/equip/page";

interface layoutProps {
	children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
	return (
		<>
			<div className="flex gap-4">
				<Link href="/about/equip">Equip</Link>
				<Link href="/about/vision">Vision</Link>
				<Link href="/about/mission">Mission</Link>
			</div>
			{children}
		</>
	);
};
export default layout;
