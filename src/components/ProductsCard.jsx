import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazaarSlice";
import { ToastContainer, toast } from "react-toastify";

export const ProductsCard = ({ product }) => {
	const dispatch = useDispatch();
	console.log(product);
	const { ID, Title, oldPrice, price, image, category, isNew, description } = product;
	const navigate = useNavigate();

	const _id = ID;

	const idString = (Title) => {
		const newIdString = String(Title).toLowerCase().split(" ").join("");
		return newIdString;
	};
	const rootId = idString(_id);
	// console.log(rootId)

	const handleDetails = () => {
		navigate(`/product/${rootId}`, {
			state: {
				item: product,
			},
		});
	};

	return (
		<div className='group relative'>
			<div className='w-full h-96 cursor-pointer overflow-hidden'>
				<img
					onClick={handleDetails}
					className=' h-full w-full object-cover group-hover:scale-110 duration-500'
					src={image}
					alt=''
				/>
			</div>
			<div className='w-full border-[1px] px-2 py-4'>
				<div>
					<h2 className='font-arial text-xl font-bold '>{Title}</h2>
				</div>
				<div className='flex justify-between items-center'>
					<p>{category}</p>
					<div className='flex gap-2 justify-end'>
						<p className='line-through text-gray-500'>${price}</p>
						<p className='font-semibold'>${oldPrice}</p>
					</div>
				</div>
				<div className='flex justify-between mt-2'>
					<button
						onClick={() =>
							dispatch(
								addToCart({
									_id: product._id,
									title: product.Title,
									image: product.image,
									price: product.price,
									quantity: 1,
									description: product.description,
								}),
							) && toast.success(`${product.Title} is added`)
						}
						className='bg-light-gray text-blue-600 hover:text-blue-400'
					>
						В корзину
					</button>
				</div>
				<div className='top-2 right-2 absolute'>
					{isNew && <p className='bg-black  text-white font-semibold px-6 py-1'>Sale</p>}
				</div>
			</div>
			<ToastContainer
				position='top-left'
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</div>
	);
};
