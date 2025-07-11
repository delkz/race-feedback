import './App.css'
import Header from './components/Header'
import Settings from './components/Settings'
import ConnectionViewer from './components/ConnectionViewer'
import Console from './components/Console'

function App() {


  return (
    <div className='container h-dvh mx-auto my-auto p-4 flex flex-col md:flex-row gap-4'>
      <div className='md:w-1/2 flex gap-4 flex-col'>
        <Header />
        <Settings />
        <ConnectionViewer />
      </div>
      <Console />
    </div>
  )
}

export default App
