import Nav from "components/theme/nav";

export default function Layout({ children }, { props }) {
  return (
    <>
      <Nav />
        <div style={{ height: "120px" }} />
      <section>
        {children}
      </section>
    </>
  );
}
