import { useRouteError } from 'react-router-dom';
import clsx from 'clsx';

import { DefaultRouterError } from './types';

import styles from './PageError.module.css';

function PageError() {
	const routerError: DefaultRouterError = useRouteError() as DefaultRouterError;

	return (
		<div className={clsx('page', styles.root)}>
			<h3>Произошла ошибка</h3>
			<p>
				<i>{routerError.statusText || routerError.message}</i>
			</p>
		</div>
	);
}

export default PageError;
