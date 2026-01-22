import React, { Children } from 'react';
import {createBrowserRouter  } from 'react-router-dom'; 
import Home from './pages/Home.jsx';
import Profile  from './pages/Profile.jsx';
import SinglePost  from './pages/SinglePost.jsx';
import Login  from './auth/login/Login.jsx';
import Register  from './auth/register/Register.jsx';
import Notfound from './components/notfound/Notfound.jsx';
import Layout from './components/layout/Layout.jsx';
import { RouterProvider } from 'react-router-dom';
import {HeroUIProvider} from "@heroui/react";

const routers = createBrowserRouter([
	{path: '/', element: <Layout /> , children:[
		{index:true, element:<Home/>}	,
		{path:'/profile', element:<Profile/>},
		{path:'/SinglePost', element:<SinglePost/>},
		{path:'/login', element:<Login/>},
		{path:'/register', element:<Register/>},
		{path:'*', element:<Notfound/>},
	] }
]);
const App = () => {
	return (
		<>
		<HeroUIProvider>
			<RouterProvider router={routers} />
    	</HeroUIProvider>
			
		</>
	);
};

export default App;
