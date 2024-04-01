import Balance from "./components/Balance";
import Footer from "./components/Footer";
import Spending from "./components/Spending";

export default function Home() {
  return (
    <main className="main" >
      <Balance />
      <Spending />
      <Footer />
    </main>
  );
}
