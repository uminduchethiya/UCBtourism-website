import React from 'react';
import Header from '../components/Header'
import Footer from "../../shared/components/Footer";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}