import { Nav, NavLink } from "@/components/Nav";

// AdminLayout component defines the layout structure for the admin section of the website
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Renders the navigation bar using the Nav component */}
      <Nav>
        {/* Renders NavLink components for different admin sections */}
        <NavLink href='/admin'>Dashboard</NavLink> {/* NavLink for the Dashboard section */}
        <NavLink href='/admin/products'>Products</NavLink> {/* NavLink for the Products section */}
        <NavLink href='/admin/users'>Customers</NavLink> {/* NavLink for the Customers section */}
        <NavLink href='/admin/orders'>Sales</NavLink> {/* NavLink for the Sales section */}
      </Nav>
      {/* Renders the main content container with margin */}
      <div className='container my-6'>{children}</div>
    </>
  );
}
