import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { OrderForm } from "./components/OrderForm";
import { ConfirmationPage } from "./components/ConfirmationPage";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import PasswordProtection from "./components/PasswordProtection";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [orderData, setOrderData] = useState(null);

  const handleNavigate = (page: string, data?: any) => {
    setCurrentPage(page);
    if (data) {
      setOrderData(data);
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'order':
        return <OrderForm onNavigate={handleNavigate} />;
      case 'confirmation':
        return <ConfirmationPage orderData={orderData} onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <PasswordProtection>
      <div className="min-h-screen bg-background">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main>
          {renderCurrentPage()}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </PasswordProtection>
  );
}