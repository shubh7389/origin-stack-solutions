// import { Header } from "@/components/Header";
// import { Hero } from "@/components/sections/Hero";
// import { Mission } from "@/components/sections/Mission";
// import { Vision } from "@/components/sections/Vision";
// import { WhyUs } from "@/components/sections/WhyUs";
// import { Services } from "@/components/sections/Services";
// import { Industries } from "@/components/sections/Industries";
// import { Process } from "@/components/sections/Process";
// import { TechStack } from "@/components/sections/TechStack";
// import { Contact } from "@/components/sections/Contact";
// import { Footer } from "@/components/sections/Footer";
// import { Toaster } from "@/components/ui/sonner";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-background text-foreground">
//       <Header />
//       <main>
//         <Hero />
//         <Mission />
//         <Vision />
//         <WhyUs />
//         <Services />
//         <Industries />
//         <Process />
//         <TechStack />
//         <Contact />
//       </main>
//       <Footer />
//       <Toaster richColors position="top-right" />
//     </div>
//   );
// }


import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}
