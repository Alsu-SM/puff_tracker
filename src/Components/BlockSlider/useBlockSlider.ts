import { Touch, TouchEvent, useRef, useState } from 'react';
import { ANGLE_DEFAULT } from './constants';
import { UseBlockSliderParams } from './types';

function useBlockSlider({ onSwipeLeft, onSwipeRight }: UseBlockSliderParams) {
	const [lastDelta, setLastDelta] = useState<number | null>(null);
	const [angle, setAngle] = useState<number>(ANGLE_DEFAULT);

	const ref = useRef<HTMLDivElement>(null);

	const getTouchDelta = (touch: Touch, element: HTMLDivElement) => {
		const { clientX } = touch;
		const { x } = element.getBoundingClientRect();
		const deltaX = clientX - x;

		return deltaX;
	};

	const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
		const { touches } = e;
		if (ref.current && touches[0]) {
			const deltaX = getTouchDelta(touches[0], ref.current);
			if (lastDelta === null) {
				setLastDelta(deltaX);
				return;
			}

			const value = lastDelta - deltaX;
			const valuePercent = (value / ref.current.offsetWidth) * 100;
			const newAngle = Math.min(
				Math.max(angle + (valuePercent * 9) / 8, 90),
				270,
			);
			setAngle(newAngle);
			setLastDelta(deltaX);
		}
	};

	const handleTouchStart = () => {
		setLastDelta(null);
	};

	const sleep = (ms: number) => {
		return new Promise<void>((resolve) => setTimeout(resolve, ms));
	};

	const increaseAngle = async (angle: number) => {
		return new Promise<void>(async (resolve) => {
			const angleStep = 2;
			let currentAngle = angle;

			while (currentAngle < ANGLE_DEFAULT) {
				setAngle((angle) => angle + angleStep);
				currentAngle += angleStep;
				await sleep(5);
			}

			resolve();
		});
	};

	const decreaseAngle = async (angle: number) => {
		const angleStep = 2;
		let currentAngle = angle;

		while (currentAngle > ANGLE_DEFAULT) {
			setAngle((angle) => angle - angleStep);
			currentAngle -= angleStep;
			await sleep(5);
		}
	};

	const restoreAngle = (angle: number) => {
		return new Promise<void>(async (resolve) => {
			if (!ref.current || angle === ANGLE_DEFAULT) {
				resolve();
			}

			if (angle > ANGLE_DEFAULT) {
				await decreaseAngle(angle);
				resolve();
				return;
			}

			if (angle < ANGLE_DEFAULT) {
				await increaseAngle(angle);
				resolve();
				return;
			}
		});
	};

	const handleTouchEnd = () => {
		const isLeft = angle - ANGLE_DEFAULT > 40;
		const isRight = ANGLE_DEFAULT - angle > 40;

		if (isLeft) {
			onSwipeLeft();
		}

		if (isRight) {
			onSwipeRight();
		}

		restoreAngle(angle).then(() => {
			setAngle(ANGLE_DEFAULT);
		});
	};

	return { ref, angle, handleTouchMove, handleTouchStart, handleTouchEnd };
}

export default useBlockSlider;
