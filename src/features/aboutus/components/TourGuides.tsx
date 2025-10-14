export default function TourGuides() {
    const guides = [
      {
        id: 1,
        name: "Salmon Thuir",
        position: "Senior Agent",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        name: "Horke Pels",
        position: "Head Officer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        name: "Solden Kalos",
        position: "Supervisor",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 4,
        name: "Nelson Bam",
        position: "Quality Assurance",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 5,
        name: "Salmon Thuir",
        position: "Senior Agent",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
    ];
  
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-secondary font-bold text-lg mb-2">Tour Guides</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-gray-800"style={{ fontFamily: "cursive" }}>Meet Our </span>
              <span className="text-primary"style={{ fontFamily: "cursive" }}>Excellent Guides</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
  
          {/* Guides Grid */}
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
            {guides.map((guide) => (
              <div key={guide.id} className="flex-shrink-0 w-56">
                {/* Image Container */}
                <div className="relative rounded-t-2xl overflow-hidden h-64 mb-0">
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-full h-full object-cover"
                  />
                </div>
  
                {/* Info Container */}
                <div className="bg-[#17a2b8] text-white p-6 rounded-b-2xl text-center">
                  <h3 className="text-xl font-bold mb-1">{guide.name}</h3>
                  <p className="text-sm text-white/90">{guide.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <style>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>
    );
  }