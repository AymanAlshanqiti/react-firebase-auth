import SignUp from './SignUp';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import UpdateProfile from './UpdateProfile';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';

function App() {
	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ minHeight: '100vh' }}
		>
			<div className="w-100" style={{ maxWidth: '400px' }}>
				<Router>
					<AuthProvider>
						<Switch>
							<PrivateRoute exact path="/" component={Dashboard} />
							<Route path="/signup" component={SignUp} />
							<Route path="/login" component={Login} />
							<Route path="/update-profile" component={UpdateProfile} />
							<Route path="/forgot-password" component={ForgotPassword} />
						</Switch>
					</AuthProvider>
				</Router>
			</div>
		</Container>
	);
}

export default App;
