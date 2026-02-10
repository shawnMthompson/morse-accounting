import { Link } from "react-router";

import { testimonials } from "../../data/testimonials";
import { FaStar } from "react-icons/fa";

export default function Home() {
    return (
        <div>
            <section className="py-16 lg:py-24 bg-linear-to-b from-light/20 to-white dark:from-dark dark:to-accent/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
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

            <section className="py-16 dark:bg-primary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl lg:text-4xl mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
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