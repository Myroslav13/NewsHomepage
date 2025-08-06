import './App.css'
import Navigation from './Components/Navigation'
import MainNews from './Components/MainNews'
import NewNews from './Components/NewNews'
import OtherNews from './Components/OtherNews'

function App() {
  return (
    <>
      <Navigation></Navigation>

      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-md-8">
            <MainNews></MainNews>
          </div>
          <div className="col-12 col-md-4">
            <NewNews></NewNews>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <OtherNews></OtherNews>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
