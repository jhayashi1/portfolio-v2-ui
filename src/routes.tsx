import {Route} from 'react-router-dom';
import {Main} from './components/Main';
import {About} from './pages/About';
import {Work} from './pages/Work';
import {Projects} from './pages/Projects';

export const routes = [
    <Route
        element={<Main />}
        key='home'
        path='/'
    />,
    <Route
        element={<About />}
        key='about'
        path='/about'
    />,
    <Route
        element={<Projects />}
        key='projects'
        path='/projects'
    />,
    <Route
        element={<Work />}
        key='work'
        path='/work'
    />,
];
