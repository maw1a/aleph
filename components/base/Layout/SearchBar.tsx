import React, { FC } from "react";
import Button from "../Button";
import Search from "../../../icons/Search";

interface SearchBarProps {
	searchTerm?: string;
}

const SearchBar: FC<SearchBarProps> = (props) => {
	const [open, setOpen] = React.useState<boolean>(false);
	const inputRef = React.useRef<HTMLInputElement>(null);

	React.useEffect(() => {
		if (open) {
			inputRef.current?.focus();
		} else {
			inputRef.current?.blur();
		}
	}, [open]);

	return (
		<div className='inline-flex rounded-full justify-end'>
			<Button
				icon={true}
				className='focus:outline-none'
				onClick={() => setOpen(!open)}>
				<Search className='h-5' />
			</Button>
			<input
				ref={inputRef}
				type='text'
				placeholder='Search Aleph'
				onBlur={() => setOpen(false)}
				className={
					"outline-none font-sans text-lg rounded-r-full transition-all duration-500 " +
					(open ? "w-full" : "w-0")
				}
			/>
		</div>
	);
};

export default SearchBar;
