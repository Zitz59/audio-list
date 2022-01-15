import Header from "./Components/Header/Header";
import '.App.css';



const App = (props) => {
	return (
		<div className="app-wrapper">
		<Header/>
		<Body/>
		<Footer/>
		</div>
	);
}

export default App;