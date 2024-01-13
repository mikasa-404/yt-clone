import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultPage from "./components/SearchResultPage";
import Shorts from "./components/Shorts";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      }, {
        path: "watch",
        element: <WatchPage />
      },
      {
        path:"results/:query",
        element: <SearchResultPage/>
      },{
        path:"shorts",
        element:<Shorts/>
      }
    ]
  },
])
function App() {
  return (
    <Provider store={store}>
      <div className="">
        <RouterProvider router={appRouter} />
      </div>

    </Provider>
  );
}

export default App;
