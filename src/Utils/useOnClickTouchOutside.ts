import React, { useCallback, useEffect } from 'react';

function useOnClickTouchOutside<T extends HTMLElement>(
	ref: React.RefObject<T>,
	events: string[],
	callback: (event: Event) => void,
): void {
	const handleClickOutside = useCallback(
		(event: Event) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				callback(event);
			}
		},
		[ref, callback],
	);

	function addListeners() {
		for (let eventName of events) {
			document.addEventListener(eventName, handleClickOutside);
		}
	}
	function removeListeners() {
		for (let eventName of events) {
			document.removeEventListener(eventName, handleClickOutside);
		}
	}

	useEffect(() => {
		addListeners();

		return () => {
			removeListeners();
		};
	}, [handleClickOutside]);
}

export default useOnClickTouchOutside;
