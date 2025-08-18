import { useState } from "react";
import { toast } from "react-toastify";
import Select from "react-select";

const Contact = () => {
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);

  const projectTypes = [
    { value: "Web-App", label: "Web Application" },
    { value: "Ecommerce", label: "E-commerce" },
    { value: "LMS", label: "Learning Management System" },
    { value: "Dashboards", label: "Business Dashboard" },
    { value: "Other", label: "Other" },
  ];

  const budgets = [
    { value: "$10K-$25K", label: "$10,000 - $25,000" },
    { value: "$25K-$50K", label: "$25,000 - $50,000" },
    { value: "$50K-$100K", label: "$50,000 - $100,000" },
    { value: "$100K+", label: "$100,000+" },
    { value: "unsure", label: "Not sure yet" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!projectType) {
      toast.error("Please select a project type.");
      return;
    }
    if (!budget) {
      toast.error("Please select a budget range.");
      return;
    }

    const formData = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      company: e.target.company.value.trim(),
      projectType,
      otherProjectType: e.target.otherProjectType?.value || "",
      budget,
      message: e.target.message.value.trim(),
    };

    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Message sent!");
        e.target.reset();
        setProjectType("");
        setBudget("");
      } else {
        toast.error(data.message || "Failed to send.");
      }
    } catch {
      toast.error("⚠️ Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-dark to-primary text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to ship faster?
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Let's discuss how we can help you build and deploy your next
              project.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 fade-in">
              <form
                id="contact-form"
                data-aos="fade-up"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium opacity-80 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all placeholder-white/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium opacity-80 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all placeholder-white/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium opacity-80 mb-1"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all placeholder-white/50"
                    placeholder="Your company (optional)"
                  />
                </div>
                <div>
                  <label
                    htmlFor="project-type"
                    className="block text-sm font-medium opacity-80 mb-1"
                  >
                    Project Type
                  </label>
                  <Select
                    options={projectTypes}
                    value={
                      projectTypes.find((p) => p.value === projectType) || null
                    }
                    onChange={(option) => setProjectType(option?.value ?? null)}
                    placeholder="Select project type"
                    isSearchable={false}
                    styles={{
                      control: (base) => ({
                        ...base,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "0.5rem",
                        padding: "6px 4px",
                        color: "white",
                      }),
                      menu: (base) => ({
                        ...base,
                        backgroundColor: "rgba(15, 23, 42, 0.95)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "0.5rem",
                        marginTop: "4px",
                      }),
                      option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isFocused
                          ? "rgba(255,255,255,0.15)"
                          : "transparent",
                        color: "white",
                        cursor: "pointer",
                        padding: "10px 12px",
                      }),
                      singleValue: (base) => ({
                        ...base,
                        color: "white",
                      }),
                      placeholder: (base) => ({
                        ...base,
                        color: "rgba(255,255,255,0.6)",
                      }),
                    }}
                  />
                  {projectType === "Other" && (
                    <div className="mt-3">
                      <input
                        type="text"
                        id="other-project-type"
                        name="otherProjectType"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
        focus:border-white/50 focus:ring-2 focus:ring-white/20 
        focus:outline-none transition-all placeholder-white/50"
                        placeholder="Please specify"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium opacity-80 mb-1"
                  >
                    Budget Range
                  </label>

                  <Select
                    options={budgets}
                    value={budget ? { value: budget, label: budget } : null}
                    onChange={(options) => setBudget(options.value)}
                    isSearchable={false}
                    placeholder="Select budget range"
                    className="text-white"
                    styles={{
                      control: (base) => ({
                        ...base,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "0.5rem",
                        padding: "6px 4px",
                        color: "white",
                      }),
                      menu: (base) => ({
                        ...base,
                        backgroundColor: "rgba(15, 23, 42, 0.95)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "0.5rem",
                        marginTop: "4px",
                      }),
                      option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isFocused
                          ? "rgba(255,255,255,0.15)"
                          : "transparent",
                        color: "white",
                        cursor: "pointer",
                        padding: "10px 12px",
                      }),
                      singleValue: (base) => ({
                        ...base,
                        color: "white",
                      }),
                      placeholder: (base) => ({
                        ...base,
                        color: "rgba(255,255,255,0.6)",
                      }),
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium opacity-80 mb-1"
                  >
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none transition-all placeholder-white/50"
                    placeholder="Tell us about your project..."
                    defaultValue={""}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full font-medium py-3 px-6 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-white text-primary hover:bg-opacity-90"
                    }`}
                  >
                    {loading && (
                      <svg
                        className="animate-spin h-5 w-5 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="6"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                    )}
                    {loading ? "Sending..." : "Get a proposal"}
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:w-1/2 fade-in-delay-1">
              <div className="bg-white/10 rounded-xl p-8 h-full border border-white/20 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <i className="fas fa-envelope text-accent" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Email Us</h4>
                      <a
                        href="mailto:hello@pentara.dev"
                        className="opacity-80 hover:opacity-100 transition-all"
                      >
                        hello@pentara.dev
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <i className="fas fa-map-marker-alt text-accent" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Based In</h4>
                      <p className="opacity-80">
                        San Francisco, CA &amp; Remote Worldwide
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <i className="fas fa-clock text-accent" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Availability</h4>
                      <p className="opacity-80">
                        Monday - Friday: 9AM - 5PM PST
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-6">
                    Schedule a Call
                  </h3>
                  <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <p className="mb-4 opacity-80">
                      Prefer to talk directly? Book a 30-minute discovery call
                      with our team.
                    </p>
                    <button className="w-full bg-accent hover:bg-opacity-90 text-dark font-medium py-3 px-6 rounded-lg transition-all">
                      <i className="fas fa-calendar-alt mr-2" /> Book a Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
