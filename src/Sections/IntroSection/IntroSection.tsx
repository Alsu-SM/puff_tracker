import clsx from 'clsx';
import { IntroSectionProps } from './types';
import gsap, { Power1 } from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './IntroSection.module.css';
import LanguageButton from '../../Components/LanguageButton';
import TypeIt from 'typeit-react';
import Button from '../../Components/Button';
import { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function IntroSection({ className, style }: IntroSectionProps) {
	const location = useLocation();
	const menuItems: { title: string; path: string }[] = [
		{
			title: 'about',
			path: '#about',
		},
		{
			title: 'approach',
			path: '#approach',
		},
		{
			title: 'services',
			path: '#services',
		},
		{
			title: 'contacts',
			path: '#contacts',
		},
	];
	const navLinks: JSX.Element[] = useMemo(
		() =>
			menuItems.map((menuItem, i) => {
				const { path, title } = menuItem;
				console.log(location.hash);
				const isItemActive: boolean = location.hash === path;
				return (
					<NavLink
						id={`nav_link_${i + 1}`}
						to={`${path}`}
						key={path}
						className={clsx(styles.link, {
							[styles.link_active]: isItemActive,
						})}
					>
						{title}
					</NavLink>
				);
			}),
		[menuItems, location.pathname],
	);
	useGSAP(() => {
		// GSAP is used here for coordinated animation transition.

		const tl = gsap.timeline({ defaults: { duration: 1 } });
		tl.fromTo(
			'#nav_link_1',
			{ y: '5', opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.3 },
		);
		tl.fromTo(
			'#nav_link_2',
			{ y: '5', opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.3 },
		);
		tl.fromTo(
			'#nav_link_3',
			{ y: '5', opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.3 },
		);
		tl.fromTo(
			'#nav_link_4',
			{ y: '5', opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.3 },
		);
		tl.fromTo(
			'#logo',
			{ y: '5', opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.3 },
		);
		tl.fromTo(
			'#lang_button',
			{ y: '5', opacity: 0 },
			{ y: 0, opacity: 1, duration: 0.3 },
		);
		tl.fromTo(
			'#image_1',
			{ x: 5, opacity: 0 },
			{ x: 0, opacity: 1, duration: 1 },
		);
		tl.fromTo(
			'#image_2',
			{ y: 5, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1 },
		);
		tl.fromTo(
			'#type_writer',
			{ x: '-5', opacity: 0 },
			{ x: 0, opacity: 1, duration: 1.3 },
		);
		tl.fromTo(
			'#moto_button',
			{ x: '-5', opacity: 0 },
			{ x: 0, opacity: 1, duration: 1.3 },
		);
		tl.fromTo(
			'#footer',
			{ y: '5', opacity: 0 },
			{ y: 0, opacity: 1, duration: 1.3 },
		);
	}, []);

	return (
		<div className={clsx(styles.root, className)} style={style} id="intro">
			<nav className={styles.nav}>
				<span className={styles.logo} id="logo">
					NM
				</span>
				{navLinks}
				<LanguageButton />
			</nav>
			<section className={styles.section}>
				<div className={styles.type_writer} id="type_writer">
					<span>Hi I'm Nelly, your</span>
					<TypeIt
						className={styles.type_it}
						getBeforeInit={(instance) => {
							instance
								.type('coach ')
								.pause(2750)
								.delete(6)
								.pause(1750)
								.type('tutor ')
								.pause(2750)
								.delete(6)
								.pause(1750)
								.type('skills instructor ')
								.pause(2750)
								.delete(18)
								.pause(1750)
								.type('interpreter ')
								.pause(2750)
								.delete(12)
								.pause(1750);

							// Remember to return it!
							return instance;
						}}
						options={{
							strings: ' ',
							speed: 100,
							deleteSpeed: 100,
							waitUntilVisible: true,
							lifeLike: true,
							loop: true,
							loopDelay: 1000,
							startDelay: 7700,
						}}
					/>
				</div>
				<div className={styles.moto_button} id="moto_button">
					<div className={styles.moto}>Your growth is my passion</div>
					<Button className={styles.button}>contact me</Button>
				</div>

				<div className={styles.image} id="image_1"></div>
				<div className={styles.image_2} id="image_2"></div>
				<div className={styles.footer} id="footer">
					<div className={styles.footer_item}>
						<div>10 years of experience as a _ </div>
						<div>some more info here </div>
						<div>and some more </div>
					</div>
					<div className={styles.footer_item}>
						<div>100 happy clients</div>
						<div>some more info here </div>
						<div>and some more </div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default IntroSection;
