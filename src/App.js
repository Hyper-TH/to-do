import './App.css';
import { 
	createBrowserRouter, 
	createRoutesFromElements, 
	Route, 
	Link, 
	Outlet, 
	RouterProvider
} from 'react-router-dom';
import { Home } from './pages/Home';
import { TaskPage } from './pages/TaskPage';
import { CounterPage } from './pages/CounterPage';
import { MedicinePage } from './pages/MedicinePage';

function App() {

	const router = createBrowserRouter(
		createRoutesFromElements(
			// Route of the routing system
			<Route path="/" element={<Root />}>
				<Route index element={<Home />}/>	
				<Route path="/task" element={<TaskPage />} />
				<Route path="/count" element={<CounterPage />} />
				<Route path="/medicine" element={<MedicinePage />} />
			</Route>
		)
	); 
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

const Root = () => {
	return <>
		<div>
			<Link to="/"> Home </Link > 
			<Link to="/task"> Task </Link > 
			<Link to="/count"> Count </Link>
			<Link to="/medicine"> Medicines </Link>
		</div>

		<div>
			<Outlet />
		</div>
	</>
}
export default App;