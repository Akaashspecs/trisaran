import Benefits from "./Benefits";
import Brands from "./Brands";
import ContactForm from "./Contact-Form";
import Footer from "./Footer";
import Grow from "./Grow";
import Header from "./Header";
import Intro from "./Intro";
import Partner from "./Partner";
import Review from "./Review";
function App() {
  return (
    <>
      <div className="">
        <div>
          <Header />
          <Intro />
          <Grow />
          <Benefits />
          <Partner />
          <Brands />
          <ContactForm />
          <Review />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
