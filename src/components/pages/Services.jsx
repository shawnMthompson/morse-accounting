import { Link } from "react-router";
import { services } from "../../data/services";

import { FaLongArrowAltRight } from "react-icons/fa";

export default function Services() {
  return (
    <main className="min-h-screen bg-linear-to-b from-light/20 to-white dark:from-dark dark:to-accent/20">
      <div className="bg-primary text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-light">
            Choose the support you need. Each service has its own detailed page.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group bg-white dark:bg-accent rounded-lg shadow-lg p-6 border-t-4 border-primary hover:shadow-xl transition-all"
            >
              <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-2">
                {service.title}
              </h2>
              <p className="text-dark/80 dark:text-light/80 mb-4">
                {service.summary}
              </p>
              <ul className="space-y-2 text-dark/80 dark:text-light/80">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-secondary relative top-[1.5px]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center space-x-2 mt-6 text-primary group-hover:text-secondary font-semibold">
                <span>View details</span>
                <FaLongArrowAltRight className="relative top-[1.5px] transition-transform group-hover:translate-x-1"/>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
