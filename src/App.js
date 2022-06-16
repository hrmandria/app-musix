import './App.css';
import AudioPlayer from './AudioPlayer';
import Scanner from './Scanner'
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => ( <
    Router >
    <
    Route path = "/play"
    component = { AudioPlayer }
    /> <
    Route path = "/"
    component = { Scanner }
    /> <
    /Router>
);

export default App;