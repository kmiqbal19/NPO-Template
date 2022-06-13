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
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      // delay: 1.5,
      duration: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Header />
      <Showcase />
      <ShowWork />
      <FounderSection />
      <StatProjects />
      <SupportSection />
      <Footer />
    </motion.div>
  );
}

export default Home;
