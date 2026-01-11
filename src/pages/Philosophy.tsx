import { useScrollRevealChildren } from '../hooks/useScrollReveal';

export default function Philosophy() {
  const containerRef = useScrollRevealChildren();

  const philosophies = [
    {
      number: '1',
      title: 'The Production Concept',
      description: 'Consumers favor products that are widely available and affordable. Focus on efficiency and mass production.',
    },
    {
      number: '2',
      title: 'The Product Concept',
      description: 'Consumers prefer products that offer the most quality, performance, and innovative features.',
    },
    {
      number: '3',
      title: 'The Selling Concept',
      description: 'Consumers will not buy enough of the product unless the company undertakes aggressive selling and promotion.',
    },
    {
      number: '4',
      title: 'The Marketing Concept',
      description: 'Achieving organizational goals depends on knowing the needs and wants of target markets and delivering satisfaction better than competitors.',
    },
    {
      number: '5',
      title: 'The Societal Marketing Concept',
      description: 'Marketing decisions should consider consumer wants, company requirements, consumer long-term interests, and society\'s long-term interests.',
      highlight: true,
    },
  ];

  const targetCustomers = [
    {
      age: 'Children (5-12)',
      benefit: 'Usually, children are allowed only 10-15g per week. Our product allows the child to take around 35-40g per week and stay healthy.',
    },
    {
      age: 'Teenagers (13-19)',
      benefit: 'Comfort and indulgence for everyday moments, promoting mood enhancement and contributing to healthier skin.',
    },
    {
      age: 'Young Adults (19-25)',
      benefit: 'Premium quality for gifting and special occasions, packed with beneficial antioxidants and offering a natural energy boost.',
    },
    {
      age: 'Adults (26-60)',
      benefit: 'Health-conscious options for mindful enjoyment, contributing to heart health and providing stress relief.',
    },
    {
      age: 'Seniors (60+)',
      benefit: 'Nostalgia and wellness-focused indulgence, aiding in bone health and supporting memory function.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5D4037] via-[#4E342E] to-[#3E2723] page-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" ref={containerRef}>
        <div className="bg-[#FFF8E1] rounded-2xl shadow-2xl p-8 md:p-12 mb-12 scroll-reveal card-animate">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6 text-center animate-fade-in-up">
            PHILOSOPHY OF <span className="text-[#D4AF37]">MARKETING</span>
          </h1>
          <p className="text-lg text-[#5D4037] leading-relaxed text-center max-w-4xl mx-auto animate-fade-in-up stagger-2">
            Marketing management philosophies guide businesses in their marketing efforts. Choosing the right philosophy is crucial as it helps identify and fulfill customer needs while benefiting the organization.
          </p>
        </div>

        <section className="mb-12">
          <div className="space-y-6">
            {philosophies.map((philosophy) => (
              <div
                key={philosophy.number}
                className={`rounded-xl p-6 md:p-8 shadow-lg transition-all hover:scale-[1.02] scroll-reveal card-animate ${
                  philosophy.highlight
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#C5A572] border-4 border-[#FFF8E1]'
                    : 'bg-[#FFF8E1]'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold ${
                      philosophy.highlight
                        ? 'bg-[#3E2723] text-[#D4AF37]'
                        : 'bg-[#D4AF37] text-[#3E2723]'
                    }`}
                  >
                    {philosophy.number}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-bold mb-3 ${
                        philosophy.highlight ? 'text-[#3E2723]' : 'text-[#3E2723]'
                      }`}
                    >
                      {philosophy.title}
                    </h3>
                    <p
                      className={`text-lg leading-relaxed ${
                        philosophy.highlight ? 'text-[#3E2723]' : 'text-[#5D4037]'
                      }`}
                    >
                      {philosophy.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#FFF8E1] rounded-2xl shadow-2xl p-8 md:p-12 scroll-reveal card-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-4 text-center animate-fade-in-up">
            OUR <span className="text-[#D4AF37]">PHILOSOPHY</span>
          </h2>
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#C5A572] rounded-xl p-6 mb-8 animate-fade-in-up stagger-2">
            <p className="text-lg md:text-xl text-[#3E2723] font-semibold text-center leading-relaxed">
              Our company follows a Societal Concept Philosophy, ensuring we prioritize societal welfare alongside consumer satisfaction and market share. This benefits society, the environment, and our business.
            </p>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-6 text-center animate-fade-in-up stagger-3">
            Target Customers: <span className="text-[#D4AF37]">[30-40% more healthy]</span>
          </h3>

          <div className="space-y-4">
            {targetCustomers.map((customer, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#6D4C41] to-[#5D4037] text-[#FFF8E1] rounded-xl p-6 hover:shadow-xl transition-shadow scroll-reveal card-animate"
              >
                <div className="flex items-center mb-3">
                  <div className="bg-[#D4AF37] text-[#3E2723] w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-bold">{customer.age}</h4>
                </div>
                <p className="text-[#FFF8E1]/90 pl-11">{customer.benefit}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
