import AboutView from "./views/About";
import ClientView from "./views/Client";
import ContactView from "./views/Contact";
import FooterView from "./views/Footer";
import HomeView from "./views/Home";
import InfoView from "./views/Info";
import NewsView from "./views/News";
import PortfolioView from "./views/Portfolio";
import ServiceView from "./views/Service";
import SubscribeView from "./views/Subscribe";

function App() {
  return (
    <div>
      <HomeView titleOne="WE ARE" titleTwo="ТHE BEST" titleThree="PLAYERS!!!" />

      <AboutView />

      <ServiceView />

      <PortfolioView />

      <NewsView />

      <SubscribeView />

      <ClientView />

      <ContactView />

      <InfoView />

      <FooterView />
    </div>
  );
}

export default App;
