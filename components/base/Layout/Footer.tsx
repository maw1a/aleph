import React, { FC } from "react";
import { LogoWithoutName } from "../../../icons";
import Button from "../Button";

const Footer: FC<any> = (props) => {
	const [isLogged, setLogged] = React.useState(false);
	return (
		<footer className='bg-gray-900 fixed bottom-0 w-full'>
			<div className='mx-auto px-10 py-5'>
				<div className='w-100 flex items-center justify-between'>
					<div className='flex align-middle'>
						<LogoWithoutName className='h-7' fill='white' />
						<span className='text-base self-center text-white ml-4'>
							All Rights Reserved. ©️ 2021. Aleph Publications
						</span>
					</div>
					<div className='flex'>
						<Button>
							<span className='text-white font-thin'>Help</span>
						</Button>
						<Button>
							<span className='text-white font-thin'>Writers</span>
						</Button>
						<Button>
							<span className='text-white font-thin'>Careers</span>
						</Button>
						<Button>
							<span className='text-white font-thin'>Privacy</span>
						</Button>
						<Button>
							<span className='text-white font-thin'>Terms</span>
						</Button>
						<Button>
							<span className='text-white font-thin'>About</span>
						</Button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
