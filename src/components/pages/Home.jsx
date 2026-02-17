import { Link } from "react-router";

import { services } from "../../data/services";
import { testimonials } from "../../data/testimonials";
import { FaLongArrowAltRight, FaStar } from "react-icons/fa";

export default function Home() {
    return (
        <div>
            <section className="py-16 lg:py-24 bg-linear-to-b from-light/30 to-white dark:from-dark dark:to-accent/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl lg:text-4xl text-primary dark:text-secondary mb-6">
                                Meet Your Trusted Tax Professional
                            </h2>
                            <p className="text-lg text-dark/80 dark:text-light/80 mb-4">
                                With over 35 years of experience in accounting and tax preparation, I'm dedicated to 
                                helping small businesses succeed through sound financial management.
                            </p>
                            <p className="text-lg text-dark/80 dark:text-light/80 mb-6">
                                My approach is simple: understand your unique business needs, provide personalized solutions, 
                                and maintain the highest standards of integrity and professionalism.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                                    <span className="text-dark/80 dark:text-light/80">Certified Public Accountant (CPA)</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                                    <span className="text-dark/80 dark:text-light/80">35+ Years of Experience</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                                    <span className="text-dark/80 dark:text-light/80">1000+ Satisfied Clients</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <img
                                src="/cat.jpg"
                                alt="Trusted tax professional"
                                className="w-full h-auto rounded-xl shadow-lg object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 lg:py-24 bg-linear-to-b from-white to-light/30 dark:from-dark dark:to-accent/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.3em] text-primary/70 dark:text-light/70 mb-3">
                            Services
                        </p>
                        <h2 className="text-3xl lg:text-4xl text-primary dark:text-secondary mb-4">
                            Practical, proactive Support
                        </h2>
                        <p className="text-xl text-dark/80 dark:text-light/80 max-w-3xl mx-auto">
                            Choose the help you need today, and scale with services that grow alongside your business.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.slice(0, 3).map((service) => (
                            <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                className="group bg-white dark:bg-accent rounded-lg shadow-lg p-6 border-t-4 border-primary hover:shadow-xl transition-all"
                            >
                                <h3 className="text-2xl font-bold text-primary dark:text-secondary mb-2">
                                    {service.title}
                                </h3>
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
                                    <FaLongArrowAltRight className="relative top-[1.5px] transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>
            <section className="py-16 lg:py-24 bg-linear-to-b from-light/20 to-white dark:from-dark dark:to-accent/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.3em] text-primary/70 dark:text-light/70 mb-3">
                            Testimonials
                        </p>
                        <h2 className="text-3xl lg:text-4xl text-primary dark:text-secondary mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-xl text-dark/80 dark:text-light/80">
                            Don't just take our word for it
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-accent rounded-lg shadow-md p-6 border-t-4 border-primary flex flex-col h-full"
                        >
                            <div className="flex mb-4 text-secondary">
                                {Array.from({ length: testimonial.rating }, (_, i) => (
                                    <FaStar key={i} className="h-5 w-5" />
                                ))}
                            </div>
                            <p className="text-dark/80 dark:text-light/80 mb-4 italic flex-1">"{testimonial.text}"</p>
                            <div className="mt-auto">
                                <p className="text-primary dark:text-secondary">{testimonial.name}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-primary text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-light mb-8">
                        Let's discuss how we can help your business grow. Meet with us during our office hours or schedule a free consultation today.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-6 py-3 bg-secondary hover:bg-accent text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
                    >
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    )
}