import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Reviews from './components/Reviews';
import Amenities from './components/Amenities';
import InstagramFeed from './components/InstagramFeed';
import History from './components/History';
import GuestGuidelines from './components/GuestGuidelines';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-viking-gold selection:text-viking-dark">
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Reviews />
        <Amenities />
        <InstagramFeed />
        <History />
        <GuestGuidelines />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
}

