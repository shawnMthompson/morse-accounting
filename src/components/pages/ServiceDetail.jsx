import { Link, useParams } from "react-router";
import { getServiceBySlug } from "../../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-linear-to-b from-light/20 to-white dark:from-dark dark:to-accent/20">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Service not found
          </h1>
          <p className="text-dark/80 dark:text-light/80 mb-8">
            The service you are looking for doesn’t exist.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-accent transition-all"
          >
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-light/20 to-white dark:from-dark dark:to-accent/20">
      <div className="bg-primary text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-light uppercase tracking-widest mb-3">
            Service Detail
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {service.title}
          </h1>
          <p className="text-xl text-light">{service.summary}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div className="space-y-8">
            <section className="bg-white dark:bg-accent rounded-lg shadow-lg p-8 border-l-4 border-primary">
              <h2 className="text-3xl font-bold text-primary dark:text-secondary mb-4">
                What’s included
              </h2>
              <ul className="space-y-3 text-dark/80 dark:text-light/80">
                {service.details.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-secondary relative top-[1.5px]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-secondary/15 dark:bg-primary/20 rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-primary dark:text-secondary mb-4">
                Why clients choose us
              </h3>
              <ul className="grid gap-3 md:grid-cols-2 text-dark/80 dark:text-light/80">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-block h-2 w-2 rounded-full bg-primary relative top-[1.5px]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="bg-white dark:bg-accent rounded-lg shadow-lg p-6 border-t-4 border-secondary">
              <h3 className="text-2xl font-bold text-primary dark:text-secondary mb-3">
                Ready to get started?
              </h3>
              <p className="text-dark/80 dark:text-light/80 mb-6">
                We'll put together a plan tailored to your needs and timeline.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-accent transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>

            <div className="bg-white/70 dark:bg-accent/70 rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold text-primary dark:text-secondary mb-3">
                Explore more services
              </h4>
              <Link
                to="/services"
                className="text-primary hover:text-secondary font-semibold"
              >
                Back to Services
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
