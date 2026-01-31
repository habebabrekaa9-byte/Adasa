
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Home from './components/Home'
import Blog from './components/Blog'
import NotFoundPage from './components/NotFoundPage'
import AboutUs from './components/AboutUs'
import BlogDetailsPage from './components/BlogDetailsPage'
function App() {

  const routing = createBrowserRouter([
    {
      path: '',
      element: <Home />
    },
    {
      path: 'home',
      element: <Home />
    },
    {
      path: 'home/:slug',
      element: <BlogDetailsPage />
    },
    {
      path: 'blog',
      element: <Blog />
    },
    {
      path: 'blog/:slug',
      element: <BlogDetailsPage />
    },
    {
      path: 'about',
      element: <AboutUs />
    },
    {
      path: '*',
      element: <NotFoundPage />
    },
  ])
  return (
    <>
      <RouterProvider router={routing} />
    </>
  )
}

export default App
