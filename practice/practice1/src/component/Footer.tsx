import './style/Footer.css';
import { useState } from 'react';

export default function Footer() {
	const [search, setSearch] = useState('');

	return (
		<>
			<footer>
				<section id="ft_left">
					<div className="ft_logo">logo</div>
					<div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
					<div>Lorem ipsum</div>
				</section>
				<section id="ft_center">
					<div>NEWSLETTER</div>
					<div>Lorem, ipsum dolor sit amet</div>
					<div>
						<input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
					</div>
				</section>
				<section id="ft_right">
					<div>QUICK LINKS</div>
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Blog</a>
						</li>
						<li>
							<a href="#">Product</a>
						</li>
					</ul>
				</section>
			</footer>
		</>
	);
}
