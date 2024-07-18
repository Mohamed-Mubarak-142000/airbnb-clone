import Banner from "./components/Banner";
import ExploreList from "./components/ExploreList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Live from "./components/Live";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <ExploreList />
        <Live />
      </main>
      <Footer />
    </>
  );
}
