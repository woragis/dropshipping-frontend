import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Pages } from '../types/Pages'
import { pagesData } from './pagesData'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

const Router = () => {
  const routes = pagesData.map(({ title, path, element }: Pages) => {
    return <Route key={title} path={path} element={element} />
  })
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>{routes}</Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
