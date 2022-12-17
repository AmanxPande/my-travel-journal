import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./Data";
import Footer from "./components/Footer";

export default function App() {
  const cards = Data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <section className="container">{cards}</section>
      <Footer />
    </div>
  );
}
