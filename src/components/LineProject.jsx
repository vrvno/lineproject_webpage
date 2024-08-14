import React from 'react';
import { Nav } from './Nav';
import { Hero } from './Hero';
import { ServicesContainer } from './ServicesContainer';
import { ProyectContainer } from './ProyectContainer';
import { Footer } from './Footer';
import { Mision } from './Mision';

export const LineProject = () => {
	return (
		<>
			<Nav />
			{<Hero />}
			{<ServicesContainer />}
			<Mision />
			{<ProyectContainer />}
			<Footer />
		</>
	);
};
