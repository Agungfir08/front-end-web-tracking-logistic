import Navbar from "./components/navbar";
import Jumbotron from "./components/Jumbotron";
import TrackOrder from "./components/TrackOrder";
import OrderDetails from "./components/details/OrderDetails";

function App() {
  return (
    <div className=" w-screen h-full bg-white mb-3">
      <Navbar />
      <Jumbotron />
      <TrackOrder />
      <OrderDetails />
    </div>
  );
}

export default App;
