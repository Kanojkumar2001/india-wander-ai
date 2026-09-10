# India Wander AI

1. Project Overview

Project Title: KmsAndMiles

Tagline: AI-Powered Smart Tourism Platform

Event: Smart India Hackathon 2026

Problem Statement ID: 202

Theme: Travel and Tourism

PS Category: SIH26202 (Software)

Team Name: QIS INNOVATORS

Core Concept: An all-in-one, AI-driven tourism platform designed to streamline the entire travel planning process. It provides a single source of truth for destination information, history, accommodation, transport, and personalized recommendations, eliminating the need to search across multiple, scattered sources.

Vision: To become India's most trusted digital travel companion, empowering every traveler with the knowledge and tools to explore the country's rich heritage and hidden treasures safely, sustainably, and affordably.

2. Problem Statement & Proposed Solution

The Problem

Travelers face significant challenges when planning a trip:

Information Overload & Scatter: Travelers must visit multiple websites and apps for flights, hotels, attractions, and local information. This fragmented experience is overwhelming and inefficient.

Unreliable Data: Information is often outdated, incomplete, or unverified, leading to poor decisions, unexpected costs, and unpleasant surprises upon arrival.

Discovery Gap: Popular destinations are overcrowded, while lesser-known, culturally rich locations remain undiscovered due to lack of accessible information, creating an imbalance in tourism revenue and experience quality.

Time-Consuming Planning: Creating a cohesive travel plan, from research to booking, is a tedious, confusing, and often stressful process that deters potential travelers.

Lack of Personalization: Generic travel guides fail to cater to individual preferences, budgets, and travel styles, resulting in a one-size-fits-all approach that doesn't meet user expectations.

The Proposed Solution: KmsAndMiles

KmsAndMiles is a comprehensive solution that addresses these issues by:

Centralizing Information: Integrating destination guides, travel logistics, and accommodation into a single, user-friendly interface, effectively becoming a "one-stop-shop" for travel planning.

Powering with AI: Using a machine learning recommendation engine to suggest personalized travel plans based on user preferences, budget, and travel style. The AI learns from user interactions to continuously improve its suggestions.

Providing Clarity: Offering clear, estimated travel times, costs, and distances to help users make informed decisions, removing guesswork from the equation.

Promoting Discovery: Actively recommending hidden gems, local businesses, and sustainable travel options to distribute tourism benefits more evenly and enhance the travel experience.

3. Elaborated Features & Functionality

Core Modules & Features:

Module 1: Destination Discovery & Guide

Interactive Map & Search: Users can explore via an interactive map or search by state, district, or specific destination name. The map will feature a heatmap layer showing popular attractions and a filter system to find destinations based on type (e.g., heritage, adventure, hill station, beach).

Comprehensive Destination Profiles: Each destination has a detailed profile page including:

History & Culture: Rich historical narratives, local festivals, cultural significance, and famous personalities associated with the place.

Attractions: List of major tourist spots (monuments, parks, museums) with descriptions, photos, entry fees, visiting hours, and visitor tips (e.g., best time to visit).

Weather Information: Current and forecasted weather data, along with seasonal weather patterns and packing suggestions.

Local Insights: Information on local cuisine, customs, etiquette, and "must-try" local dishes and restaurants.

"Hidden Gems" Section: AI-curated list of lesser-known, off-the-beaten-path attractions and local experiences, complete with descriptions and directions.

Photo & Video Gallery: A rich media gallery showcasing the beauty and essence of the destination to inspire travelers.

Module 2: AI-Powered Trip Planner

Personalized Itinerary Generation: Users input their destination, travel dates, budget, and preferences (e.g., adventure, heritage, leisure, food). The AI engine generates a day-by-day optimized itinerary. Users can further customize it by swapping activities, adjusting timings, and adding "rest days."

Smart Hotel & Accommodation Finder:

Searches and recommends hotels, hostels, and homestays based on user preferences and budget.

Displays pricing, amenities, reviews, and distance to key attractions.

Allows filtering by type (luxury, budget, eco-friendly), amenities (pool, Wi-Fi, restaurant), and guest rating.

Transport & Logistics Optimizer:

Multi-Modal Transport Suggestions: Recommends the best combination of transport (flights, trains, buses, cabs) for inter-city and intra-city travel, presenting options based on speed, cost, and comfort.

