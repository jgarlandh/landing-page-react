import React from "react";
import NavigationBar from "./NavigationBar.jsx"
import Jumbotron from "./Jumbotron.jsx"
import CardElement from "./CardElement.jsx"
import Footer from "./Footer.jsx"
//create your first component
const Home = () => {
	return (
		<>
		
			<NavigationBar/>
			<div className="container">
				<Jumbotron/>
				<div className="row"> 
					<CardElement/>
					<CardElement/>
					<CardElement/>
					<CardElement/>
				</div>
				<Footer/>
			</div>

		</>
	);
};

export default Home;