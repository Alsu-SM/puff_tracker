function useButtonReload() {
	const handleClick = () => {
		window.location.reload();
	};

	return { handleClick };
}

export default useButtonReload;
