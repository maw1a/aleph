import React, { FC } from "react";
import { IconProps } from "../types";

const Logo: FC<IconProps> = ({ className, fill = "black" }) => {
	return (
		<svg
			className={className}
			viewBox='0 0 224 93'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M54.8823 72.216V70.416L55.5303 70.344C57.2103 70.104 58.5783 69.768 59.6343 69.336C60.7383 68.904 61.6743 68.208 62.4423 67.248C63.2583 66.24 64.0263 64.872 64.7463 63.144L82.1703 20.88H84.6183L101.61 63.144C102.57 65.496 103.602 67.224 104.706 68.328C105.81 69.432 107.322 70.08 109.242 70.272L110.682 70.416V72.216L101.754 72L90.2343 72.216V70.416L91.6743 70.272C93.3543 70.08 94.5543 69.72 95.2743 69.192C95.9943 68.664 96.3543 67.92 96.3543 66.96C96.3543 66 96.0183 64.704 95.3463 63.072L91.6023 53.712H71.2983L67.4103 63.072C67.0743 63.936 66.7863 64.728 66.5463 65.448C66.3063 66.12 66.1863 66.72 66.1863 67.248C66.1863 68.16 66.5703 68.856 67.3383 69.336C68.1543 69.816 69.4743 70.128 71.2983 70.272L72.7383 70.416V72.216L63.5943 72L54.8823 72.216ZM72.2343 51.408H90.7383L81.6663 28.584L72.2343 51.408ZM104.931 72.216V70.56L106.083 70.416C107.475 70.224 108.531 70.008 109.251 69.768C110.019 69.48 110.547 68.88 110.835 67.968C111.123 67.008 111.267 65.448 111.267 63.288V28.152C111.267 25.656 110.739 24.072 109.683 23.4C108.675 22.68 107.259 22.32 105.435 22.32H104.931V20.664C106.899 20.664 108.795 20.616 110.619 20.52C112.443 20.376 114.339 20.136 116.307 19.8V63.288C116.307 65.448 116.451 67.008 116.739 67.968C117.027 68.88 117.531 69.48 118.251 69.768C119.019 70.008 120.099 70.224 121.491 70.416L122.643 70.56V72.216L113.787 72L104.931 72.216ZM136.997 72.792C133.829 72.792 131.069 72.12 128.717 70.776C126.365 69.384 124.517 67.488 123.173 65.088C121.877 62.64 121.229 59.856 121.229 56.736C121.229 53.376 121.949 50.4 123.389 47.808C124.829 45.168 126.749 43.104 129.149 41.616C131.597 40.08 134.285 39.312 137.213 39.312C140.909 39.312 143.789 40.488 145.853 42.84C147.965 45.192 149.021 48.288 149.021 52.128C149.021 52.704 148.997 53.184 148.949 53.568C148.901 53.952 148.853 54.216 148.805 54.36H127.061C127.013 55.032 126.989 55.704 126.989 56.376C126.989 58.92 127.397 61.296 128.213 63.504C129.029 65.664 130.253 67.392 131.885 68.688C133.565 69.984 135.605 70.632 138.005 70.632C140.261 70.632 142.253 70.008 143.981 68.76C145.757 67.464 147.125 65.568 148.085 63.072L149.813 63.72C147.797 69.768 143.525 72.792 136.997 72.792ZM137.213 41.112C134.237 41.112 131.909 42.168 130.229 44.28C128.597 46.392 127.589 49.2 127.205 52.704H136.349C138.509 52.704 140.141 52.464 141.245 51.984C142.397 51.456 143.165 50.832 143.549 50.112C143.981 49.344 144.197 48.6 144.197 47.88C144.197 45.768 143.477 44.112 142.037 42.912C140.597 41.712 138.989 41.112 137.213 41.112ZM147.838 92.376V90.72L148.99 90.576C150.382 90.384 151.438 90.144 152.158 89.856C152.926 89.616 153.454 89.016 153.742 88.056C154.03 87.144 154.174 85.608 154.174 83.448V47.88C154.174 46.152 153.91 44.904 153.382 44.136C152.902 43.32 152.182 42.816 151.222 42.624C150.262 42.384 149.134 42.264 147.838 42.264V40.608C149.806 40.608 151.702 40.512 153.526 40.32C155.35 40.128 157.246 39.864 159.214 39.528L158.71 44.424C160.054 42.888 161.59 41.664 163.318 40.752C165.094 39.792 167.062 39.312 169.222 39.312C172.006 39.312 174.478 40.056 176.638 41.544C178.846 43.032 180.598 45.048 181.894 47.592C183.19 50.136 183.838 52.992 183.838 56.16C183.838 59.232 183.19 62.04 181.894 64.584C180.598 67.08 178.822 69.072 176.566 70.56C174.358 72.048 171.814 72.792 168.934 72.792C166.918 72.792 165.07 72.384 163.39 71.568C161.71 70.704 160.318 69.744 159.214 68.688V83.448C159.214 85.608 159.358 87.144 159.646 88.056C159.934 89.016 160.438 89.616 161.158 89.856C161.926 90.144 163.006 90.384 164.398 90.576L165.55 90.72V92.376L156.694 92.16L147.838 92.376ZM168.358 41.472C166.39 41.472 164.638 41.952 163.102 42.912C161.614 43.824 160.318 44.952 159.214 46.296V65.736C160.03 66.984 161.254 68.112 162.886 69.12C164.518 70.128 166.318 70.632 168.286 70.632C170.494 70.632 172.318 70.008 173.758 68.76C175.198 67.464 176.278 65.736 176.998 63.576C177.718 61.368 178.078 58.896 178.078 56.16C178.078 53.376 177.718 50.88 176.998 48.672C176.278 46.464 175.198 44.712 173.758 43.416C172.366 42.12 170.566 41.472 168.358 41.472ZM182.432 72.216V70.56L183.584 70.416C184.976 70.224 186.032 70.008 186.752 69.768C187.52 69.48 188.048 68.88 188.336 67.968C188.624 67.008 188.768 65.448 188.768 63.288V28.152C188.768 25.656 188.24 24.072 187.184 23.4C186.176 22.68 184.76 22.32 182.936 22.32H182.432V20.664C184.4 20.664 186.296 20.616 188.12 20.52C189.944 20.376 191.84 20.136 193.808 19.8V45.576C194.912 43.944 196.472 42.504 198.488 41.256C200.504 39.96 202.856 39.312 205.544 39.312C208.808 39.312 211.376 40.152 213.248 41.832C215.168 43.464 216.128 45.816 216.128 48.888V63.288C216.128 65.448 216.272 67.008 216.56 67.968C216.848 68.88 217.352 69.48 218.072 69.768C218.84 70.008 219.92 70.224 221.312 70.416L222.464 70.56V72.216L213.608 72L204.752 72.216V70.56L205.904 70.416C207.296 70.224 208.352 70.008 209.072 69.768C209.84 69.48 210.368 68.88 210.656 67.968C210.944 67.008 211.088 65.448 211.088 63.288V48.888C211.088 46.488 210.464 44.664 209.216 43.416C207.968 42.12 206.216 41.472 203.96 41.472C202.232 41.472 200.672 41.88 199.28 42.696C197.888 43.464 196.736 44.424 195.824 45.576C194.912 46.728 194.24 47.832 193.808 48.888V63.288C193.808 65.448 193.952 67.008 194.24 67.968C194.528 68.88 195.032 69.48 195.752 69.768C196.52 70.008 197.6 70.224 198.992 70.416L200.144 70.56V72.216L191.288 72L182.432 72.216Z'
				fill={fill}
			/>
			<path
				d='M4.64243 27.8308C36.6316 35.5588 18.0871 61.9247 48.2219 71.0164'
				stroke={fill}
				strokeWidth='6'
			/>
			<path
				d='M37.0889 28.8022C48.4381 33.798 48.7774 42.0044 48.1128 45.2955'
				stroke={fill}
				strokeWidth='6'
				strokeLinecap='square'
			/>
			<path
				d='M2.239 53.4373C12.5086 53.4373 5.09084 65.2931 22.3909 71.2959'
				stroke={fill}
				strokeWidth='6'
			/>
		</svg>
	);
};

