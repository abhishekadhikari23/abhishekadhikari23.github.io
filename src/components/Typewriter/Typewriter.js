import { useEffect, useRef } from 'react';
import { MouseScroll } from '../MouseScroll/MouseScroll';
import s from './Typewriter.module.scss';

export const Typewriter = () => {
	const text = useRef(null);
	const listOfText = useRef([
		'a Full-Stack Web Developer     ',
		'a Student     ',
		'an Engineer     ',
		'a Freelancer     ',
		'a Cool Guy     '
	]);

	useEffect(() => {
		var i = 0;
		var j = 0;
		var forward = true;
		var list = listOfText.current;
		const interval = setInterval(() => {
			if (i < list.length) {
				if (forward) {
					if (j <= list[i].length) {
						text.current.innerHTML = list[i].slice(0, j);
					}
					j++;
					if (j > list[i].length) {
						j--;
						forward = false;
					}
				} else {
					if (j >= 0) {
						text.current.innerHTML = list[i].slice(0, j);
					}
					j--;
					if (j < 0) {
						j = 0;
						forward = true;
						i++;
					}
				}
				if (i === list.length) {
					i = 0;
				}
			}
		}, 120);
		return () => clearInterval(interval);
	}, []);
	return (
		<div className={s.main}>
			<h1>ABHISHEK ADHIKARI</h1>
			<div className={s.text}>
				<b>I'm</b>&nbsp;
				<span ref={text} />
			</div>
			<MouseScroll link="profile" />
		</div>
	);
};