Cost & Time Estimation: Estimates travel costs and time for each leg of the journey, allowing users to budget and plan their schedule effectively.

Distance Calculation: Shows travel distances between different points in the itinerary and provides real-time traffic updates for road travel.

Complete Cost Estimator: Provides a detailed breakdown of estimated total costs (transport, accommodation, activities, food) for the entire trip, with the ability to adjust expenses and see the impact on the total.

Module 3: User Experience & Community

User Profiles & Wishlists: Users can save favorite destinations, attractions, and itineraries to personalized wishlists. Profiles track travel history, preferences, and past trips for a more personalized experience.

Social & Community Features:

Reviews & Ratings: Users can rate and review hotels, attractions, and transport services, helping other travelers make informed decisions.

Traveler Tips: Users can share tips, photos, and advice with the community, building a rich knowledge base.

Trip Sharing: Users can share their created itineraries with friends and family and even collaborate on planning a group trip.

Real-time Notifications & Alerts: Users receive updates on booking confirmations, flight delays, or important travel advisories, ensuring a stress-free travel experience.

Enhanced Features (Extending the PPT):

AR (Augmented Reality) Navigation: An in-app feature where users can point their phone's camera at a landmark to get real-time historical facts, navigation directions, and nearby restaurant recommendations overlaid on the screen. This adds an immersive and educational layer to exploration.

Interactive Voice Assistant: An integrated voice bot that can answer user queries verbally, making the platform accessible and easy to use on the go, especially for users who prefer not to type.

Multi-Language Support: The interface will support multiple Indian languages (e.g., Hindi, Tamil, Bengali, Marathi, Telugu) to cater to a wider audience and break down language barriers in travel planning.

Offline Mode: Users can download essential information (destination guides, offline maps) for a planned trip, ensuring accessibility even in areas with poor internet connectivity.

Eco-Tourism Badge & Carbon Footprint Tracker: A feature that tracks the estimated carbon footprint of the user's planned trip and suggests more eco-friendly alternatives (e.g., train instead of flight, eco-hotels) to promote sustainable tourism. Users can earn "Eco-Warrior" badges for choosing sustainable options.

Integrated Booking System: Direct integration with partner APIs (like Booking.com, Oyo, RedBus, IRCTC) to allow users to book hotels, transport, and activities directly within the platform, creating a seamless transaction experience from planning to execution.

Safety & Emergency Features: A dedicated "Safety" section with emergency contact numbers, nearby hospital/police station locations, and real-time government travel advisories for the selected destination. A "SOS" button can immediately send the user's location to their emergency contacts.

4. Elaborated Technical Architecture

Technologies & Frameworks

Frontend: React / Angular (for a dynamic, responsive Single Page Application) with HTML, CSS, and JavaScript. A mobile-first design approach will be used for an optimal experience on smartphones.

Backend: Python with FastAPI (preferred for its speed, performance, and built-in asynchronous support) or Django/Flask. The backend will be structured using microservices architecture for scalability and maintainability.

Database: PostgreSQL (for structured data like users, bookings, transactional data) and MongoDB or Firebase Firestore (for unstructured data like reviews, destination guides, and user-generated content).

AI/ML Engine: Python with libraries like Scikit-learn, Pandas, and NumPy. The recommendation engine will use a hybrid model (Collaborative & Content-Based Filtering) to balance popular recommendations with niche discovery.

APIs & Integrations:

Mapping & Location: Google Maps Platform APIs (Maps, Places, Directions, Distance Matrix) for navigation, location search, and distance/time calculations.

Authentication: Firebase Authentication or Auth0 for secure and seamless user sign-up and login.

External Data: Government open data portals (data.gov.in), Ministry of Tourism APIs, hotel/transport aggregator APIs.

Cloud & DevOps: AWS, Google Cloud, or Azure. Deployment via Docker and Kubernetes for scalability. CI/CD pipeline for smooth updates. A CDN will be used to serve static content like images and videos.

Implementation Flowchart

User Input: User selects district/destination and enters preferences, budget, and travel dates.

AI Processing: The AI engine receives the query, applies filtering logic, and calls the recommendation algorithm. The algorithm retrieves user history, destination features, and real-time data.

Data Retrieval: The platform queries its integrated databases and external APIs (for maps, hotels, transport) to fetch real-time, relevant information. A caching layer reduces latency for frequently accessed data.

