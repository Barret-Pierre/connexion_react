import "./ErrorPage.modules.scss";

function ErrorPage() {
  return (
    <main>
      <section className="error-section">
        <img
          src="/connexion_react/404.png"
          alt="404 Not found picture"
          className="error-picture"
        />
      </section>
    </main>
  );
}
export default ErrorPage;
