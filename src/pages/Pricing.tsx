import { useScrollRevealChildren } from '../hooks/useScrollReveal';

export default function Pricing() {
  const containerRef = useScrollRevealChildren();

  const pricingData = [
    { weight: '50g', dark: 59, white: 66, fruitNut: 72, darkWhite: 59 },
    { weight: '100g', dark: 109, white: 114, fruitNut: 123, darkWhite: 109 },
    { weight: '200g', dark: 179, white: 214, fruitNut: 239, darkWhite: 204 },
    { weight: '500g', dark: 419, white: 492, fruitNut: 559, darkWhite: 466 },
    { weight: '1kg (bulk)', dark: 787, white: 919, fruitNut: 1049, darkWhite: 819 },
  ];

  const fourPs = [
    {
      number: '1',
      title: 'Product',
      description: 'The item or service must satisfy a consumer\'s need or desire.',
    },
    {
      number: '2',
      title: 'Price',
      description: 'An item should be sold at the right price, meeting consumer expectations.',
    },
    {
      number: '3',
      title: 'Promotion',
      description: 'The public needs to be informed about the product and its features.',
    },
    {
      number: '4',
      title: 'Place',
      description: 'The location where the product can be purchased is important for optimizing sales.',
    },
  ];

  const factors = [
    'Raw materials cost',
    'Transportation charges',
    'Labor cost',
    'Competitor\'s price',
    'GST rates',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5D4037] via-[#4E342E] to-[#3E2723] page-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" ref={containerRef}>
        <div className="bg-[#FFF8E1] rounded-2xl shadow-2xl p-8 md:p-12 mb-12 scroll-reveal card-animate">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6 text-center animate-fade-in-up">
            PRICING <span className="text-[#D4AF37]">STRATEGY</span>
          </h1>
          <p className="text-lg text-[#5D4037] leading-relaxed text-center max-w-4xl mx-auto animate-fade-in-up stagger-2">
            Pricing is crucial for achieving objectives like profit maximization and market penetration. Our profit margin is set at 25% from the cost of production.
          </p>
        </div>

        <section className="mb-12 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-8 text-center animate-fade-in-up">
            MARKETING MIX: THE 4 P's
          </h2>
          <p className="text-lg text-[#FFF8E1] text-center mb-8 max-w-3xl mx-auto animate-fade-in-up stagger-2">
            The marketing mix, or the four P's (Product, Price, Place, Promotion), are key elements of a marketing strategy. Businesses maximize product recognition and sales by focusing on these components.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {fourPs.map((p) => (
              <div
                key={p.number}
                className="bg-[#FFF8E1] rounded-xl p-6 shadow-lg scroll-reveal card-animate"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D4AF37] text-[#3E2723] flex items-center justify-center text-2xl font-bold">
                    {p.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#3E2723] mb-2">{p.title}</h3>
                    <p className="text-[#5D4037]">{p.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#FFF8E1] rounded-2xl shadow-2xl p-6 md:p-12 mb-12 scroll-reveal card-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-6 text-center animate-fade-in-up">
            Pricing by Quantity & Flavor
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#3E2723] text-[#FFF8E1]">
                  <th className="p-4 text-left font-bold">Weight</th>
                  <th className="p-4 text-center font-bold">Dark Chocolate</th>
                  <th className="p-4 text-center font-bold">White Chocolate</th>
                  <th className="p-4 text-center font-bold">Fruit & Nut</th>
                  <th className="p-4 text-center font-bold">Dark & White</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-[#6D4C41]/10' : 'bg-white'}
                  >
                    <td className="p-4 font-semibold text-[#3E2723]">{row.weight}</td>
                    <td className="p-4 text-center text-[#5D4037]">₹{row.dark}</td>
                    <td className="p-4 text-center text-[#5D4037]">₹{row.white}</td>
                    <td className="p-4 text-center text-[#5D4037]">₹{row.fruitNut}</td>
                    <td className="p-4 text-center text-[#5D4037]">₹{row.darkWhite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-[#5D4037] mt-6 text-center italic">
            <strong>Note:</strong> White and Fruit & Nut chocolates are priced higher due to 28% GST.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#FFF8E1] rounded-xl p-8 shadow-lg scroll-reveal card-animate">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-6 animate-fade-in-up">
              Factors Affecting <span className="text-[#D4AF37]">Price</span>
            </h3>
            <ul className="space-y-3">
              {factors.map((factor, index) => (
                <li key={index} className="flex items-center space-x-3 scroll-reveal">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                  <span className="text-lg text-[#5D4037]">{factor}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#D4AF37] to-[#C5A572] rounded-xl p-8 shadow-lg flex flex-col justify-center scroll-reveal card-animate">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-4 text-center animate-fade-in-up">
              PROFIT MARGIN & DISTRIBUTION
            </h3>
            <p className="text-lg text-[#3E2723] leading-relaxed text-center animate-fade-in-up stagger-2">
              Our profit margin is set at 25% of the production cost, balancing competitive pricing with sustainable growth.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
