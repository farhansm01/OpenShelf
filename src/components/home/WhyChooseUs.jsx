import { FaBookOpen, FaLock, FaMobileAlt, FaSyncAlt } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaBookOpen className="text-4xl text-primary" />,
    title: "1000+ Books",
    description:
      "Explore a vast collection across Story, Tech, and Science categories.",
  },
  {
    id: 2,
    icon: <FaLock className="text-4xl text-primary" />,
    title: "Secure & Private",
    description:
      "Your data is protected with BetterAuth — industry grade security.",
  },
  {
    id: 3,
    icon: <FaMobileAlt className="text-4xl text-primary" />,
    title: "Read Anywhere",
    description: "Access your borrowed books from any device, anytime.",
  },
  {
    id: 4,
    icon: <FaSyncAlt className="text-4xl text-primary" />,
    title: "New Arrivals Weekly",
    description:
      "Fresh titles added every week so there's always something new.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-base-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-neutral text-center mb-2">
          Why Choose OpenShelf?
        </h2>
        <p className="text-center opacity-50 text-sm mb-10">
          Everything you need in a modern digital library
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-base-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="font-bold text-neutral mb-2">{feature.title}</h3>
              <p className="text-sm opacity-60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
