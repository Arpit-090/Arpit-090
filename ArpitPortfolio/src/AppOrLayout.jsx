
import Footer from './components/footer.jsx'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/header.jsx'

function AppOrLayout() {
 

  return (
    <>
      <div>
      <Header/>
      <Outlet /> 
         {/* when we use AppOrLayout file in main.jsx it only make changrs in outlet not in header or footer bcs we use them as a layout or outlet */}
      <Footer />
    </div>
    </>
  )
}

export default AppOrLayout
