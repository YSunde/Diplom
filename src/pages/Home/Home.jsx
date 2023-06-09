import { useEffect, useState } from "react";
import { Banner } from "../../components/Banner";
import { Products } from "../../components/Products";
import { useLoaderData } from "react-router-dom";
import {
	avds_large,
	avds_small,
	discount,
	home_slider_1,
	product_1,
	product_2,
	product_3,
	product_4,
	product_5,
	product_6,
	product_7,
	product_8,
} from "../../assets";

export const Home = () => {
	const [products, setProducts] = useState([]);
	const data = useLoaderData();

	useEffect(() => {
		setProducts(data.data);
	}, [data]);

	return (
		<div className=''>
			{/* <Banner /> */}
			<Products products={products} />
			<div className='home'>
				<div className='home_slider_container'>
					<div className='owl-carousel owl-theme home_slider'>
						<div className='owl-item home_slider_item'>
							<div
								className='home_slider_background'
								style={{ backgroundImage: `url(${home_slider_1})` }}
							></div>
							<div className='home_slider_content_container'>
								<div className='container'>
									<div className='row'>
										<div className='col'>
											<div
												className='home_slider_content'
												data-animation-in='fadeIn'
												data-animation-out='animate-out fadeOut'
											>
												<div className='home_slider_title'>
													Новый опыт работы с онлайн магазином
												</div>
												<div className='button button_light home_button'>
													<a href='#'>Купить сейчас</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='owl-item home_slider_item'>
							<div
								className='home_slider_background'
								style={{ backgroundImage: `url(${home_slider_1})` }}
							></div>
							<div className='home_slider_content_container'>
								<div className='container'>
									<div className='row'>
										<div className='col'>
											<div
												className='home_slider_content'
												data-animation-in='fadeIn'
												data-animation-out='animate-out fadeOut'
											>
												<div className='home_slider_title'>
													Новый опыт работы с онлайн магазином
												</div>
												<div className='button button_light home_button'>
													<a href='#'>Купить сейчас</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='owl-item home_slider_item'>
							<div
								className='home_slider_background'
								style={{ backgroundImage: `url(${home_slider_1})` }}
							></div>
							<div className='home_slider_content_container'>
								<div className='container'>
									<div className='row'>
										<div className='col'>
											<div
												className='home_slider_content'
												data-animation-in='fadeIn'
												data-animation-out='animate-out fadeOut'
											>
												<div className='home_slider_title'>
													Новый опыт работы с онлайн магазином
												</div>
												<div className='button button_light home_button'>
													<a href='#'>Купить сейчас</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='home_slider_dots_container'>
						<div className='container'>
							<div className='row'>
								<div className='col'>
									<div className='home_slider_dots'>
										<ul id='home_slider_custom_dots' className='home_slider_custom_dots'>
											<li className='home_slider_custom_dot active'>01.</li>
											<li className='home_slider_custom_dot'>02.</li>
											<li className='home_slider_custom_dot'>03.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Ads --> */}

			<div className='avds'>
				<div className='avds_container d-flex flex-lg-row flex-column align-items-start justify-content-between'>
					<div className='avds_small'>
						<div
							className='avds_background'
							style={{ backgroundImage: `url(${avds_small})` }}
						></div>
						<div className='avds_small_inner'>
							<div className='avds_discount_container'>
								<img src={discount} alt='' />
								<div>
									<div className='avds_discount'>
										<div>
											20<span>%</span>
										</div>
										<div>Скидка</div>
									</div>
								</div>
							</div>
							<div className='avds_small_content'>
								<div className='avds_title'>Телефон</div>
								<div className='avds_link'>
									<a href='categories.html'>Показать больше</a>
								</div>
							</div>
						</div>
					</div>
					<div className='avds_large'>
						<div
							className='avds_background'
							style={{ backgroundImage: `url(${avds_large})` }}
						></div>
						<div className='avds_large_container'>
							<div className='avds_large_content'>
								<div className='avds_title'>Камеры</div>
								<div className='avds_link avds_link_large'>
									<a href='categories.html'>Показать больше</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <!-- Products --> */}

			<div className='products'>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<div className='product_grid'>
								{/* <!-- Product --> */}
								<div className='product'>
									<div className='product_image'>
										<img src={product_1} alt='' />
									</div>
									<div className='product_extra product_new'>
										<a href='categories.html'>New</a>
									</div>
									<div className='product_content'>
										<div className='product_title'>
											<a href='product.html'>Смартфон</a>
										</div>
										<div className='product_price'>$670</div>
									</div>
								</div>

								{/* <!-- Product --> */}
								<div className='product'>
									<div className='product_image'>
										<img src={product_2} alt='' />
									</div>
									<div className='product_extra product_sale'>
										<a href='categories.html'>Sale</a>
									</div>
									<div className='product_content'>
										<div className='product_title'>
											<a href='product.html'>Колонка</a>
										</div>
										<div className='product_price'>$670</div>
									</div>
								</div>

								{/* <!-- Product --> */}
								<div className='product'>
									<div className='product_image'>
										<img src={product_3} alt='' />
									</div>
									<div className='product_content'>
										<div className='product_title'>
											<a href='product.html'>Зарядное устройство</a>
										</div>
										<div className='product_price'>$670</div>
									</div>
								</div>

								{/* <!-- Product --> */}
								<div className='product'>
									<div className='product_image'>
										<img src={product_4} alt='' />
									</div>
									<div className='product_content'>
										<div className='product_title'>
											<a href='product.html'>Ноутбук</a>
										</div>
										<div className='product_price'>$670</div>
									</div>
								</div>

								{/* <!-- Product --> */}
								<div className='product'>
									<div className='product_image'>
										<img src={product_5} alt='' />
									</div>
									<div className='product_content'>
										<div className='product_title'>
											<a href='product.html'>Наушники</a>
										</div>
										<div className='product_price'>$670</div>
									</div>
								</div>

								{/* <!-- Product --> */}
								<div className='product'>
									<div className='product_image'>
										<img src={product_6} alt='' />
									</div>
									<div className='product_extra product_hot'>
										<a href='categories.html'>Hot</a>
									</div>
									<div className='product_content'>
										<div className='product_title'>
											<a href='product.html'>Планшет</a>
										</div>
										<div className='product_price'>$670</div>
									</div>
								</div>

								{/* <!-- Product --> */}
								<div className='product'>
									<div className='product_image'>
										<img src={product_7} alt='' />
									</div>
									<div className='product_content'>
										<div className='product_title'>
											<a href='product.html'>Iphone</a>
										</div>
										<div className='product_price'>$670</div>
									</div>
								</div>

								{/* <!-- Product --> */}
								<div className='product'>
									<div className='product_image'>
										<img src={product_8} alt='' />
									</div>
									<div className='product_extra product_sale'>
										<a href='categories.html'>Hot</a>
									</div>
									<div className='product_content'>
										<div className='product_title'>
											<a href='product.html'>Клавиатура</a>
										</div>
										<div className='product_price'>$670</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
