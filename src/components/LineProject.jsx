import React from 'react';
import { Nav } from './Nav';
import { Hero } from './Hero';
import { ServicesContainer } from './ServicesContainer';
import { ProyectContainer } from './ProyectContainer';
import { Footer } from './Footer';
import { Mision } from './Mision';
import { Services } from './Services';
import { ContactForm } from './ContactForm';

export const LineProject = () => {
	return (
		<>
			<Nav />
			<div id='hero'>
				<Hero />
			</div>
			<div id='services'>
				<Services />
			</div>
			<div id='mision'>
				<Mision />
			</div>
			<div id='contact'>
				<ContactForm />
			</div>
			<Footer />
		</>
	);
};
