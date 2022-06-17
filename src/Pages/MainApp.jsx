import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import FooterPage from '../Components/FooterPage';
import CartPage from '../Pages/CartPage';
import ItemPage from '../Pages/ItemPage';
import AboutUS from '../Pages/AboutUS';
import Main from '../Pages/Main';
import SignInPage from "./SignInPage";

// Nasif
import CategoryPage from './CategoryPage';
// Nasif

const MainApp = (props) => {
	const productsCategory = [
		{ id: 0, name: 'Category-1' },
		{ id: 1, name: 'Category-2' },
		{ id: 2, name: 'Category-3' },
		{ id: 3, name: 'Category-4' },
		{ id: 4, name: 'Category-5' },
	];
	return (
		<Router>
			<ResponsiveAppBar />
			<Routes>
				<Route exact path='/' element={<Main />} />
				<Route
					path='/Category/:id'
					element={<CategoryPage productsCategory={productsCategory} />}
				/>
				<Route path='/cart' element={<CartPage />} />
				<Route path='/item/:id' element={<ItemPage />} />
				<Route path='/aboutus' element={<AboutUS />} />
				<Route path="/signin" element={<SignInPage />} />
			</Routes>
			<FooterPage />
		</Router>
	);
};

export default MainApp;
