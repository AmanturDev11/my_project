import { useEffect, useState } from 'react';
import Lefo from './components/lefo/Lefo';
import Input from './components/input/Input';


const App = () => {
	const [todos, Todo] = useState('users');
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${todos}`)
			.then((response) => response.json())
			.then((json) => setData(json));
	}, [todos]);

	return (
		<div className="App">
			<Input />
			<Lefo />
			<div className="allBtn">
				<button
					onClick={() => {
						setData([]);
						Todo('');
					}}
				>
					delete all
				</button>
				<button
					onClick={() => {
						Todo('users');
					}}
				>
					get users
				</button>
			</div>

			<div>
				{data.map((el) => {
					return (
						<div key={el.id}>
							<h1>{el.id}</h1>
							<p>{el.name}</p>
							<p>{el.email}</p>
							<p>{el.street}</p>
							<p>{el.phone}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default App;
