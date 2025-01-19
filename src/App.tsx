import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/feature/Home/Home";
import Features from "./components/feature/Home/Features";
import NavBar from "./Layout/Nav";
import LoginPage from "./components/feature/Home/Login";
import Footer from "./Layout/Footer";
// import Login from './pages/auth/Login'
// import SignUp from './pages/auth/SignUp'
// import Chat from './pages/Chat'

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // Replace this with your actual auth logic
  // const isAuthenticated = localStorage.getItem('token') !== null;
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return <>{children}</>;
};

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <NavBar /> */}
        {/* Public Routes */}

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/features" element={<Features />} />
        {/* Auth Routes */}
        <Route path="/auth">
          {/* <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} /> */}
        </Route>

        {/* Protected Routes */}
        <Route
          path="/chat"
          // element={<ProtectedRoute>{/* <Chat /> */}</ProtectedRoute>}
        />

        {/* Catch all - 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
