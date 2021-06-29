import React, { FC } from "react";
import SearchBar from "./SearchBar";
import { Logo, Bookmarks, Notification } from "../../../icons";
import Button from "../Button";

const Header: FC<any> = (props) => {
	return (
		<nav className='shadow-md'>
			<div className='container mx-auto px-2 py-3'>
				<div className='w-100 flex items-center justify-between'>
					<div className='inline-flex'>
						<Logo className='h-12' />
					</div>
					<div className='flex'>
						<SearchBar />
						<Button icon={true}>
							<Bookmarks className='h-5' fill='black' />
						</Button>
						<Button icon={true}>
							<Notification className='h-5' fill='black' />
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
