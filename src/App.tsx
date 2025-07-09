// import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Programs from './components/Programs';
// import About from './components/About';
// import Testimonials from './components/Testimonials';
// import Pricing from './components/Pricing';
// import Blog from './components/Blog';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Header />
//       <Hero />
//       <Programs />
//       <About />
//       {/* <Testimonials /> */}
//       {/* <Pricing /> */}
//       {/* <Blog /> */}
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;


// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProgramDetail from './pages/ProgramDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs/:slug" element={<ProgramDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
