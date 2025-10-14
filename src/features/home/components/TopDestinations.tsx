import  background1 from "../../../assets/carasoulbg1.jpg"
import  background2 from "../../../assets/carasoulbg2.jpg"
import gallefort from "../../../assets/gallefort.jpg"
import anduradpurya from "../../../assets/anuradapurya.jpg"
import ambuluwawa from "../../../assets/ambuluwawa.jpg"
interface Destination {
  id: number;

  city: string;
  tours: number;
  image: string;
  size: 'large' | 'small';
}

export default function TopDestinations() {
  const destinations: Destination[] = [
    {
      id: 1,
      city: 'Ambuluwawa',
      tours: 15,
      image: ambuluwawa,
      size: 'large'
    },
    {
      id: 2,
     
      city: 'Galle Fort',
      tours: 18,
      image: gallefort,
      size: 'small'
    },
    {
      id: 3,
     
      city: 'Anuradapuraya',
      tours: 21,
      image: anduradpurya,
      size: 'small'
    },
    {
      id: 4,
    
      city: 'Dalada Maligawa',
      tours: 15,
      image: background2,
      size: 'small'
    },
    {
      id: 5,
      city: 'Sigiriya',
      tours: 32,
      image: background1,
      size: 'small'
    }
  ];

  return (
    <section className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

         {/* Section Header */}
         <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "cursive" }}
          >
            Explore <span className="text-primary">Top Destinations</span> in Sri Lanka
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From misty mountains to golden beaches — discover Sri Lanka’s most
            breathtaking destinations filled with heritage, adventure, and
            beauty.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Large Card - London */}
          <div className="lg:row-span-2 relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer h-[670px]">
            <div className="relative h-full min-h-[500px] lg:min-h-[650px]">
              <img
                src={destinations[0].image}
                alt={destinations[0].city}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                
                <h3 className="text-4xl font-bold mb-4">
                  {destinations[0].city}
                </h3>
                <span className="inline-block bg-[#17a2b8] text-white px-4 py-2 rounded-full text-sm font-medium">
                  {destinations[0].tours} Tours
                </span>
              </div>
            </div>
          </div>

          {/* Small Cards Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {destinations.slice(1).map((destination) => (
              <div
                key={destination.id}
                className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <div className="relative h-64 md:h-80">
                  <img
                    src={destination.image}
                    alt={destination.city}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    
                    <h3 className="text-2xl font-bold mb-3">
                      {destination.city}
                    </h3>
                    <span className="inline-block bg-[#17a2b8] text-white px-3 py-1.5 rounded-full text-sm font-medium">
                      {destination.tours} Tours
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}