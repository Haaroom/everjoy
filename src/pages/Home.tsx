import { useScrollRevealChildren } from '../hooks/useScrollReveal';

export default function Home() {
  const containerRef = useScrollRevealChildren();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5D4037] via-[#4E342E] to-[#3E2723] page-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" ref={containerRef}>
        <section className="bg-[#FFF8E1] rounded-2xl shadow-2xl p-8 md:p-12 mb-12 scroll-reveal card-animate">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3E2723] mb-6 text-center animate-fade-in-up">
            INTRODUCTION OF <span className="text-[#D4AF37]">MARKETING</span>
          </h1>
          <p className="text-lg md:text-xl text-[#5D4037] leading-relaxed text-center max-w-4xl mx-auto animate-fade-in-up stagger-2">
            Marketing is a social process where individuals and groups obtain what they need and want by creating, offering, and freely exchanging valuable products and services with others.
          </p>
        </section>

        <section className="mb-12 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-8 text-center animate-fade-in-up">
            FEATURES OF MARKETING
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FFF8E1] rounded-xl p-6 shadow-lg border-l-4 border-[#D4AF37] scroll-reveal card-animate">
              <h3 className="text-2xl font-bold text-[#3E2723] mb-3">Needs and Wants</h3>
              <p className="text-[#5D4037]">
                Marketing helps individuals and groups fulfill their needs and desires.
              </p>
            </div>
            <div className="bg-[#FFF8E1] rounded-xl p-6 shadow-lg border-l-4 border-[#D4AF37] scroll-reveal card-animate">
              <h3 className="text-2xl font-bold text-[#3E2723] mb-3">Market Offering</h3>
              <p className="text-[#5D4037]">
                A complete product or service offer with specific features, price, and availability.
              </p>
            </div>
            <div className="bg-[#FFF8E1] rounded-xl p-6 shadow-lg border-l-4 border-[#D4AF37] scroll-reveal card-animate">
              <h3 className="text-2xl font-bold text-[#3E2723] mb-3">Customer Value</h3>
              <p className="text-[#5D4037]">
                Facilitates the exchange of goods and services, creating value for customers.
              </p>
            </div>
            <div className="bg-[#FFF8E1] rounded-xl p-6 shadow-lg border-l-4 border-[#D4AF37] scroll-reveal card-animate">
              <h3 className="text-2xl font-bold text-[#3E2723] mb-3">Exchange Mechanism</h3>
              <p className="text-[#5D4037]">
                Involves the exchange of goods and services for money or other valuable considerations.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#FFF8E1] rounded-2xl shadow-2xl p-8 md:p-12 mb-12 scroll-reveal card-animate">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-4 text-center animate-fade-in-up">
            ABOUT <span className="text-[#D4AF37]">EVERJOY</span> CHOCOLATES
          </h2>
          <p className="text-xl md:text-2xl text-[#D4AF37] font-semibold text-center mb-6 animate-fade-in-up stagger-2">
            "Handcrafted goodness for every age"
          </p>
          <p className="text-lg text-[#5D4037] leading-relaxed mb-8 text-center max-w-3xl mx-auto animate-fade-in-up stagger-3">
            Everjoy offers high-quality chocolates, a common expression of love and joy, with a core motive of healthiness and customer well-being.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#6D4C41] to-[#5D4037] text-[#FFF8E1] p-6 rounded-xl text-center scroll-reveal card-animate transition-transform-smooth">
              <h4 className="text-lg font-bold mb-2">Healthiness is Happiness</h4>
              <p className="text-sm opacity-90">Assuring consumers about the healthiness of our chocolates</p>
            </div>
            <div className="bg-gradient-to-br from-[#6D4C41] to-[#5D4037] text-[#FFF8E1] p-6 rounded-xl text-center scroll-reveal card-animate transition-transform-smooth">
              <h4 className="text-lg font-bold mb-2">Quality is Essential</h4>
              <p className="text-sm opacity-90">Maintaining the highest possible quality standards</p>
            </div>
            <div className="bg-gradient-to-br from-[#6D4C41] to-[#5D4037] text-[#FFF8E1] p-6 rounded-xl text-center scroll-reveal card-animate transition-transform-smooth">
              <h4 className="text-lg font-bold mb-2">Information is Your Right</h4>
              <p className="text-sm opacity-90">Providing complete product information to customers</p>
            </div>
            <div className="bg-gradient-to-br from-[#6D4C41] to-[#5D4037] text-[#FFF8E1] p-6 rounded-xl text-center scroll-reveal card-animate transition-transform-smooth">
              <h4 className="text-lg font-bold mb-2">Reasonable Price</h4>
              <p className="text-sm opacity-90">Offering fine chocolates at an accessible price</p>
            </div>
          </div>
        </section>

        <section className="scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-8 text-center animate-fade-in-up">
            Why Chocolates?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#FFF8E1] rounded-xl p-6 shadow-lg scroll-reveal card-animate">
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">High & Stable Demand</h3>
              <p className="text-[#5D4037]">
                Chocolates have consistent global demand, often linked to celebrations and emotions.
              </p>
            </div>
            <div className="bg-[#FFF8E1] rounded-xl p-6 shadow-lg scroll-reveal card-animate">
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">Emotional & Impulse Purchases</h3>
              <p className="text-[#5D4037]">
                They trigger joy and comfort, leading to frequent impulse buys, especially at point-of-sale.
              </p>
            </div>
            <div className="bg-[#FFF8E1] rounded-xl p-6 shadow-lg scroll-reveal card-animate">
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">Product Versatility</h3>
              <p className="text-[#5D4037]">
                Endless customization options: dark, milk, white, infused, sugar-free, vegan, and seasonal editions.
              </p>
            </div>
            <div className="bg-[#FFF8E1] rounded-xl p-6 shadow-lg scroll-reveal card-animate">
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">Branding & Gifting</h3>
              <p className="text-[#5D4037]">
                Strong branding potential and a popular gift for holidays, birthdays, and special occasions.
              </p>
            </div>
            <div className="bg-[#FFF8E1] rounded-xl p-6 shadow-lg scroll-reveal card-animate">
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">Scalability</h3>
              <p className="text-[#5D4037]">
                Production can start small and scale up with demand, allowing for easy entry and growth.
              </p>
            </div>
            <div className="bg-[#FFF8E1] rounded-xl p-6 shadow-lg scroll-reveal card-animate">
              <h3 className="text-xl font-bold text-[#3E2723] mb-3">Health-Conscious Segments</h3>
              <p className="text-[#5D4037]">
                Growing demand for healthier versions like dark, organic, keto-friendly, and functional chocolates.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
