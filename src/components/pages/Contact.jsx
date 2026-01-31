import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
    return (
        <main className="min-h-screen bg-linear-to-b from-light/20 to-white dark:from-dark dark:to-accent/20">
        {/* Hero Section */}
        <div className="bg-primary text-white py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch Today</h1>
            <p className="text-xl text-light">We're here to help with all of your accounting needs!</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-accent rounded-lg shadow-lg p-8 border-t-4 border-primary">
              <h2 className="font-bold text-3xl mb-6 text-primary dark:text-secondary">Send Us a Message</h2>
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;
                  if (form.checkValidity()) {
                    alert(
                      "Form submitted successfully... just kidding, this hasn't been implemented yet :)"
                    );
                  } else {
                    alert("Please fill out all required fields correctly.");
                  }
                }}
              >
                <div>
                  <label className="block text-sm font-medium mb-2 text-dark dark:text-light">
                    Full Name *
                  </label>
                  <input
                    className="w-full p-3 border-2 border-secondary/30 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-white dark:bg-dark dark:text-white"
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-dark dark:text-light">
                    Email Address *
                  </label>
                  <input
                    className="w-full p-3 border-2 border-secondary/30 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-white dark:bg-dark dark:text-white"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-dark dark:text-light">
                    Phone Number
                  </label>
                  <input
                    className="w-full p-3 border-2 border-secondary/30 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-white dark:bg-dark dark:text-white"
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="123-456-7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-dark dark:text-light">
                    Subject *
                  </label>
                  <input
                    className="w-full p-3 border-2 border-secondary/30 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-white dark:bg-dark dark:text-white"
                    type="text"
                    placeholder="Tax Consultation, Bookkeeping, etc."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-dark dark:text-light">
                    Message *
                  </label>
                  <textarea
                    className="w-full p-3 border-2 border-secondary/30 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all bg-white dark:bg-dark dark:text-white resize-none"
                    placeholder="Tell us how we can help you..."
                    rows="5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-4 bg-primary hover:bg-accent text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-accent rounded-lg shadow-lg p-8 border-t-4 border-secondary">
                <h2 className="font-bold text-3xl mb-6 text-primary dark:text-secondary">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
                      <MdEmail size="1.5em"/>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-dark dark:text-light mb-1">Email</h3>
                      <a href="mailto:morseaccountingITS@gmail.com" className="text-primary hover:text-secondary dark:hover:text-secondary transition-colors">
                        morseaccountingITS@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
                      <FaPhoneAlt size="1.5em"/>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-dark dark:text-light mb-1">Phone</h3>
                      <a href="tel:207-487-5099" className="text-primary hover:text-secondary dark:hover:text-secondary transition-colors">
                        207-487-5099
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg">
                      <FaLocationDot size="1.5em"/>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-dark dark:text-light mb-1">Office Location</h3>
                      <p className="text-dark/80 dark:text-light/80">
                        11 North Road<br />
                        Detroit, ME
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-secondary/20 dark:bg-primary/20 rounded-lg shadow-md p-8 border-l-4 border-secondary">
                <h3 className="font-bold text-2xl mb-4 text-primary dark:text-secondary">Business Hours</h3>
                <div className="space-y-2 text-dark dark:text-light">
                  <div className="flex justify-between">
                    <span className="font-medium">Tuesday and Thursday</span>
                    <span>6:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}