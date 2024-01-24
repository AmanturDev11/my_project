import { useEffect, useState } from 'react';


const Input = () => {
	const [input, setInput] = useState(localStorage.getItem('input') || '');
	useEffect(() => {
		localStorage.setItem('input', input);
		console.log(input);
	}, [input]);

	const handleInputChange = (e) => {
		setInput(e.target.value);
	};
	return (
		<div>
			<input
				type="text"
				placeholder="local"
				value={input}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default Input;
