import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Plants from "./pages/Plants/Plants";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import "./app.scss";
import Flower from "./pages/Flowers/Flowers";
import FlowersById from "./pages/Flowers/FlowerById";

function App() {
	return (
		<>
			<div className="head">
				<div className="container head__wrapper">
					<Header /> 
					<Navbar />
				</div>
			</div>
			<main >
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/plants" element={<Plants />} />
					<Route path="/flowers/" element={<Flower />} />
					<Route path="/flowers/:id" element={<FlowersById />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</main >
			<Footer />
		</>
	)
};

export default App;
