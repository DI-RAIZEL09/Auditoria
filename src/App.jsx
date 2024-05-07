
import Products from "./pages/Products.jsx";
import jsonData from "./utils/constants.js";

const App = () => {
  return (
      <div className="">

           <Products props={jsonData}/>
      </div>

  )
}
export default App