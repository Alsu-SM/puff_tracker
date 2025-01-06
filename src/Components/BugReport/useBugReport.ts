import { ChangeEvent, useEffect, useState } from 'react';
import { BugType, Severity } from './types';
import * as htmlToImage from 'html-to-image';
import emailjs from 'emailjs-com';
import { S_ID, T_ID, U_ID } from './constants';
import { toast } from 'react-toastify';

function useBugReport() {
	const [isModalShown, setIsModalShown] = useState<boolean>(false);
	const [severity, setSeverity] = useState<string>(Severity.Low);
	const [bugType, setBugType] = useState<string>(BugType.Functional);
	const [screenshot, setScreenshot] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [isEmailPending, setIsEmailPending] = useState<boolean>();

	const handleClick = () => {
		setIsModalShown(true);
	};

	const handleCancel = () => {
		setIsModalShown(false);
	};

	const handleSeverityChange = (value: string) => {
		setSeverity(value);
	};
	const handleBugTypeChange = (value: string) => {
		setBugType(value);
	};
	const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setDescription(event.target.value);
	};

	const resizeImage = (
		url: string,
		width: number = 187,
		height: number = 350,
	) => {
		return new Promise<string>((resolve, reject) => {
			const sourceImage = new Image();

			sourceImage.onload = () => {
				const canvas = document.createElement('canvas');
				canvas.width = width;
				canvas.height = height;

				canvas.getContext('2d')?.drawImage(sourceImage, 0, 0, width, height);

				resolve(canvas.toDataURL());
			};
			sourceImage.onerror = () => {
				reject();
			};

			sourceImage.src = url;
		});
	};

	const handleScreenshot = () => {
		const page = document.querySelector('.page') as HTMLElement;

		if (page) {
			htmlToImage.toPng(page).then(async function (dataUrl) {
				const resizedUrl = await resizeImage(dataUrl);
				setScreenshot(resizedUrl);
			});
		}
	};

	const handleConfirm = () => {
		setIsEmailPending(true);

		emailjs
			.send(
				S_ID,
				T_ID,
				{
					bug_type: bugType,
					severity,
					location: window.location.href,
					description,
					screenshot,
				},
				U_ID,
			)
			.then(() => {
				setIsEmailPending(false);
				setIsModalShown(false);
				toast.info('Bug report sent. Thank you!');
			})
			.catch(() => {
				setIsEmailPending(false);
				toast.info('An error occurred, please try again now or later');
			})
			.finally(() => {
				setIsEmailPending(false);
			});
	};

	useEffect(() => {
		if (isModalShown) {
			setTimeout(() => {
				handleScreenshot();
			}, 1000);
		} else {
			setScreenshot('');
		}
	}, [isModalShown]);

	return {
		severity,
		bugType,
		isModalShown,
		isEmailPending,
		screenshot,
		description,
		handleClick,
		handleCancel,
		handleSeverityChange,
		handleBugTypeChange,
		handleDescriptionChange,
		handleConfirm,
	};
}

export default useBugReport;
