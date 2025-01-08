const hotelData = [
  {
    id: 1,
    name: "ICY White Golden Divine Inn",
    owner: "ICYNOD1",
    location: {
      address: "C9 sector 56 Noida",
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
      coordinates: { lat: 28.5797, lng: 77.3338 },
    },
    description:
      "An impressive, modern property offering an excellent blend of comfort, convenience, and affordability.",
    hotelAmenities: {
      popular: ["Free WiFi", "Restaurant", "Parking"],
      basicFacilities: [
        "Air Conditioning",
        "Room Service",
        "Free Wi-Fi",
        "Laundry Service",
      ],
      foodAndDrinks: [
        "In-house Restaurant",
        "South Indian Cuisine",
        "Continental Cuisine",
      ],
      safetyAndSecurity: ["Secure Premises", "Room Lock"],
      generalServices: ["Room Service", "Travel Desk", "Private Cab Facility"],
      commonArea: ["Lobby", "Public Washroom", "Parking Area"],
    },
    images: [
      "https://example.com/icy-white-golden/exterior.jpg",
      "https://example.com/icy-white-golden/lobby.jpg",
      "https://example.com/icy-white-golden/room.jpg",
    ],
    ratings: { totalRating: 4.0, totalUsers: 100 },
  },
  {
    id: 2,
    name: "ICY White De Elegance Stays",
    owner: "ICYNOD2",
    location: {
      address: "C93 sector 108 Noida",
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
      coordinates: { lat: 28.5355, lng: 77.391 },
    },
    description:
      "A modern guest house offering a blend of comfort and convenience in Noida, Sector 108, with free WiFi, on-site parking, and easy access to major landmarks.",
    hotelAmenities: {
      popular: ["Free WiFi", "Restaurant", "Parking"],
      basicFacilities: [
        "Air Conditioning",
        "Room Service",
        "Free Wi-Fi",
        "Laundry Service",
      ],
      foodAndDrinks: [
        "In-house Restaurant",
        "South Indian Cuisine",
        "Continental Cuisine",
      ],
      safetyAndSecurity: ["Secure Premises", "Room Lock"],
      generalServices: ["Room Service", "Travel Desk", "Private Cab Facility"],
      commonArea: ["Lobby", "Public Washroom", "Parking Area"],
    },
    images: [
      "https://example.com/de-elegance/exterior.jpg",
      "https://example.com/de-elegance/lobby.jpg",
      "https://example.com/de-elegance/room.jpg",
    ],
    ratings: { totalRating: 4.8, totalUsers: 85 },
  },
  {
    id: 3,
    name: "ICY White H M Palace 92",
    owner: "ICYNOD3",
    location: {
      address: "Block A sector 93 Noida",
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
      coordinates: { lat: 28.5468, lng: 77.3628 },
    },
    description:
      "A modern property connected to a shopping center, offering a comfortable and convenient stay in Sector 93, Noida. Perfect for both business and leisure travelers.",
    hotelAmenities: {
      popular: ["Free WiFi", "Restaurant", "Parking"],
      basicFacilities: [
        "Air Conditioning",
        "Room Service",
        "Free Wi-Fi",
        "Laundry Service",
      ],
      foodAndDrinks: [
        "In-house Restaurant",
        "South Indian Cuisine",
        "Continental Cuisine",
      ],
      safetyAndSecurity: ["Secure Premises", "Room Lock"],
      generalServices: ["Room Service", "Travel Desk", "Private Cab Facility"],
      commonArea: ["Lobby", "Public Washroom", "Parking Area"],
    },
    images: [
      "https://example.com/hm-palace/exterior.jpg",
      "https://example.com/hm-palace/lobby.jpg",
      "https://example.com/hm-palace/room.jpg",
    ],
    ratings: { totalRating: 4.5, totalUsers: 92 },
  },
  {
    id: 4,
    name: "ICY Black Corporate city centre",
    owner: "ICYNOD4",
    location: {
      address: "A17 sector 50 Noida",
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
      coordinates: { lat: 28.5733, lng: 77.3261 },
    },
    description:
      "ICY Black Corporate City Center offers a refreshing and comfortable stay, located near Noida City Center Metro Station and close to major corporate hubs. Perfect for business travelers and families alike.",
    hotelAmenities: {
      popular: ["Free WiFi", "Restaurant", "Business Center"],
      basicFacilities: [
        "Air Conditioning",
        "24-hour Room Service",
        "Free Wi-Fi",
        "Concierge Services",
      ],
      foodAndDrinks: ["In-house Restaurant", "Complimentary Breakfast"],
      safetyAndSecurity: ["Secure Premises", "Room Lock"],
      generalServices: [
        "24-hour Room Service",
        "Travel Desk",
        "Concierge Services",
      ],
      commonArea: ["Business Center", "Conference Room", "Lobby"],
    },
    images: [
      "https://example.com/corporate-centre/exterior.jpg",
      "https://example.com/corporate-centre/lobby.jpg",
      "https://example.com/corporate-centre/business-center.jpg",
    ],
    ratings: { totalRating: 5.0, totalUsers: 150 },
  },
  {
    id: 5,
    name: "ICY White H9",
    owner: "ICYNOD5",
    location: {
      address: "H9 Sector 70 Noida",
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
      coordinates: { lat: 28.5959, lng: 77.3932 },
    },
    description:
      "A 3-Star Hotel offering well-designed rooms with essential comforts and modern amenities to ensure a pleasant stay for all guests.",
    hotelAmenities: {
      popular: ["Air Conditioning", "Air Purifier", "Work Desk"],
      basicFacilities: [
        "Air Conditioning",
        "Blackout Curtains",
        "Work Desk",
        "Dining Area",
      ],
      foodAndDrinks: ["Dining Area"],
      safetyAndSecurity: ["Room Lock"],
      generalServices: ["Room Service"],
      commonArea: ["Seating Area", "Dining Area"],
    },
    images: [
      "https://example.com/icy-white-h9/exterior.jpg",
      "https://example.com/icy-white-h9/room.jpg",
      "https://example.com/icy-white-h9/bathroom.jpg",
    ],
    ratings: { totalRating: 7.5, totalUsers: 85 },
  },
  {
    id: 6,
    name: "ICY White Green Palace",
    owner: "ICYNOD6",
    location: {
      address: "16A c block sector 62 Noida",
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
      coordinates: { lat: 28.6289, lng: 77.3577 },
    },
    description:
      "ICY White Green Palace offers a convenient and comfortable stay in Noida with excellent amenities and services for both business and leisure travelers.",
    hotelAmenities: {
      popular: ["Restaurant", "Room Service", "Fireplace", "Free Wi-Fi"],
      basicFacilities: [
        "Air Conditioning",
        "Elevator",
        "Power Backup",
        "Free Wi-Fi",
      ],
      foodAndDrinks: ["Restaurant", "Room Service", "Bar"],
      safetyAndSecurity: [
        "CCTV Surveillance",
        "Security Alarms",
        "Fire Extinguishers",
        "Security Guards",
      ],
      generalServices: [
        "24-hour Front Desk",
        "Luggage Storage",
        "Multilingual Staff",
        "Doctor on Call",
      ],
      commonArea: [
        "Seating Area",
        "Living Room",
        "Balcony",
        "Terrace",
        "Garden",
      ],
    },
    images: [
      "https://example.com/green-palace/exterior.jpg",
      "https://example.com/green-palace/lobby.jpg",
      "https://example.com/green-palace/restaurant.jpg",
    ],
    ratings: { totalRating: 8.2, totalUsers: 120 },
  },
  {
    id: 7,
    name: "ICY White SOHO 62",
    owner: "ICYNOD7",
    location: {
      address: "Khoda colony Sector 62A",
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
      coordinates: { lat: 28.6298, lng: 77.3573 },
    },
    description:
      "ICY White SOHO 62 is an ideal choice for those seeking a budget-friendly hotel in Noida with great facilities and a central location.",
    hotelAmenities: {
      popular: ["Kitchenette", "Indoor Games", "Kids Play Area", "Free Wi-Fi"],
      basicFacilities: [
        "Air Conditioning",
        "Free Parking",
        "Housekeeping",
        "Elevator",
      ],
      foodAndDrinks: ["In-House Restaurant", "Kitchenette"],
      safetyAndSecurity: [
        "CCTV Surveillance",
        "Fire Extinguishers",
        "Security Alarms",
      ],
      generalServices: [
        "24-hour Front Office",
        "Laundry Service",
        "Luggage Storage",
      ],
      commonArea: ["Seating Area", "Library", "Sun Deck", "Kids Play Area"],
    },
    images: [
      "https://example.com/soho-62/exterior.jpg",
      "https://example.com/soho-62/playarea.jpg",
      "https://example.com/soho-62/restaurant.jpg",
    ],
    ratings: { totalRating: 3.0, totalUsers: 50 },
  },
  {
    id: 8,
    name: "ICY White SOHO 51",
    owner: "ICYNOD8",
    location: {
      address: "Hoshiarpur village Sector 51",
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
      coordinates: { lat: 28.5789, lng: 77.3649 },
    },
    description:
      "ICY White SOHO 51 provides excellent facilities and a comfortable stay, making it an ideal choice for guests visiting Noida for short stays, business trips, or family visits.",
    hotelAmenities: {
      popular: ["Free Wi-Fi", "Complimentary Breakfast", "Free Parking"],
      basicFacilities: [
        "Air Conditioning",
        "Daily Housekeeping",
        "Laundry Facilities",
        "Free Wi-Fi",
      ],
      foodAndDrinks: ["Buffet Breakfast", "Nearby Restaurants"],
      safetyAndSecurity: ["Smoke-free Property", "24/7 Front Desk"],
      generalServices: ["Luggage Storage", "Tour Assistance", "Housekeeping"],
      commonArea: ["Reception", "Luggage Storage Area"],
    },
    images: [
      "https://example.com/soho-51/exterior.jpg",
      "https://example.com/soho-51/breakfast.jpg",
      "https://example.com/soho-51/room.jpg",
    ],
    ratings: { totalRating: 3.5, totalUsers: 45 },
  },
  {
    id: 9,
    name: "ICY White Bluestone Himalayan View Cottages",
    owner: "ICYNTL1",
    location: {
      address: "Papsarsali, Binsar Road, Almora, 263601",
      city: "Almora",
      state: "Uttarakhand",
      country: "India",
      coordinates: { lat: 29.5972, lng: 79.6562 },
    },
    description:
      "Bluestone Himalayan View Cottages offers a serene escape in Almora with breathtaking mountain views, comfortable accommodations, and family-friendly amenities. Ideal for nature lovers seeking relaxation in the tranquility of the Himalayas.",
    hotelAmenities: {
      popular: ["Free Parking", "Free Wi-Fi", "Family Rooms", "Pets Allowed"],
      basicFacilities: [
        "Heating",
        "Balcony with Mountain Views",
        "Private Bathroom with Toiletries",
        "Flat-screen TV",
      ],
      foodAndDrinks: ["Breakfast Included", "Electric Kettle", "Kitchenware"],
      safetyAndSecurity: ["24/7 Front Desk", "Safe at Front Desk"],
      generalServices: [
        "Luggage Storage",
        "Daily Housekeeping",
        "Tour Assistance",
      ],
      commonArea: ["Garden Area", "Terrace with Mountain Views"],
    },
    images: [
      "https://example.com/bluestone/exterior.jpg",
      "https://example.com/bluestone/room.jpg",
      "https://example.com/bluestone/breakfast.jpg",
    ],
    ratings: { totalRating: 4.5, totalUsers: 120 },
  },
  {
    id: 10,
    name: "ICY White Hotel FNG",
    owner: "NOIDA",
    location: {
      address: "01 B Block, Sector 63, Noida, 201301",
      city: "Noida",
      state: "Uttar Pradesh",
      country: "India",
      coordinates: { lat: 28.6261, lng: 77.3732 },
    },
    description:
      "Hotel ICY White FNG is an ideal 3-star accommodation for business travelers in Noida. With modern interiors and corporate-friendly amenities, it offers a 'home away from home' experience, making it an excellent choice for both business and leisure trips.",
    hotelAmenities: {
      popular: [
        "Free high-speed Wi-Fi",
        "Fully air-conditioned rooms and common areas",
        "LED/LCD TVs in rooms",
        "24/7 customer support",
      ],
      basicFacilities: [
        "Stylish, modish interiors",
        "Private living spaces",
        "Comfortable beds with quality linens",
        "Workspace with desk",
      ],
      foodAndDrinks: ["Home-cooked style meals", "In-house chef"],
      safetyAndSecurity: ["24/7 surveillance", "Safe for couples"],
      generalServices: [
        "Smooth check-in/check-out process",
        "Daily housekeeping",
        "Round-the-clock room service",
      ],
      commonArea: ["Well-equipped hangout areas", "Workspace"],
    },
    images: [
      "https://example.com/hotel-fng/exterior.jpg",
      "https://example.com/hotel-fng/room.jpg",
      "https://example.com/hotel-fng/dining.jpg",
    ],
    ratings: { totalRating: 4.6, totalUsers: 150 },
  },
];

const getAllHotels = (req, res) => {
  res.status(200).json(hotelData);
};

// Controller function to fetch hotels by city
const getHotelsByCity = (req, res) => {
  const city = req.params.city.toLowerCase(); // Get city from URL params
  const filteredHotels = hotelData.filter(
    (hotel) => hotel.location.city.toLowerCase() === city
  );

  if (filteredHotels.length === 0) {
    return res
      .status(404)
      .json({ message: `No hotels found in ${req.params.city}` });
  }

  res.status(200).json(filteredHotels);
};

module.exports = {
  getAllHotels,
  getHotelsByCity,
};
