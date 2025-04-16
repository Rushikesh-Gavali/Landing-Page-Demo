import React from "react";
import OverlayLayout from "./components/OverlayLayout";
import Form from "./components/Form";
import Testimonials from "./components/Testimonials";
import Benefits from "./components/Benifits";

const App = () => {
  return (
    <>
      <OverlayLayout />
      <Form />
      <Testimonials />
      <Benefits />
    </>
  );
};

export default App;
