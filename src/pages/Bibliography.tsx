export default function Bibliography() {
  const sources = [
    {
      title: 'ChatGPT AI',
      description: 'AI-powered assistance for research and content generation',
      url: null,
    },
    {
      title: 'Google.com',
      description: 'General research and information gathering',
      url: 'https://www.google.com',
    },
    {
      title: "Subhash Dey's Business Studies Textbook For Class XII",
      description: 'Primary academic reference for marketing concepts and business principles',
      url: null,
    },
    {
      title: 'Amul.com',
      description: 'Competitor analysis and market research',
      url: 'https://www.amul.com',
    },
    {
      title: 'Campco.org',
      description: 'Competitor analysis and industry insights',
      url: 'https://www.campco.org',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5D4037] via-[#4E342E] to-[#3E2723]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#FFF8E1] rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-6 text-center">
            BIBLIOGRAPHY
          </h1>
          <p className="text-lg text-[#5D4037] leading-relaxed text-center max-w-3xl mx-auto">
            References and sources used in the development of the EVERJOY Chocolates marketing project.
          </p>
        </div>

        <div className="space-y-6">
          {sources.map((source, index) => (
            <div
              key={index}
              className="bg-[#FFF8E1] rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#D4AF37] text-[#3E2723] rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#3E2723] mb-2">
                    {source.title}
                  </h3>
                  <p className="text-[#5D4037] mb-3">{source.description}</p>
                  {source.url && (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D4AF37] hover:text-[#C5A572] underline font-medium"
                    >
                      {source.url}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#D4AF37] to-[#C5A572] rounded-2xl shadow-2xl p-8 md:p-12 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-6 text-center">
            Conclusion: Our Vision
          </h2>
          <p className="text-lg text-[#3E2723] leading-relaxed text-center max-w-4xl mx-auto">
            EVERJOY is committed to winning customers honestly, prioritizing safety and environmental well-being through a "Societal Concept Philosophy." Our made-to-order freshness and unique product quality differentiate us from competitors.
          </p>
        </div>

        <div className="bg-[#FFF8E1] rounded-xl p-8 mt-8 text-center">
          <p className="text-sm text-[#5D4037] mb-2">
            This project was prepared for Business Studies Class XII
          </p>
          <p className="text-lg font-bold text-[#D4AF37]">
            EVERJOY Chocolates Marketing Project
          </p>
        </div>
      </div>
    </div>
  );
}
