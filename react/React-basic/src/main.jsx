import React from 'react'
import ReactDOM from 'react-dom/client'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

//jsx- javascript extension - writing html in js
//complete jsx should wrap in single element (tag)
//every element should be closed
//use className insteed of class

let element1=<div>
   <p className='para'>hello everybuddy</p>
    <img src="" alt="no image" ></img>
    <br />
    <p>this is my first react app</p>
</div>
//functional components = starts with capital letter
//return jsx
//used as tag inside jsx

function Header() {
  return <div>this is header</div>
}

function Content() {
  return <div>
    this is Content
  </div>
}

function Footer() {
  return <div>
    this is footer
  </div>
}

function Component1() {
  return <div>
    <p>this is my first functional component</p>
  </div>
}

function Layout() {
  return <div>
    <Header/>
    <Content/>
    <Component1/>
    <Footer/>
  </div>
}


let root=document.getElementById('root')
let rootElement=ReactDOM.createRoot(root)
// rootElement.render('hello everybuddy')
// rootElement.render(element1)
rootElement.render(<Layout/>)






