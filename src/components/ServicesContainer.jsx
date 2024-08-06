import React from 'react';
import background from '../assets/solarfield-background.png';
import { ServiceCard } from './ServiceCard';

export const ServicesContainer = () => {
	return (
		<div
			className='bg-cover bg-center  h-96'
			style={{ backgroundImage: `url(${background})` }}>
			<ServiceCard />
		</div>
	);
};
