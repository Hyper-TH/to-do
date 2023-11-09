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
import { GitHubPage } from './pages/GitHubPage';
import { ServerTest } from './pages/ServerTest';

function App() {

	const router = createBrowserRouter(
		createRoutesFromElements(
			// Route of the routing system
			<Route path="/" element={<Root />}>
				<Route index element={<Home />}/>	
				<Route path="/task" element={<TaskPage />} />
				<Route path="/count" element={<CounterPage />} />
				<Route path="/medicine" element={<MedicinePage />} />
				<Route path="/github" element={<GitHubPage />} />
				<Route path="/serverTest" element={<ServerTest/>} />
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
			<Link to="/github"> GitHub </Link>
			<Link to="/serverTest"> Server Test </Link>
		</div>

		<div>
			<Outlet />
		</div>
	</>
}
export default App;