Personalized Results: The backend server compiles all the data and the AI's recommendations into a structured, personalized travel plan. The plan is sent to the frontend for display.

User Decision: The user views and interacts with the plan, can modify it, and then proceed to book or save the itinerary. User interactions are fed back into the AI model for continuous learning.

5. Elaborated Feasibility, Viability & Risk Mitigation

Feasibility Analysis

Technically Feasible: The project leverages proven, mature technologies (AI/ML frameworks, cloud services, APIs). A modular, microservices-based architecture makes development manageable and scalable. The chosen tech stack is well-documented and supported by a large developer community.

Data Feasibility: Data can be sourced from government portals, public datasets, and third-party APIs. A hybrid data collection approach (manual verification + automation) ensures reliability. A team of data curators can be employed to verify and enrich the data.

Scalable: The cloud-based infrastructure and modular design allow the platform to scale horizontally, from a pilot in one state to a nationwide application, by adding more resources as user traffic grows.

Financially Viable: The project can be funded through a combination of government grants (e.g., from the Ministry of Tourism), venture capital, and a future revenue model.

Potential Challenges & Risks

ChallengeDescriptionMitigation StrategyData Accuracy & FreshnessHotel prices, tourism info, and transport schedules change frequently.Implement automated data scraping with versioning, crowdsourced user updates, and a backend admin panel for manual verification. Implement webhooks for real-time updates from partners.Data AvailabilityComplete, structured data may not be available for all destinations.Use a tiered data model. Prioritize core data (location, basic description). Allow users to submit missing information (gamified with rewards). Integrate with Wikipedia and other open knowledge bases.API DependencyOver-reliance on maps and external booking APIs.Have backup data sources. Implement a caching layer to reduce API calls and provide graceful degradation if an API is down (e.g., fallback to cached map data). Explore using OpenStreetMap as a backup.AI Recommendation QualityAI may provide irrelevant recommendations initially.Implement a robust feedback loop (user ratings on recommendations) to retrain and improve the model over time. Use a hybrid recommender to balance popular items with niche discovery. A/B testing for algorithm optimization.Scalability & PerformanceLarge datasets and high user traffic can slow down the platform.Use cloud auto-scaling, database sharding, and a Content Delivery Network (CDN) for images. Optimize database queries and use caching (Redis). Use asynchronous tasks for heavy computations (e.g., itinerary generation).User AdoptionConvincing users to switch from existing apps.Focus on the "all-in-one" value proposition. Offer a seamless, intuitive UI/UX and a compelling feature set (like the AR feature) that competitors lack. An aggressive marketing campaign targeting students and young travelers.Data Privacy & SecurityHandling user data and payment information requires robust security measures.Adhere to data privacy laws (e.g., India's DPDP Act). Use HTTPS, data encryption (at rest and in transit), secure authentication (OAuth 2.0), and conduct regular security audits. User data will be anonymized for research purposes.

6. Elaborated Impact & Benefits

Target Audience

Individual Travelers: Solo travelers, families, couples, and student groups.

Domestic & International Tourists: Indians exploring new parts of the country and foreigners visiting India.

Local Tourism Businesses: Hoteliers, homestay owners, tour guides, transport providers, and local artisans.

Government & Tourism Boards: A valuable tool to promote tourism, manage crowds, and gather data on travel patterns for policy-making.

Academic & Research Institutions: Can use the platform's anonymized data for tourism research

District-wise Index 1. Alluri Sitarama Raju (ASR) District - HQ Paderu (22 places) 50 Aluru Kona Ranganatha Swamy Temple 60 1 Araku Valley 11 51 Ananthapuramu Clock Tower 61 2 Borra Caves 12 52 ISKCON Temple Anantapur 62 3 Katiki Waterfalls 13 53 Kasapuram Netanti Anjaneya Swamy Temple 63 4 Chaparai Water Cascade 14 54 Gugudu Kullayappa Swamy Temple 64 5 Ananthagiri Hills 15 55 Singanamala Lake 65 6 Paderu Modakondamma Temple 16 56 Rayadurgam Fort 66 7 Lambasingi (Lammasingi) 17 57 Prasanthi Nilayam Outskirts 67 8 Kothapalli Waterfalls 18 58 Hemavathi Siddheswara Temple 68 9 Maredumilli Eco Tourism 19 59 Dharmavaram Silk Handloom Hub 69 10 Jalatarangini Waterfalls 20 60 Uravakonda Karibasaveswara Swamy Matha 70 11 Amruthadhara Waterfalls 21 61 Kalyandurg Fort Hill 71 12 Rampa Waterfalls 22 62 Mid Pennar Dam (MPD) 72 13 Bhupathipalem Reservoir 23 63 Kamma Koti Peetham 73 14 Gudisa Hill Station 24 64 Yadiki Caves 74 15 Tajangi Reservoir 25 4. Annamayya District - HQ Rayachoti (20 places) 16 Matsyagundam 26 65 Tallapaka 75 17 Pedda Eru Waterfalls 27 66 Soumyanatha Swamy Temple (Nandalur) 76 18 Sangda Waterfalls 28 67 Veerabhadra Swamy Temple (Rayachoti) 77 19 Dummuku Viewpoint 29 68 Horsley Hills 78 20 Galikonda Viewpoint 30 69 Gurramkonda Fort 79 21 Rallagada Tribal Village 31 70 Kaundinya Wildlife Sanctuary Border 80 22 Darakonda Temple 32 71 Attirala Parasurama Temple 81 2. Anakapalli District - HQ Anakapalli (21 places) 72 Gundala Waterfalls 82 23 Bojjannakonda Buddhist Site 33 73 Madanapalle Rishi Valley School 83 24 Lingalakonda 34 74 Bhaktha Kannappa Temple (Utukur) 84 25 Kotturu Dhanadibbalu 35 75 Rajampeta Eco Park 85 26 Anakapalli Nookambika Ammavari Temple 36 76 Valmiki Puram Pattabhi Rama Temple 86 27 Panchadarla Dharmalingeswara Temple 37 77 Pedda 29 Kondakarla Ava Wetlands 39 79 Kalasapadu Anjaneya Temple 89 30 Lalam Kothauru Beach 40 80 Gathee Waterfalls 90 31 Upamaka Venkateswara Swamy Temple 41 81 Sanipaya Forest Trekking Zone 91 32 Gowri Parameswara Temple 42 82 Galiveedu Chennakesava Swamy Temple 92 33 Rambilli Coastal Fort Ruins 43 83 Lakkireddypalle Siddheswara Temple 93 34 Satyadeva Nursery & Agricultural Hubs 44 84 Pileru Eco Park & Hill Lookout 94 35 Appikonda Beach & Temple 45 5. Bapatla District - HQ Bapatla (20 places) 36 Chodavaram Swayambhu Shiva Temple 46 85 Suryalanka Beach 95 37 Venkatanagaram Anjaneya Swamy Temple 47 86 Bapatla Bhavarayani Swamy Temple 96 38 Atchutapuram Industrial Coastal Belt 48 87 Vodarevu Beach 97 39 Sarada River Barrage 49 88 Chirala Textile & Handloom Market 98 40 Kasimkota Pedda Masjid 50 89 Chandavaram Buddhist Site 99 41 Munagapaka Sri Rama Temple 51 90 Peda Gadelavaripalem Beach 100 42 Kommadhi Eco Park Spot 52 91 Nizampatnam Harbor & Mangroves 101 43 Veerabhadra Swamy Temple (Payakaraopeta) 53 92 Karakatta Beach Road Drive 102 3. Ananthapuramu District - HQ Ananthapuramu (21 places) 93 Mothupalli Heritage Port 103 44 Lepakshi Veerabhadra Temple 54 94 Pithani Satyanarayana Park 104 45 Lepakshi Monolithic Nandi 55 95 Vetapalem Library 105 46 Gooty Fort 56 96 Bapatla Agricultural College Campus 106 47 Penukonda Fort 57 97 Appikatla Chennakesava Temple 107 48 Tadipatri Chintala Venkataramana Temple 58 98 Karlapalem Mangrove Creek 108 49 Tadipatri Bugga Ramalingeswara Temple 59 99 Inkollu Anjaneya Swamy Temple 109

ICT-WISE INDEX (CONTINUED) 100 Jilella Malleswara Swamy Temple 110 157 Rajahmundry Central Jail Heritage Structure 167 101 Penumudi Bridge View Point 111 158 Markandeya Swamy Temple 168 102 Chinnaganjam Salt Pans 112 159 Syamala Ammavari Temple 169 103 Kavuru Venkateswara Swamy Temple 113 160 Godavari River Sunset Cruise 170 104 Ramapuram Beach 114 161 Gowthami Jiva Karunya Sangam Park 171 6. Chittoor District - HQ Chittoor (20 places) 162 Vemagiri Food Street & Atreyapuram Pootharekulu Hub 172 105 Kanipakam Varasiddhi Vinayaka Temple 115 163 Kateru River Island Park 173 106 Chandragiri Fort & Palace 116 9. Eluru District - HQ Eluru (19 places) 107 Aragonda Ardhagiri Anjaneya Swamy Temple 117 164 Kolleru Lake & Bird Sanctuary 174 108 Mogili Mogileswara Swamy Temple 118 165 Dwaraka Tirumala (Chinna Tirupati) 175 109 Gudimallam Parasurameswara Temple 119 166 Guntupalli (Jilakaragudem) Buddhist Caves 176 110 Kailasakona Waterfalls 120 167 Pedavegi Archaeological Museum 177 111 Talakona Waterfalls (Border Zone) 121 168 Pattiseema Sri Veerabhadra Swamy Temple 178 112 Palamaner Cattle Farm & Forest Sanctuary 122 169 Jangareddygudem Waterfalls 179 113 Bangarupalem Mango Orchards 123 170 Polavaram Dam Site & View Point 180 114 Kanganayanapalle Venkateswara Temple 124 171 Eluru Ashramam & Santhi Dham 181 115 Boyerakonda Gangamma Temple 125 172 Gopannapalem Agricultural Hub 182 116 Nagari Nose Hill Peak 126 173 Sanivarapupeta Woolen Carpet Center 183 117 Srikalahasti Outskirts Mandapams 127 174 Chintalapudi Forest Reserve 184 118 Bugga Agastheswara Swamy Temple 128 175 Mutyalammapatnam Eco Spot 185 119 Koundinya Wildlife Sanctuary 129 176 Tadikalapudi Swayambhu Shiva Temple 186 120 Somasila Backwaters (Chittoor Borders) 130 177 Jangareddygudem Seven Hills Temple 187 121 Yadamari Venugopala Swamy Temple 131 178 Asram Medical Campus Botanical Park 188 122 Santhipuram Eco Parks 132 179 Munduru Venkateswara Temple 189 123 Chittoor Tower Clock & Heritage Square 133 180 Tammileru River Park 190 124 Karakambadi Forest Trails 134 181 Denduluru Historical Mounds 191 7. Dr. B.R. Ambedkar Konaseema District - HQ Amalapuram (19 places) 182 Koyyalagudem Handloom & Bamboo Crafts 192

125 Ainavilli Siddhi Vinayaka Temple 135 10. Guntur District - HQ Guntur (20 places) 126 Muramulla Veereswara Swamy Temple 136 183 Amaravati Stupa & Archaeological Museum 193 127 Antarvedi Sri Lakshmi Narasimha Swamy Temple 137 184 Amarama Amaralingeswara Swamy Temple 194 128 Antarvedi Lighthouse & Beach 138 185 Dhyana Buddha Statue (Amaravati) 195 129 Ryali Jaganmohini Kesava Swamy Temple 139 186 Kondaveedu Fort 196 130 Draksharamam Bhimeswara Swamy Temple (Border) 140 187 Mangalagiri Panakala Narasimha Swamy Temple 197 131 Appanapalle Bala Balaji Temple 141 188 Pedakakani Malleswara Swamy Temple 198 132 Dindi Coconut County & Backwaters 142 189 Uppalapadu Bird Sanctuary 199 133 Aduru Buddhist Stupa 143 190 Guntur Chilli Market Yard 200 134 Panchamukha Anjaneya Temple (Amalapuram) 144 191 Jinnah Tower 201 135 Pasarlapudi Plantations 145 192 Chebrole Temples 202 136 Palivela Kuppeswara Swamy Temple 146 193 Tenali Art & Drama Cultural Hub 203 137 Ravulapalem Sugarcane & Fruit Markets 147 194 Phatima Matha Shrine 204 138 Kothapalli Mangrove Creeks 148 195 Gorantla Sai Baba Temple 205 139 Bandarulanka Handloom Village 149 196 Agastheswara Swamy Temple (Narakodur) 206 140 Gannavaram Aqueduct 150 197 Kotappakonda / Yellamanda Heritage Trail 207 141 Razole River Islets (Lanka Villages) 151 198 Budampadu Eco Lake 208 142 Amalapuram Subrahmanya Swamy Temple 152 199 Sitanagaram Vedic University & Ghats 209 143 Peruru Heritage Village 153 200 Tenali Canal Park 210 8. East Godavari District - HQ Rajahmundry (20 places) 201 Tadikonda Venugopala Swamy Temple 211 144 Godavari Arch Bridge & Rail Bridge 154 202 Namburu Kalpataru Eco Gardens 212 145 Pushkar Ghat 155 11. Kakinada District - HQ Kakinada (20 places) 146 Kadiyam Flower Nurseries 156 203 Coringa Wildlife Sanctuary 213 147 Korukonda Lakshmi Narasimha Swamy Temple 157 204 Hope Island 214 148 Kotipalli Someswara Swamy Temple 158 205 Kakinada Beach & Promenade 215 149 ISKCON Temple Rajahmundry 159 206 Pithapuram Sripada Srivallabha Temple 216 150 Sir Arthur Cotton Museum (Dowleswaram) 160 207 Pithapuram Kukkuteswara Swamy Temple 217 151 Dowleswaram Barrage 161 208 Samarlakota Kumararama Bhimeswara Temple 218 152 Rajahmundry Rose Bungalow & Heritage Park 162 209 Uppada Beach & Handloom Silk Village 219

Pattiseema Veerabhadra Swamy Temple (Border) 163 210 Adurru / Vakalapudi Coastal Belt 220 154 Anaparthi Rural Heritage 164 211 Annavaram Ratnagiri Hill Temple 221 155 Maredumilli Jungle Road Gateway 165 212 Kakinada Deep Water Port & Harbor 222 156 Kadiyapupulanka Botanical Walkways 166 213 Bhavanarayana Swamy Temple (Sarpavaram) 223

History, Origin & Significance History & Origin Araku Valley sits in the Eastern Ghats, long known to tribal and pastoral communities before roads made the viewpoint accessible to travellers. Its present form owes most to the post-1956 Andhra state development period, when patronage, administration and local settlement patterns in Alluri Sitarama Raju (ASR) district gave the site the shape visitors see today. The climb rewards visitors with long views across ridges and valleys, and mist is common in the cooler months. Famous For • Sweeping valley and ridge views • Cool climate relative to the plains • Sunrise and sunset viewpoints • Trekking and short nature walks • Famous hill station known for coffee plantations, chilly climate, and misty valleys. 2 Distance & How to Reach Transit hub Distance from the site Nearest bus stand Paderu bus stand - 6.2 km Nearest railway station Araku Valley Railway Station - 44.7 km Nearest airport Visakhapatnam International Airport - 123.7 km Best season to visit October to February 3 Transport Options by Budget Level From Low budget Medium budget High / luxury Paderu bus stand (6.2 km) APSRTC local / shared auto ~16 min · Rs 15-60 Ola/Uber or private auto ~13 min · Rs 90-196 Chauffeured sedan / hotel pickup ~11 min · Rs 586-1079 Araku Valley Railway Station (44.7 km) Town bus + shared jeep ~103 min · Rs 30-109 App cab / prepaid taxi ~78 min · Rs 775-1144 Innova Crysta with driver ~67 min · Rs 1672-2719 Visakhapatnam International Airport (123.7 km) Airport bus to city + RTC bus ~325 min · Rs 257-416 App cab (outstation rate) ~176 min · Rs 2155-3221 Luxury sedan / SUV transfer ~154 min · Rs 4663-7148 4 Nearby Accommodations (11 stays) Tier Hotel & distance Per night Food & dining Rooms & amenities Budget Paderu Rest House 0.4 km away Rs 800-1,800 Attached South Indian mess; meals plate served Basic AC rooms, TV, 24-hour check-in Budget Paderu Deluxe Lodge 8.1 km away Rs 1,500-2,700 Complimentary tea; dhabas within walking distance Clean twin rooms, fan/AC option, attached bath Budget Alluri Deluxe Lodge 8.3 km away Rs 1,400-2,300 No restaurant; room service snacks and tea only AC rooms, Wi-Fi in lobby, parking Budget Araku Tourist Home 7.3 km away Rs 800-1,800 Basic veg mess on site; tiffin from 7 am AC rooms, Wi-Fi in lobby, parking.

Add these places in website
