import MainNavbar from "./MainNavbar.component";
import Footer from "./Footer.component";
export default function Layout(props: any) {
  return (
    <>
      <MainNavbar />
      {props.children}
      <Footer />
    </>
  );
}
