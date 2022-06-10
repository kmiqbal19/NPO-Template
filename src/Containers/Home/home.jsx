import React from "react";
import "./home.scss";
import {
  Footer,
  FounderSection,
  Header,
  Showcase,
  ShowWork,
  StatProjects,
  SupportSection,
} from "../../Components";
function Home() {
  return (
    <div>
      <Header />
      <Showcase />
      <ShowWork />
      <FounderSection />
      <StatProjects />
      <SupportSection />
      <Footer />
    </div>
  );
}

export default Home;
