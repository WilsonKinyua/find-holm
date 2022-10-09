import { Navbar, Dropdown, Avatar } from "flowbite-react";
export default function MainNavbar() {
  return (
    <Navbar className="drop-shadow-xl">
      <Navbar.Brand href="/">
        <img
          src="https://lion-coders.com/demo/html/sarchholm-real-estate-template/images/logo-blue.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://avatars.githubusercontent.com/u/44901716?v=4"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Wilson Kinyua</span>
            <span className="block truncate text-sm font-medium">
              name@mail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="m-5 uppercase text-xs">
        <Navbar.Link href="/" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/">Properties</Navbar.Link>
        <Navbar.Link href="/">Agents</Navbar.Link>
        <Navbar.Link href="/">Membership packages</Navbar.Link>
        <Navbar.Link href="/">About us</Navbar.Link>
        <Navbar.Link href="/">Contact us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
