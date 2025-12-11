import { useCallback, useEffect, useRef, useState } from 'react';
import { Test } from "./Test";

function App() {
	const webAppRef = useRef(null);
	const [userData, setUserData] = useState({ firstName: 'Пу-пу-пу' });
	
	useEffect(() => {
		if (window && window.WebApp) {
			const webApp = window.WebApp;
			webAppRef.current = webApp;
			
			webApp.ready();

			const data = webApp.initDataUnsafe?.user;
			if (data) {
				console.log('ID:', data.id);
				console.log('Имя:', data.first_name);
				setUserData({
					id: data.id,
					firstName: data.first_name,
				});
			} else {
				console.log("initDataUnsafe пустой");
			}
			
		} else {
			console.error("MAX Bridge не загружен");
		}
	}, []);

	const handleClose = useCallback(() => {
		if (webAppRef.current) {
			webAppRef.current.close();
		} else {
			console.warn("WebApp недоступен");
		}
	}, []);

	return (
		<Test userData={userData} handleClose={handleClose}/>
	);
}

export default App;