const LogoWithoutName: FC<IconProps> = ({ className, fill = "black" }) => {
	return (
		<svg
			className={className}
			viewBox='0 0 30 30'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M21.7256 1.21583L20.3528 0.611506L19.1441 3.35726L20.517 3.96159L21.7256 1.21583ZM1.1043 3.45806C5.71364 4.57158 8.34952 6.3135 10.0635 8.27671C11.813 10.2806 12.7179 12.6343 13.6716 15.2837C14.6013 17.8665 15.5865 20.7668 17.5759 23.3348C19.6093 25.9595 22.6107 28.1523 27.4332 29.6073L28.2997 26.7352C23.9911 25.4352 21.549 23.5647 19.9475 21.4975C18.3021 19.3736 17.4611 16.9535 16.4943 14.2677C15.5515 11.6484 14.4897 8.78503 12.3234 6.3037C10.1215 3.78164 6.89245 1.77006 1.80878 0.541943L1.1043 3.45806ZM20.517 3.96159C23.6641 5.34693 25.1404 7.10349 25.8292 8.60065C26.5336 10.1319 26.4822 11.5414 26.3317 12.287L29.2723 12.8809C29.5245 11.632 29.5717 9.55765 28.5546 7.34681C27.5218 5.10186 25.4563 2.85803 21.7256 1.21583L20.517 3.96159ZM-3.30159e-09 19.0174C1.21363 19.0174 1.63977 19.341 1.91397 19.6653C2.09715 19.882 2.27255 20.1793 2.47377 20.6134C2.68923 21.0782 2.85839 21.5221 3.12976 22.1554C3.64008 23.3462 4.34226 24.7805 5.67997 26.1589C7.01982 27.5396 8.91743 28.7844 11.7207 29.7571L12.7041 26.9229C10.2653 26.0767 8.79327 25.0593 7.83284 24.0696C6.87027 23.0778 6.34153 22.0338 5.88722 20.9737C5.67627 20.4814 5.42968 19.8567 5.19558 19.3517C4.94723 18.8159 4.63927 18.2421 4.20487 17.7284C3.24394 16.5918 1.89816 16.0174 3.30159e-09 16.0174L-3.30159e-09 19.0174Z'
				fill={fill}
			/>
		</svg>
	);
};

export { Logo, LogoWithoutName };
