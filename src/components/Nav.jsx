import React, { useState } from 'react';
import '../styles.css';
import logo from '../assets/logo2.png';

export const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className='bg-white border-gray-200 dark:bg-gray-900'>
			<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
				<a
					href='https://www.lineproject.cl/'
					className='flex items-center space-x-3 rtl:space-x-reverse'>
					<img src={logo} className='h-12' alt='LineProject logo' />
					<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
						Line<span className='text-lime-500'>Project</span>
					</span>
				</a>
				<button
					onClick={toggleMenu}
					data-collapse-toggle='navbar-default'
					type='button'
					className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
					aria-controls='navbar-default'
					aria-expanded={isMenuOpen}>
					<span className='sr-only'>Open main menu</span>
					<svg
						className='w-5 h-5'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 17 14'>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M1 1h15M1 7h15M1 13h15'
						/>
					</svg>
				</button>
				<div
					className={`${
						isMenuOpen ? 'block' : 'hidden'
					} w-full md:block md:w-auto`}
					id='navbar-default'>
					<ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
						<li>
							<a
								href='#hero'
								className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-lime-500 md:p-0 dark:text-white md:dark:text-blue-500'>
								Inicio
							</a>
						</li>
						<li>
							<a
								href='#services'
								className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
								Servicios
							</a>
						</li>
						<li>
							<a
								href='#mision'
								className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
								Misión
							</a>
						</li>
						<li>
							<a
								href='#proyectos'
								className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
								Proyectos
							</a>
						</li>
						<li>
							<a
								href='#contact'
								className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
								Contacto
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
