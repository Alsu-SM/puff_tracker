import { UseInputCounterParams } from './types';

function useInputCounter({ value, onChange }: UseInputCounterParams) {
	const handleIncrease = () => {
		onChange(value + 1);
	};
	const handleDecrease = () => {
		onChange(value - 1);
	};

	const isDecreaseDisabled = value === 0;

	return { isDecreaseDisabled, handleIncrease, handleDecrease };
}

export default useInputCounter;
