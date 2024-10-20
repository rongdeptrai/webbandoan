import React ,{ useState }from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Features from '../components/Features';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import '../main.css'; // Import global styles
function Home() {
    const [isSignInOpen, setSignInOpen] = useState(false);
    const [isSignUpOpen, setSignUpOpen] = useState(false);
  
    const openSignIn = () => setSignInOpen(true);
    const closeSignIn = () => setSignInOpen(false);
  
    const openSignUp = () => setSignUpOpen(true);
    const closeSignUp = () => setSignUpOpen(false);
  return (
    <div className="bg-white text-black">
      <Header openSignIn={openSignIn} openSignUp={openSignUp} />

      <Modal isOpen={isSignInOpen} closeModal={closeSignIn}>
        <SignInForm />
      </Modal>

      <Modal isOpen={isSignUpOpen} closeModal={closeSignUp}>
        <SignUpForm />
      </Modal>
      <Nav />
      <Banner />
      <Features />
      <Menu />
      <Footer />
    </div>
  );
}

export default Home;
