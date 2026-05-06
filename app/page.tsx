import { TopBar, Header } from "./components/Header";
import Hero from "./components/Hero";
import Proof from "./components/Proof";
import Categories from "./components/Categories";
import Aluguel from "./components/Aluguel";
import Processo from "./components/Processo";
import PorQue from "./components/PorQue";
import Modalidades from "./components/Modalidades";
import Cases from "./components/Cases";
import Cobertura from "./components/Cobertura";
import Selos from "./components/Selos";
import FormBlock from "./components/FormBlock";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <Proof />
      <Categories />
      <Aluguel />
      <Processo />
      <PorQue />
      <Modalidades />
      <Cases />
      <Cobertura />
      <Selos />
      <FormBlock />
      <Footer />
    </>
  );
}
