import './style/home.css';
import { imgMenu, textSlide } from '../assets/data.ts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
	return (
		<>
			<section id="section0">
				<div className="top_img">
					<img src="./mountain.jpg" alt="설산" />
				</div>
				<div className="top_txt">
					<p>
						"Place a snippet of the best testimonial you've <br />
						receuved from your client."
					</p>
				</div>
			</section>
			<section id="section1">
				<div className="img_menu">
					<ul>
						{imgMenu.map((el) => {
							return (
								<li key={el.id}>
									<a href="#">
										<img src={el.src} alt="" />
										<div className="text_wrap">
											<p>{el.name}</p>
											<div className="go_project">View Project </div>
										</div>
									</a>
								</li>
							);
						})}
					</ul>
				</div>
			</section>
			<section id="section2">
				<Swiper
					modules={[Pagination]}
					spaceBetween={50}
					slidesPerView={1}
					pagination={{ clickable: true }}
					centeredSlides={true}>
					{textSlide.map((el) => {
						return (
							<SwiperSlide key={el.id}>
								<h1>{el.title}</h1>
								<div>{el.text}</div>
								<div>{el.subtext}</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</section>
		</>
	);
}
