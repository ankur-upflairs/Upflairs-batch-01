import MainContent, { Header ,Component1} from "./Header"
import Content from "./Content"
import { Footer } from "./Footer"

export default function Layout() {
    return <div>
      <Header/>
      <Content/>
      <MainContent/>
      <Component1/>
      <Footer/>
    </div>
  }