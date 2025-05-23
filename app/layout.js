import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";

export const metadata = {
  title: "StickTech",
  description: "A store for programmers and productivity fiends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <div id="portal"></div>
      <div id="app">
        <header>
          <div className="header-content">
            <Link href={"/"}>
              <h1>StickTech</h1>
            </Link>
            <h5 className="mid-text"> - Cool stuff for cool people - </h5>
            <Cart />
          </div>
        </header>

        <main> {children}</main>
        <div className="hr" />
        <footer>
          <div className="email-container">
            <h5>
              Get a sneak peak at new additions to the store, special offers,
              and so much more.
            </h5>
            <EmailInput />
          </div>
          <div className="link-container">
            <div>
              <h3>Other Projects</h3>
              <Link href={"/"}>The FitPrint</Link>
              <Link href={"/"}>SubsTrack</Link>
            </div>
            <div>
              <h3>Store</h3>
              <Link href={"/"}>Home</Link>
              <Link href={"/cart"}>Cart</Link>
            </div>
            <div>
              <h3>Support</h3>
              <Link href={"/contact"}>Contact</Link>
              <Link href={"/FAQ"}>FAQs</Link>
            </div>
          </div>
          <div className="socials">
            <p>
              ©{" "}
              <a href="https://www.moamaan.xyz" target="_blank">
                Mohammed Amaan
              </a>{" "}
              2025
              <br />
              Built with NextJS &{" "}
              <a target="_blank" href="https://www.fantacss.smoljames.com">
                FantaCSS
              </a>{" "}
              🔥
            </p>
            <div className="social-links">
              <Link href={"https://github.com/mo-amaan"} target="_blank">
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/maamaan/"}
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </div>
          </div>
        </footer>
      </div>
      <body></body>
    </html>
  );
}
