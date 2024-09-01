import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import publicRoutes from "./routes";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;

          let Layout = route.layout;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
