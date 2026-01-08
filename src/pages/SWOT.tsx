export default function SWOT() {
  const strengths = [
    'Made-to-Order Freshness & Homemade Quality',
    'Health-Focused Offerings',
    'Small Batch Control & Customer Engagement',
    'Unique Flavor Innovation',
    'Ethical & Sustainable Practices',
  ];

  const weaknesses = [
    'Limited Production Capacity & Higher Cost per Unit',
    'Lower Brand Recognition & Scalability Issues',
    'Limited Distribution Channels',
    'Higher Price Point',
  ];

  const opportunities = [
    'Rising Demand for Artisanal & Healthy Products',
    'Niche Market Positioning & Online Sales',
    'Collaborations with Local Businesses',
    'Corporate Gifting & Premium Market Segment',
  ];

  const threats = [
    'Competition from Mass Brands & Raw Material Costs',
    'Regulatory Requirements & Market Saturation',
    'Changing Consumer Preferences',
    'Supply Chain Disruptions',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5D4037] via-[#4E342E] to-[#3E2723]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* HEADER */}
        <div className="bg-[#FFF8E1] rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6 text-center">
            SWOT <span className="text-[#D4AF37]">ANALYSIS</span>
          </h1>
          <p className="text-lg text-[#5D4037] leading-relaxed text-center max-w-4xl mx-auto">
            A comprehensive analysis of EVERJOY's Strengths, Weaknesses,
            Opportunities, and Threats in the chocolate market.
          </p>
        </div>

        {/* SWOT GRID */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* STRENGTHS */}
          <div className="bg-gradient-to-br from-[#D4AF37] to-[#C5A572] rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-[#3E2723] mb-6 text-center">
              STRENGTHS
            </h2>
            <ul className="space-y-4">
              {strengths.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-[#3E2723] text-[#D4AF37] w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm mt-1">
                    {index + 1}
                  </div>
                  <span className="text-[#3E2723] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WEAKNESSES */}
          <div className="bg-[#FFF8E1] rounded-2xl p-8 shadow-xl border-4 border-[#D4AF37]">
            <h2 className="text-3xl font-bold text-[#3E2723] mb-6 text-center">
              WEAKNESSES
            </h2>
            <ul className="space-y-4">
              {weaknesses.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-[#D4AF37] text-[#3E2723] w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm mt-1">
                    {index + 1}
                  </div>
                  <span className="text-[#5D4037] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* OPPORTUNITIES */}
          <div className="bg-[#FFF8E1] rounded-2xl p-8 shadow-xl border-4 border-[#6D4C41]">
            <h2 className="text-3xl font-bold text-[#3E2723] mb-6 text-center">
              OPPORTUNITIES
            </h2>
            <ul className="space-y-4">
              {opportunities.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-[#6D4C41] text-[#FFF8E1] w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm mt-1">
                    {index + 1}
                  </div>
                  <span className="text-[#5D4037] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* THREATS */}
          <div className="bg-gradient-to-br from-[#6D4C41] to-[#5D4037] text-[#FFF8E1] rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-6 text-center">
              THREATS
            </h2>
            <ul className="space-y-4">
              {threats.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-[#D4AF37] text-[#3E2723] w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm mt-1">
                    {index + 1}
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
