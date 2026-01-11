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
        <div className="bg-[#FFF8E1] rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6 text-center">
            SWOT <span className="text-[#D4AF37]">ANALYSIS</span>
          </h1>
          <p className="text-lg text-[#5D4037] leading-relaxed text-center max-w-4xl mx-auto">
            A comprehensive analysis of EVERJOY's Strengths, Weaknesses, Opportunities, and Threats in the chocolate market.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-[#D4AF37] to-[#C5A572] rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-[#3E2723] mb-6 text-center">STRENGTHS</h2>
            <ul className="space-y-4">
              {strengths.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-[#3E2723] text-[#D4AF37] w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <span className="text-[#3E2723] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FFF8E1] rounded-2xl p-8 shadow-xl border-4 border-[#D4AF37]">
            <h2 className="text-3xl font-bold text-[#3E2723] mb-6 text-center">WEAKNESSES</h2>
            <ul className="space-y-4">
              {weaknesses.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-[#D4AF37] text-[#3E2723] w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <span className="text-[#5D4037] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#FFF8E1] rounded-2xl p-8 shadow-xl border-4 border-[#6D4C41]">
            <h2 className="text-3xl font-bold text-[#3E2723] mb-6 text-center">OPPORTUNITIES</h2>
            <ul className="space-y-4">
              {opportunities.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-[#6D4C41] text-[#FFF8E1] w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <span className="text-[#5D4037] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#6D4C41] to-[#5D4037] text-[#FFF8E1] rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-[#D4AF37] mb-6 text-center">THREATS</h2>
            <ul className="space-y-4">
              {threats.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-[#D4AF37] text-[#3E2723] w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#FFF8E1] rounded-2xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-6 text-center">
            Competitor Analysis
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="border-4 border-[#D4AF37] rounded-xl p-6">
              <h3 className="text-2xl font-bold text-[#3E2723] mb-4 text-center">CAMPCO</h3>
              <div className="mb-4">
                <h4 className="font-bold text-[#D4AF37] mb-2">USP:</h4>
                <p className="text-[#5D4037] text-sm">Indian cocoa sourcing, competitive pricing, focus on local farmers, domestic production.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#D4AF37] mb-2">Weaknesses:</h4>
                <p className="text-[#5D4037] text-sm">Limited brand recognition, outdated packaging, weak marketing, limited distribution.</p>
              </div>
            </div>

            <div className="border-4 border-[#D4AF37] rounded-xl p-6">
              <h3 className="text-2xl font-bold text-[#3E2723] mb-4 text-center">AMUL</h3>
              <div className="mb-4">
                <h4 className="font-bold text-[#D4AF37] mb-2">USP:</h4>
                <p className="text-[#5D4037] text-sm">India's largest dairy brand, quality & affordability, wide availability, strong brand recognition.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#D4AF37] mb-2">Weaknesses:</h4>
                <p className="text-[#5D4037] text-sm">Limited product innovation, less premium appeal, basic packaging, fewer health-focused options.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#D4AF37] to-[#C5A572] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#3E2723] mb-4 text-center">
              100g CHOCOLATES - Price Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#3E2723] text-[#FFF8E1]">
                    <th className="p-3 text-left">Brand</th>
                    <th className="p-3 text-center">Dark</th>
                    <th className="p-3 text-center">White</th>
                    <th className="p-3 text-center">Fruit & Nut</th>
                    <th className="p-3 text-center">Dark & White</th>
                  </tr>
                </thead>
                <tbody className="bg-[#FFF8E1]">
                  <tr>
                    <td className="p-3 font-bold text-[#3E2723]">AMUL</td>
                    <td className="p-3 text-center text-[#5D4037]">₹120</td>
                    <td className="p-3 text-center text-[#5D4037]">₹115</td>
                    <td className="p-3 text-center text-[#5D4037]">₹120</td>
                    <td className="p-3 text-center text-[#5D4037]">Not offered</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-[#3E2723]">CAMPCO</td>
                    <td className="p-3 text-center text-[#5D4037]">₹110</td>
                    <td className="p-3 text-center text-[#5D4037]">₹100</td>
                    <td className="p-3 text-center text-[#5D4037]">₹110</td>
                    <td className="p-3 text-center text-[#5D4037]">Not offered</td>
                  </tr>
                  <tr className="bg-[#D4AF37]">
                    <td className="p-3 font-bold text-[#3E2723]">EVERJOY</td>
                    <td className="p-3 text-center text-[#3E2723] font-bold">₹129</td>
                    <td className="p-3 text-center text-[#3E2723] font-bold">₹139</td>
                    <td className="p-3 text-center text-[#3E2723] font-bold">₹149</td>
                    <td className="p-3 text-center text-[#3E2723] font-bold">₹129</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#3E2723] mt-4 text-center">
              EVERJOY is positioned as a premium product reflecting superior quality, ethical sourcing, and artisanal craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
