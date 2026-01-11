export default function Promotion() {
  const promotionMix = [
    {
      title: 'Advertising',
      description: 'Paid, non-personal communication to mass audiences.',
    },
    {
      title: 'Sales Promotion',
      description: 'Short-term incentives to boost sales.',
    },
    {
      title: 'Public Relations',
      description: 'Managing public perception and building credibility.',
    },
    {
      title: 'Personal Selling',
      description: 'Face-to-face interaction for complex products.',
    },
    {
      title: 'Direct Marketing',
      description: 'Targeted communication to individual consumers.',
    },
  ];

  const goals = [
    {
      title: 'Build Awareness',
      description: 'Introduce our products to a wider audience.',
    },
    {
      title: 'Generate Interest',
      description: 'Capture customer attention and curiosity.',
    },
    {
      title: 'Drive Sales',
      description: 'Encourage purchasing decisions through effective communication.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5D4037] via-[#4E342E] to-[#3E2723]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#FFF8E1] rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6 text-center">
            PROMOTION: <span className="text-[#D4AF37]">Inform, Persuade, Influence</span>
          </h1>
          <p className="text-lg text-[#5D4037] leading-relaxed text-center max-w-4xl mx-auto">
            Promotion is a key element of the marketing mix, aiming to inform, persuade, and influence customers.
          </p>
        </div>

        <section className="mb-12">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="bg-[#FFF8E1] rounded-xl p-6 shadow-lg text-center"
              >
                <h3 className="text-2xl font-bold text-[#3E2723] mb-3">{goal.title}</h3>
                <p className="text-[#5D4037]">{goal.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#FFF8E1] rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-8 text-center">
            The Promotion <span className="text-[#D4AF37]">Mix</span>
          </h2>
          <p className="text-lg text-[#5D4037] text-center mb-8">
            Our promotion mix combines various tools to achieve marketing and communication goals.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promotionMix.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#6D4C41] to-[#5D4037] text-[#FFF8E1] rounded-xl p-6 hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-bold mb-3 text-[#D4AF37]">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#FFF8E1] rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-4">
              Advertising
            </h3>
            <p className="text-lg text-[#5D4037] mb-6">
              We leverage advertising to build brand recognition and reach a large audience.
            </p>
            <div className="bg-gradient-to-r from-[#D4AF37] to-[#C5A572] rounded-lg p-6 text-center">
              <p className="text-sm text-[#3E2723] font-semibold mb-2">Follow us on Instagram</p>
              <p className="text-2xl font-bold text-[#3E2723]">@EVERJOY_Chocolates</p>
            </div>
          </div>

          <div className="bg-[#FFF8E1] rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-4">
              Sales Promotion
            </h3>
            <p className="text-lg text-[#5D4037] mb-6">
              Short-term incentives like discounts and coupons encourage quick buying behavior.
            </p>
            <div className="bg-gradient-to-r from-[#6D4C41] to-[#5D4037] rounded-lg p-8 text-center">
              <p className="text-xl text-[#D4AF37] font-bold mb-3">
                EXCLUSIVE MEMBERSHIP
              </p>
              <p className="text-4xl md:text-5xl font-bold text-[#FFF8E1] mb-4">
                30% OFF
              </p>
              <p className="text-lg text-[#FFF8E1] mb-4">ON ALL PURCHASES</p>
              <div className="bg-[#FFF8E1] rounded-md p-4 inline-block">
                <p className="text-sm text-[#5D4037] font-semibold mb-1">Use code:</p>
                <p className="text-2xl font-bold text-[#3E2723] tracking-wider">
                  EVERJOY30VIP
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFF8E1] rounded-2xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-6 text-center">
            Channels of Distribution
          </h2>
          <p className="text-lg text-[#5D4037] text-center mb-8">
            We utilize a multi-channel approach to reach our customers effectively.
          </p>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-[#6D4C41] to-[#5D4037] text-[#FFF8E1] rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#D4AF37] text-[#3E2723] w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-[#D4AF37]">Zero-Level</h4>
                  <p>Direct to customers (e.g., internet sales).</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#6D4C41] to-[#5D4037] text-[#FFF8E1] rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#D4AF37] text-[#3E2723] w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-[#D4AF37]">One-Level</h4>
                  <p>Through retailers to customers.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#6D4C41] to-[#5D4037] text-[#FFF8E1] rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#D4AF37] text-[#3E2723] w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-[#D4AF37]">Two-Level</h4>
                  <p>Through wholesalers and retailers to customers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
