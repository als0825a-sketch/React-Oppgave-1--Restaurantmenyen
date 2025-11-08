import menu from "./menu.json";
import DisplayMenu from "./DisplayMenu.jsx";
import './App.css'

export default function App() {
  return (
    <div>
      <DisplayMenu menu = {menu} />
    </div>
    
  );
}
