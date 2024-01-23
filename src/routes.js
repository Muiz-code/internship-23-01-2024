import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { getItem } from './lib/storage';
import Login from './pages/login';
import Loading from './components/loading';

function RouteManager({ children, auth = false, authRedirect }) {
  const [loading, setLoading] = useState(true);
  const router = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = getItem('token');
    if (token && authRedirect) return router(authRedirect);
    if (auth && !token) return router('/login');
    setLoading(false);
  }, [location.pathname]);

  return loading ? <Loading /> : children;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<RouteManager authRedirect="/"><Login /></RouteManager>} />
      </Routes>
    </Router>
  );
}

export default App;
