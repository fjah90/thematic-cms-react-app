import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import UserList from './pages/UserList';
// import UserDetails from './pages/UserDetails';
// import NotFound from './pages/NotFound';

const appRoutes = (
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />  */}
    </Routes>
);

export default appRoutes;
