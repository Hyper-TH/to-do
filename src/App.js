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

function App() {

	const router = createBrowserRouter(
		createRoutesFromElements(
			// Route of the routing system
			<Route path="/" element={<Root />}>
				<Route index element={<Home />}/>	
				<Route path="/task" element={<TaskPage />} />
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
		</div>

		<div>
			<Outlet />
		</div>
	</>
}
export default App;