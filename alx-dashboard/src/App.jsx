import './App.css'
import { useDarkMode } from './hooks/useDarkMode';
import Sidebar from './components/layout/Sidebar';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingSpinner from './components/ui/LoadingSpinner';


const Overview = lazy(() => import('./pages/Overview'));
const Products = lazy(() => import('./pages/Products'));

function App() {
  const {darkMode} = useDarkMode();

  return (
   
   <div className={`app-shell ${darkMode ? 'dark' : ''}`}>
    <Sidebar />
    <div className='main-content'>
      <main className='page-content'>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path='/' element={<Overview />} />
            <Route path='/products' element={<Products />} />
          </Routes>
        </Suspense>
      </main>
    </div>
   </div>
    
  )
}

export default App
