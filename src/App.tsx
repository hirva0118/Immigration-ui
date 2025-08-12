
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { routes } from './routes/routesConfig'
import Layout from './Layout';
import ScrollToTop from './Components/ScrollToTop';

function App() {

  return (
    <>
    <ScrollToTop/>
      <Routes>
        {routes.map(({ path, component: Component }, index) => (
          <Route 
            key={index}
            path={path}
            element={
              <Layout>
                <Component/>
              </Layout>
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App
