import './style/Nav.css';

export default function Nav() {
	return (
		<nav>
			<div className="logo">Muscat</div>
			<ul className="nav_ul">
				<li>Home</li>
				<li>Blog</li>
				<li>Product</li>
				<li>Movement</li>
			</ul>
			<ul className="nav_sns">
				<li className="facebook">
					<img src="./facebook.png" alt="페이스북" />
				</li>
				<li className="kakao">
					<img src="./kakao.png" alt="카카오톡" />
				</li>
				<li className="insta">
					<img src="./insta.png" alt="인스타그램" />
				</li>
			</ul>
		</nav>
	);
}
