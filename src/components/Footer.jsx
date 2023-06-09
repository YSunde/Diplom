import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
	return (
		<div className='bg-black text-[#949494] py-10 px-7 font-titleFont flex flex-row justify-between'>
			<div className=' flex flex-col gap-7'>
				<div className='flex flex-col gap-7'>
					<p className='text-white text-sm tracking-wide'>© ReactBD.com</p>
					<img src={"/img/payment.png"} className='w-80' alt='' />
				</div>
				<div className='flex flex-row gap-3'>
					<GitHubIcon />
					<YouTubeIcon />
					<FacebookIcon />
					<TwitterIcon />
					<InstagramIcon />
				</div>
			</div>
			<div className=''>
				<h2 className='text-xl text-white 300 mb-3'>Locate Us</h2>
				<p>Всякий текст</p>
				<p>Mobile: 847747474</p>
				<p>Phone: 4444</p>
				<p>Email: мыло</p>
			</div>
			<div>
				<h2 className='text-xl text-white 300 mb-3'>Profile</h2>
				<p>My Account</p>
				<p>Cart</p>
				<p>Order tracking</p>
				<p>help & support</p>
			</div>
		</div>
	);
};
