import React from "react";
import "./home.scss";
import {
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
    </div>
  );
}

export default Home;
