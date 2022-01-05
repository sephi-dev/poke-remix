import { FunctionComponent } from "react";

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <section className="fixed inset-5 p-5">
      {children}
   </section>
  )
}