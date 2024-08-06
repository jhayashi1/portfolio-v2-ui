import { Route } from 'react-router-dom';
import { Main } from './components/main';

export const routes = [
    <Route
        element={<Main />}
        key='home' 
        path='/'
    />,
    <Route
        element={<Main />} 
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