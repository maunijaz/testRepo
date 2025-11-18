import { FaHandshake, FaUserShield, FaChartLine, FaHeadset } from 'react-icons/fa';

const values = [
  {
    icon: FaUserShield,
    title: "Trust & Security",
    description: "We prioritize the security of your data and vehicles, ensuring peace of mind through advanced encryption and reliable tracking systems."
  },
  {
    icon: FaHandshake,
    title: "Customer First",
    description: "Our commitment to customer satisfaction drives every decision we make, from product development to after-sales support."
  },
  {
    icon: FaChartLine,
    title: "Innovation",
    description: "We continuously evolve our technology to provide cutting-edge solutions that meet the changing needs of our customers."
  },
  {
    icon: FaHeadset,
    title: "24/7 Support",
    description: "Our dedicated support team is always available to help you with any questions or technical assistance you need."
  }
];

const CoreValues = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl relative after:content-[''] after:block after:w-24 after:h-1 after:rounded-full after:bg-brand-500 after:mx-auto after:mt-4">
            Our Core Values
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600">
            These principles guide everything we do and shape how we serve our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 transition duration-300 bg-white rounded-2xl border border-brand-100 shadow-sm hover:shadow-lg hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-700 ring-1 ring-brand-200">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {value.title}
              </h3>
              <p className="mt-2 text-slate-700">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;