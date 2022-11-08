import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen carousel">
      <Carousel>
        <img
          src="https://lion-coders.com/demo/html/sarchholm-real-estate-template/images/header/header_15.jpg"
          alt="..."
        />
        <img
          src="https://lion-coders.com/demo/html/sarchholm-real-estate-template/images/header/header_11.jpg"
          alt="..."
        />
        <img
          src="https://lion-coders.com/demo/html/sarchholm-real-estate-template/images/header/header_12.jpg"
          alt="..."
        />
        <img
          src="https://lion-coders.com/demo/html/sarchholm-real-estate-template/images/header/header_15.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
