import background from '../../../public/login-bg.jpg'
import LoginModal from '@/src/components/organisms/LoginModal';

export default function PaginaLogin() {

  return (
    <main 
      className="flex flex-col items-center justify-center min-h-[70vh] bg-no-repeat bg-cover bg-center h-screen"
      style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background.src})`}}
    >
      <LoginModal />
  
    </main>
  );
}