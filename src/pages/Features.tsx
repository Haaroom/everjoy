import { useScrollRevealChildren } from '../hooks/useScrollReveal';

export default function Features() {
  const containerRef = useScrollRevealChildren();

  const features = [
    {
      title: 'Natural Ingredients',
      description: 'Organic cocoa, natural sweeteners, no artificial additives.',
    },
    {
      title: 'Handcrafted Quality',
      description: 'Small batch production with attention to detail.',
    },
    {
      title: 'Customizable Flavors',
      description: 'Unique flavors and personalization options.',
    },
    {
      title: 'High Cocoa Content',
      description: 'Rich, intense flavor with 60–90% cocoa solids.',
    },
    {
      title: 'Smooth Texture',
      description: 'Carefully tempered for a glossy finish and satisfying snap.',
    },
    {
      title: 'Allergen-Free Options',
      description: 'Nut-free, gluten-free varieties available.',
    },
    {
      title: 'Eco-Friendly Packaging',
      description: 'Biodegradable or reusable materials.',
    },
    {
      title: 'Health Focused',
      description: 'Low sugar, keto-friendly, antioxidant-rich options.',
    },
    {
      title: 'Limited Editions',
      description: 'Seasonal or festival-themed chocolates.',
    },
    {
      title: 'Ethical Sourcing',
      description: 'Fair-trade or ethically sourced cocoa beans.',
    },
    {
      title: 'Freshness Guaranteed',
      description: 'Made-to-order for maximum freshness.',
    },
    {
      title: 'Bulk Orders Accepted',
      description: 'For parties and events.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5D4037] via-[#4E342E] to-[#3E2723] page-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" ref={containerRef}>
        <div className="bg-[#FFF8E1] rounded-2xl shadow-2xl p-8 md:p-12 mb-12 scroll-reveal card-animate">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6 text-center animate-fade-in-up">
            PRODUCT <span className="text-[#D4AF37]">FEATURES</span>
          </h1>
          <p className="text-xl text-[#5D4037] text-center font-semibold animate-fade-in-up stagger-2">
            Features of the Product
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FFF8E1] rounded-xl p-6 shadow-lg scroll-reveal card-animate border-t-4 border-[#D4AF37]"
            >
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">{feature.title}</h3>
              <p className="text-[#5D4037]">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#FFF8E1] rounded-2xl shadow-2xl p-8 md:p-12 scroll-reveal card-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-8 text-center animate-fade-in-up">
            UNIQUE SELLING PROPOSITION (USP)
          </h2>
          <p className="text-xl text-[#D4AF37] font-semibold text-center mb-8 animate-fade-in-up stagger-2">
            EVERJOY: Pure Indulgence, Consciously Crafted
          </p>
          <p className="text-lg text-[#5D4037] text-center mb-12 max-w-3xl mx-auto animate-fade-in-up stagger-3">
            Our Unique Selling Proposition (USP) sets us apart from industry giants.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-[#6D4C41] to-[#5D4037] text-[#FFF8E1] rounded-xl p-6 scroll-reveal card-animate">
              <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Diverse Product Line</h3>
              <p className="leading-relaxed">
                From classic bars to health-focused, low-sugar, and plant-based options.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#6D4C41] to-[#5D4037] text-[#FFF8E1] rounded-xl p-6 scroll-reveal card-animate">
              <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Clean & Ethical Ingredients</h3>
              <p className="leading-relaxed">
                No animal rennet, no artificial additives; trusted by vegetarians and clean-eating consumers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#6D4C41] to-[#5D4037] text-[#FFF8E1] rounded-xl p-6 scroll-reveal card-animate">
              <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Sustainably Sourced</h3>
              <p className="leading-relaxed">
                Responsibly harvested cocoa, supporting environmental and ethical labor practices.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#6D4C41] to-[#5D4037] text-[#FFF8E1] rounded-xl p-6 scroll-reveal card-animate">
              <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Next-Gen Flavors</h3>
              <p className="leading-relaxed">
                Daring and delicious fusions inspired by global palates.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#D4AF37] to-[#C5A572] rounded-xl p-8 text-center scroll-reveal card-animate">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-4">
              Affordable Premium Quality
            </h3>
            <p className="text-lg text-[#3E2723] leading-relaxed">
              Luxury chocolate experience at accessible prices, making indulgence available to everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
