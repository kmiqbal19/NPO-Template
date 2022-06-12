import React, { useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Showcase />
      <ShowWork />
      <FounderSection />
      <StatProjects />
      <SupportSection />
      <Footer />
    </>
  );
}

export default Home;
