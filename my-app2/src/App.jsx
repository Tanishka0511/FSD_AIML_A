import qbank from "./qbank.js"
function App() {
  

  return (
    <>
      <div>
        <p>this is app.js</p>
      
      <br />
      Question{qbank.id}.{qbank.question}<br/>
      <input type = "radio" name = "opt"/>{qbank.opt1}<br/>
      <input type = "radio" name = "opt"/>{qbank.opt2}<br/>
      <input type = "radio" name = "opt"/>{qbank.opt3}<br/>
      <input type = "radio" name = "opt"/>{qbank.opt4}<br/>
      <input type = "button" value = "Previous"/>
      <input type = "button" value = "Next"/>
     </div>

        
      
      
     
        
    </>
  )
}

export default App
