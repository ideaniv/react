import React from "react";
import logo from "../assets/img/image_19_1.png";
import userIcon from "../assets/img/Frame.png";

export default function Header() {
	return (
		<header
			style={{
				display: "flex",
				alignItems: "center",
				backgroundColor: "#161B22",
				justifyContent: "space-between",
				padding: "11px 24px 11px 24px",
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
				}}
			>
				<img src={logo} />
				<p
					style={{
						color: "white",
						marginLeft: "10px",
					}}
				>
					OpenSource Suppoter
				</p>
			</div>
			<img src={userIcon} />
		</header>
	);
}