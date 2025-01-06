import { useEffect, useRef } from 'react';

function useButtonInstall() {
	const ref = useRef<Event | null>(null);

	const isDisabled = ref.current === null;

	const handleBeforeInstallPrompt = (e: Event) => {
		console.log(e);
		alert('install prop');
		ref.current = e;
	};

	const addListener = () => {
		window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
	};

	const removeListener = () => {
		window.removeEventListener(
			'beforeinstallprompt',
			handleBeforeInstallPrompt,
		);
	};

	const handleInstall = () => {
		if (!ref.current) {
			return;
		}

		// @ts-ignore
		ref.current.prompt();
		ref.current = null;
	};

	useEffect(() => {
		addListener();

		return () => {
			ref.current = null;
			removeListener();
		};
	}, []);

	return { isDisabled, handleInstall };
}

export default useButtonInstall;
