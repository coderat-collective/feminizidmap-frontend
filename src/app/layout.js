import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "react-bootstrap";
import Navigation from "./Navigation.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FeminizidMap.org",
  description: "A research project on femi(ni)cides in Germany",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <img src="/title.svg" className="pt-4 d-none d-lg-block w-100" />
          <Navigation />
          <div className="my-4">
            {children}
          </div>
        </Container>
      </body>
    </html>
  );
}
