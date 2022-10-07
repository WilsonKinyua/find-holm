import Navbar from "./Navbar.component";
import Footer from "./Footer.component";
export default function Layout(props: any) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
}
