import { Nav, NavLink } from "@/components/Nav"

export default function AdminLaout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Nav>
        <NavLink href={"/admin"}>Dashboard</NavLink>
        <NavLink href={"/admin/products"}>Products</NavLink>
        <NavLink href={"/admin/users"}>Costumers</NavLink>
        <NavLink href={"/admin/orders"}>Sales</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  )
}
