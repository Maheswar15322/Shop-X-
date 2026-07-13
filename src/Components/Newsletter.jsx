import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">

      <div className="newsletter-content">

        <span className="newsletter-tag">
          📩 Stay Updated
        </span>

        <h2>
          Subscribe To Our Newsletter
        </h2>

        <p>
          Get the latest product launches, exclusive discounts,
          and special offers delivered straight to your inbox.
        </p>

        <form className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email address"
          />

          <button type="submit">
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
};

export default Newsletter;