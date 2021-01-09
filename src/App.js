import { AppBar, Profile, Posts, Tabs, Footer } from "./components";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Profile />
      <Container>
        <hr />
        <Tabs />
      </Container>

      <div className="Posts d-flex justify-content-between">
        <Posts image="https://i.pinimg.com/originals/73/3d/dd/733ddd29c455986aa79a8d314a879769.png" />
        <Posts image="https://speckyboy.com/wp-content/uploads/2019/03/business-corporate-website-inspiration-web-design-ui-04.jpg" />
        <Posts image="https://cdn.dribbble.com/users/25514/screenshots/9834148/media/381e301ad320234a784de49a1485d8b6.png?compress=1&resize=400x300" />
        <Posts image="https://cdn.dribbble.com/users/25514/screenshots/9834148/media/381e301ad320234a784de49a1485d8b6.png?compress=1&resize=400x300" />
        <Posts image="https://i.pinimg.com/originals/73/3d/dd/733ddd29c455986aa79a8d314a879769.png" />
        <Posts image="https://speckyboy.com/wp-content/uploads/2019/03/business-corporate-website-inspiration-web-design-ui-04.jpg" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
