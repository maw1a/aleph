import React, { FC } from "react";
import TextSubtext from "../../base/TextSubtext";
import {
	Bookmark,
	OptionEllipse,
	ChevronBack,
	ChevronForward,
} from "../../../icons";

const CarouselCard: FC<any> = () => {
	return (
		<div className='grid grid-cols-12 py-2'>
			<div className='col-span-12 pb-3 flex justify-between items-center'>
				<span className='heading text-lg'>Top Stories</span>
				<div className='flex'>
					<span className='pagination pr-4'>1 of 5</span>
					<div className='flex justify-around'>
						<ChevronBack className='h-5' />
						<ChevronForward className='h-5' />
					</div>
				</div>
			</div>
			<div className='sm:col-span-7 col-span-12'>
				<img
					src='https://images.unsplash.com/photo-1527780703622-0c74cb1c56b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
					className='md:pr-5 w-full bg-cover mx-auto'
				/>
			</div>
			<div className='sm:col-span-5 col-span-12 flex flex-col justify-center'>
				<div className='category-date-time pb-3'>
					<span className='uppercase text-sm font-bold'>Technology</span>
					&nbsp;·&nbsp;
					<span className='text-sm text-gray-500 font-thin'>July 24</span>
					&nbsp;·&nbsp;
					<span className='text-sm text-gray-500 font-thin'>5 min read</span>
				</div>
				<div className='title pb-3'>
					<span
						className='font-medium text-2xl leading-8
          '>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry?
					</span>
				</div>
				<div className='desc pb-3'>
					<span className='text-gray-500 font-thin text-xs leading-tight'>
						It is a long established fact that a reader will be distracted by
						the readable content of a page when looking at its layout. The point
						of using Lorem Ipsum when looking at its layout. The point of using
						Lorem Ipsum
					</span>
				</div>
				<div className='author-bookmark-opt grid grid-cols-12 justify-between'>
					<div className='img-text-subtext col-span-10 flex'>
						<img
							src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg'
							alt='user-image'
							className='rounded-full h-9 mr-1'
						/>
						<TextSubtext
							text='Ahmed Mawia'
							subtext='July 24, 2021'
							textClassName='font-thin text-sm text-gray-800'
							subtextClassName='font-thin text-xs text-gray-500'
						/>
					</div>
					<div className='flex icons col-span-2 justify-around'>
						<Bookmark fill='black' className='h-5 self-center' />
						<OptionEllipse fill='black' className='h-5 self-center' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CarouselCard;
