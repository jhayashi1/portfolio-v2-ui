import {Route} from 'react-router-dom';
import {Main} from './components/Main';
import {About} from './components/About';

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
        element={<Main />}
        key='projects'
        path='/projects'
    />,
    <Route
        element={<Main />}
        key='work'
        path='/work'
    />,
];
