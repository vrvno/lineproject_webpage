import React, { useState, useEffect } from 'react';
import '../styles.css';
import antena2 from '../assets/antena2.png';
import antena3 from '../assets/antena3.png';
import panel from '../assets/panel.png';

const images = [antena2, antena3, panel];

const smoothScrollTo = (targetId) => {
	const targetElement = document.getElementById(targetId);
	if (targetElement) {
		targetElement.scrollIntoView({ behavior: 'smooth' });
	}
};

export const Hero = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isFading, setIsFading] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsFading(true);
			setTimeout(() => {
				setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
				setIsFading(false);
			}, 500); // Duración de la animación
		}, 4000); // Cambiar imagen cada 4 segundos

		return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonta
	}, []);

	return (
		<div className='w-full h-fit md:h-hero flex justify-center mb-11 md:mb-24'>
			<div className='w-full md:w-4/5 flex flex-col md:flex-row'>
				<div className='w-full md:w-3/5 bg-gray-100 flex flex-col justify-center items-center p-4'>
					<h1 className='text-center md:text-start mt-5 mb-10  md:my-11 text-3xl  md:text-6xl md:px-10 tracking-wide'>
						Somos una empresa que conecta a las{' '}
						<span className='text-lime-500'>personas</span>
					</h1>
					<h2 className='text-center md:self-start md:ml-10 md:text-start text-xs  md:text-lg w-4/5'>
						Nuestra experiencia garantiza un servicio de primer nivel, si
						quieres trabajar con nosotros contáctanos
					</h2>
					<button
						type='button'
						onClick={() => smoothScrollTo('contact')} // Llama a la función de desplazamiento
						className='mt-7 md:mt-16 w-36 text-base text-white bg-lime-500 hover:bg-lime-600 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-lime-500 dark:hover:bg-lime-600 focus:outline-none dark:focus:ring-lime-700'>
						Contacto
					</button>
				</div>
				<div className='hidden md:block w-full md:w-2/5 bg-gray-100 overflow-hidden'>
					<img
						className={`h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
							isFading ? 'opacity-0' : 'opacity-100'
						}`}
						src={images[currentImageIndex]}
						alt='antena'
					/>
				</div>
			</div>
		</div>
	);
};
