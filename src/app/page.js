import AboutSection from "./components/AboutSection";
import AvatarSection from "./components/AvatarSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar></Navbar>
      <div className="container mx-auto px-12 py-4">
        <AvatarSection />
        <AboutSection />
      </div>
    </main>
  );
}
