import React, { FC } from "react";
import SearchBar from "./SearchBar";
import { Logo, Bookmarks, Notification, User } from "../../../icons";
import Button from "../Button";

const Header: FC<any> = (props) => {
	const [isLogged, setLogged] = React.useState(false);
	return (
		<nav className='shadow-md'>
			<div className='container mx-auto px-2 py-3'>
				<div className='w-100 flex items-center justify-between'>
					<div className='inline-flex'>
						<Logo className='h-12' />
					</div>
					<div className='flex'>
						<SearchBar />
						{isLogged ? (
							<div className='flex'>
								<Button icon={true}>
									<Bookmarks className='h-5' fill='black' />
								</Button>
								<Button icon={true}>
									<Notification className='h-5' fill='black' />
								</Button>
								<Button icon={true} className='border-2'>
									AM
								</Button>
							</div>
						) : (
							<div className='flex'>
								<Button className='focus:outline-none'>Login</Button>
								<Button className='bg-black text-white rounded-full px-5'>
									Sign up
								</Button>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
