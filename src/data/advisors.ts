export interface AdvisorMember {
  name: string;
  position: string;
  bio: string;
  linkedin: string;
}

export interface AdvisorCategoryGroup {
  category: string;
  members: AdvisorMember[];
}

/**
 * 24 Active Board & Advisory Members
 * (Verified directly from live production server index.html Section #three)
 */
export const advisorsData: AdvisorCategoryGroup[] = [
  {
    "category": "Executive Leadership & Curatorial Strategy",
    "members": [
      {
        "name": "Otto Ferdinand Wachs",
        "position": "Chairman of Board of Advisors & Chief Curator",
        "bio": "Otto F. Wachs C-level experience started at VW in 1990, during his career, he reported to 5 different global CEO's at Volkswagen AG in Germany. First as Head of Communications for the Chairmans Office and later as Chief Communication Officer for Volkswagen. Otto develop and created Autostadt, a leading communication platform for the Volkswagen Group. As the CEO of the Autostadt, Otto built, led and transformed the multi-brand park starting in 1999. Autostadt is the world largest automotive super destination museum with over 2+ million visitors a year. His high office profile corporate business experience in all aspects of communications and marketing; makes him to a top expert in creation of super destination Automotive Museums. Otto retired in 2018 as CEO to start his career as an independent automotive consultant and connoisseur. Before joining the New York Auto Museum in 2020 as Chairman of the Board of Advisors.",
        "linkedin": "https://www.linkedin.com/in/otto-ferdinand-wachs-87b877150"
      },
      {
        "name": "Ray Battaglini",
        "position": "Board of Advisors",
        "bio": "Former Chamber Of Commerce CEO for 13 years. Appointed by the Secretary of Defence to New Mexico’s State Chair for ESGR - 6 years. Past State President of the Nevada Jaycees - JCI Senator 8261. Received the Rotaries Paul Harris Fellow Award 2 times. Served on several Boards and Commissions in State Government. I worked for the American Heart Association for 22 years as Deputy Executive Director, I live in NM 6 months and Kentucky the other 6 months. Served as Creator and First President of the National Corvette Museum. Inducted into the Corvette Hall of Fame in 2004. Spend over 37 years creating, fostering and advising the National Corvette Museum! The museum will celebrate its 30th years of operation in 2024! Own 2 Corvette a 1972 Stingray and C-7. Married to Belinda, we celebrated our 24th anniversary - we have 5 adult children",
        "linkedin": "http://linkedin.com/in/ray-battaglini-6bb7a438"
      },
      {
        "name": "David Senater",
        "position": "Executive Director",
        "bio": "David Senater is a Canadian-born entrepreneur, automotive enthusiast, and cultural curator based in Toronto. He currently serves as the Executive Director and Chief Archivist of the New York Auto Museum (NYAM), a role that positions him at the forefront of automotive heritage and luxury culture. His leadership is instrumental in shaping NYAM into a premier destination for car enthusiasts and collectors. Senater's professional background spans luxury goods, design, and strategic consulting. He has advised Fortune 100 companies on product development and design, leveraging his expertise to influence high-end markets. Additionally, he chairs the proposed Watch & Jewelry Hall of Fame in New York City, underscoring his deep involvement in luxury sectors. Beyond his work in the automotive and luxury industries, Senater is an advocate for innovation and urban development. He has provided advisory support to the United Nations for the creation of the United Nations Innovation HUB, a project planned for Toronto's waterfront at Ontario Place as well as the Toronto Auto Museum www.torontoautomuseum.com Senater is also actively involved in motorsport journalism, having contributed to platforms worldwide. His multifaceted career reflects a commitment to blending passion with professional pursuits, making him a notable figure in both the automotive and luxury industries.",
        "linkedin": "https://www.linkedin.com/in/david-senater-08738632"
      },
      {
        "name": "Blake Greenstein",
        "position": "Board Member",
        "bio": "Blake has more than 35 years of senior leadership experience in the financial services industry, currently Executive Director, Head of U.S. Wealth Management Marketing Controls for J.P. Morgan Wealth Management, responsible for strategic marketing governance oversight across the wealth management platform. ... His overall career spans a broad range of disciplines, including branch and regional leadership, real estate strategy, advertising, mergers and acquisitions, and marketing legal and regulatory functions across consumer, business, and wealth management lines. In addition to his corporate leadership, Blake served for nine years on the board of the American Lung Association – Midland States. Outside of his professional career, Blake is a history buff and an avid automobile enthusiast specializing in late‑1960s to early‑1970s American performance vehicles, with a penchant for Dodge, Plymouth, Buick, and Oldsmobile brands. He holds an automotive design patent, and actively participates in sanctioned quarter‑mile drag racing events with his restored vehicles – celebrating the engineering and performance heritage of these iconic vehicles… “They were built for this!”",
        "linkedin": "https://www.linkedin.com/in/blake-greenstein-297b316"
      },
      {
        "name": "Ivan Francis",
        "position": "Board Member",
        "bio": "Ivan Francis is a passionate automotive enthusiast with a strong technical and engineering background in the automotive and mobility industries. He started his career as an engineer with both Ford and General Motors, and has recently been an executive with an automotive / mobility company (Vontier Corp NYSE:VNT), where he was the Enterprise Vice President of Lean Transformation, and the interim Chief Transformation Officer. ... Mr. Francis spent 6+ years as a strategy consultant and leader in A.T. Kearney’s Automotive Practice providing consulting services to OEM’s (DaimlerChrysler, Ford Brazil) and Tier 1 suppliers (Federal Mogul, Behr Automotive) for a variety of product design/development and strategy projects. Ivan also has museum experience, having providing pro-bono services as a strategy consultant to the Detroit Motown museum to increase their attendance. He has also been a volunteer at one of Detroit’s leading museums/tourist attractions. Ivan’s career also includes working at IMAX, a global leader in the design and delivery of immersive entertainment and tourism-based experiences. Mr. Francis enjoys driving – having owned a TT in the past, and he has completed driving programs at BMW’s driving school in Munich, Germany, and at Bridgestone’s Formula 2000 Racing Academy outside of Toronto, Canada. He has also been a multi-year volunteer at the Detroit Grand Prix Indy Car Racing series. Ivan has a Bachelor of Applied Science in Mechanical Engineering from the University of Toronto, where he graduated with the Wallace Chalmers award for excellence in product design, a Bachelor of Commerce specializing in Marketing from the University of Windsor, and an MBA from Michigan State University. Ivan has also completed graduate courses in Product Design, Engineering and Entrepreneurship at Stanford University. He holds a professional engineering (P.Eng.) designation from Professional Engineers Ontario (non- current), is a former member of the Society of Automotive Engineers and has been a volunteer with the Society of Automotive Analysts.",
        "linkedin": "https://www.linkedin.com/in/blake-greenstein-297b316"
      },
      {
        "name": "David Selby",
        "position": "CTO Committee",
        "bio": "David is a technology executive and licensed engineer with a background in cloud architecture, software engineering, and large-scale IT strategy. With a career spanning engineering, infrastructure modernization, and digital transformation initiatives, he has led cross-functional teams in designing resilient, scalable systems that support long-term organizational growth. His experience includes Kubernetes-based deployments, enterprise systems integration, cybersecurity strategy, and aligning technical roadmaps with business objectives. ... As a Fractional CTO, he advises organizations on technology leadership, operational efficiency, and strategic innovation. He works closely with founders and executive teams to modernize infrastructure, implement automation, and build secure, future-ready platforms. Known for combining hands-on technical depth with executive-level perspective, he brings a pragmatic and forward-thinking approach to technology governance and digital execution.",
        "linkedin": "https://www.linkedin.com/in/dselby5"
      },
      {
        "name": "Archor Wright",
        "position": "CTO Committee",
        "bio": "Archor Wright is a seasoned technology leader with over 40 years of hands-on experience in the computer industry, having delivered results for several major global organizations in both the public and private sectors. His distinguished career includes senior Program and Portfolio Management roles supporting the Defense Information Systems Agency (DISA), General Services Administration (GSA), and Defense Threat Reduction Agency (DTRA). ... Archor is widely recognized for his innovative contributions, including directing cyber situational awareness programs, coordinating A.I. steering boards, developing machine learning roadmaps, and driving complex systems integration, cloud computing, data analytics, and cybersecurity initiatives across high-stakes government environments.Holding a B.S. in Computer Science and an A.S. in Computer Electronics, he excels in full lifecycle IT project management, stakeholder engagement, risk mitigation, and process optimization. His technical fluency, combined with exceptional leadership in team mentoring, resource allocation, and cross-agency coordination, has consistently produced strategic solutions that enhance operational efficiency and mission success. Beyond his demanding day job, Archor has developed and published several applications on the Steam platform for Windows. He maintains a lifelong passion for cars, jets, boats, and the rapidly evolving field of autonomous vehicles powered by artificial intelligence.",
        "linkedin": "https://www.linkedin.com/in/archor-wright-9593b22"
      }
    ]
  },
  {
    "category": "OEM, Industry & Mobility Strategy",
    "members": [
      {
        "name": "Eric-Mark Huitema",
        "position": "Co-Head OEM Relations",
        "bio": "Eric-Mark Huitema is the former Director General of the European Automobile Manufacturers&trade; Association (ACEA), a position he has held since October 2019. Prior to his ACEA appointment, Mr Huitema acted as Global Smarter Transportation Leader at IBM, where he focussed on optimized transport solutions for governments and smart cities, as well as the private sector. In this capacity, he was member of the Corporate Partnership Board of the OECD - International Transport Forum (ITF), the board of the Intelligent Transportation Society of America (ITSA) and the supervisory board of ERTICO (ITS Europe). Before joining IBM, Mr Huitema worked in the IT sector, including for Liberty Global\u001as broadband internet start-up Chello Benelux (which he co-founded and led as Global Vice President), EDS International and Philips Electronics. A Dutch national, Eric-Mark Huitema studied technical chemistry at Delft University of Technology and business and sales administration at INSEAD. Director-General Vehicles - AVERE – founded in 1978 – is the only European association specifically representing and advocating for electromobility. Throughout its decades of activity, it has built a reputation as a recognised actor promoting sustainable mobility across Europe and the world.",
        "linkedin": "https://www.linkedin.com/in/eric-mark-huitema-2a8389"
      },
      {
        "name": "Terrence Johnson",
        "position": "Board of Advisors",
        "bio": "Mr. Terence Johnsson has over 25 years of C-Level automotive leadership experience with Audi, Volkswagen and General Motors.... He has led, transformed, and started businesses in most global markets including North and South America, China, Europe, Asia, and Africa / Middle East. Currently, Terence leads a startup consulting and investment firm based in Berlin where he focuses on his passion, building sustainable mobility solutions in emerging markets. Johnsson holds a Masters in International Business Studies from the University of South Carolina - The Moore School of Business.",
        "linkedin": "https://www.linkedin.com/in/terence-johnsson-5a489416"
      }
    ]
  },
  {
    "category": "Art, Design & Digital Storytelling",
    "members": [
      {
        "name": "Bernd Luz",
        "position": "Board of Advisors",
        "bio": "Pop Artist & Racing Historian Bernd Luz, based in Neuhausen ob Eck, Germany and Schaffhausen, Switzerland, became one of the most internationally known Pop-Art artists in less than the last 10 years. His works of art can be found in national museums, museums and galleries around the world. He looks back on more than 100 successful solo exhibitions worldwide during the last 6 years. He has designed numerous art calendars and is currently writing his third art book, Anecdotes from Motorsport. The color poet with gasoline in his blood dedicates himself with particular passion to scenes from motorsport, which he brings to life with a lot of heart and soul on the canvas. The works of art are related to historical events and events in automotive racing. A tribute to important vehicles and events that have retained their glamor and fascination to this day and still cast a spell over people today. Bernd Luz did his first breath in 1966 in Rottweil/Germany. Already from a young age he was working in oils and acrylics, comics and cartoons. In his youth he made films and won many film awards, including first place at the Swiss Youth Film Festival in 1986. After graduation from High-School he studied photo design in Ravensburg and completed an apprenticeship as a surgical mechanic. Thereafter he studied design at the Constanze University of Applied Sciences, graduating as a designer. For more than 25 years now he runs his own design agency. He designed over 600 logos and won a variety of design awards and looks back on many publications in international best design books. He also gave lectures at various educational institutions also in the US. And so Bernd Luz is completely in the tradition of the great Pop icons. Many of them such as Andy Warhol, Robert Rauschenberg or Jasper Johns originally came from the advertising industry. Indeed he developed his very own style, passionate, emotional and intelligent, he puts his art work in an exceptional media mix technology: He transfers the emblems of our culture that have been photographed and processed on the computer onto the canvas, which is painted with acrylic paint, using contemporary solvent printing, and in a further step he accentuates them again with painted interventions. This creates the special effect: A reflection of the past - with the expression, eyes and technology of our time. Bernd Luz is a creative spirit, versatile and active, he remains true to himself and his innermost concerns: he is about communication, because it connects people - and is not that Art the most beautiful form of communication?",
        "linkedin": "https://www.linkedin.com/in/bernd-luz-b3998284"
      },
      {
        "name": "James Toomey",
        "position": "Board of Advisors",
        "bio": "James is a Brand, Design, Digital, and Experience Innovation consultant in New York, where... he helps large organizations strategize and execute on their digital visions. His work spans the gamut from small start-ups seeking growth acceleration, to larger established companies looking to rethink their approach to stay ahead in today's digital economy. Over his career, James has worked in Product Design, Environment Design, Communications, Healthcare and Business Enterprise Technology and advised the likes of the National Museum of African American History and Culture Museum in Washington DC, and the National Center of Popular Music in his native England. James' passion for story-telling and experience is what has driven him to work on brands such as Ferrari, Aston Martin, and BMW. An expert \"Design-thinker\" and seasoned problem-solver, he tackles any issue/opportunity from all perspectives to deliver actionable roadmaps: digital-experiences, loyalty programs, digital business models, service design, and brand-culture. After leaving England over 20 years ago, he moved to New York where he resides with his wife and 10 year-old daughter. On weekends they can be found exploring the \"ever-changing culture\" of New York or exploring various museums across the city.",
        "linkedin": "https://www.linkedin.com/in/james-toomey-95258a3"
      },
      {
        "name": "Alex Teplish",
        "position": "Board of Advisors",
        "bio": "Alex Teplish has worked diligently for over 25 years to become a leading innovator, futurist, and expert in digital technology, graphic design, marketing, and technology team leadership. Throughout his expansive career spanning a variety of industries, Alex has consistently been driven by a passion for innovation. His most recent corporate experience includes serving as the Vice President of Digital Services at Omnicom Health Group, the largest global network of healthcare marketing agencies, where he spearheaded the establishment and expansion of the Global Development Center, driving digital transformation and process standardization. Prior to this, Alex ran his own agency focused on creative digital development, marketing campaigns, and experiential projects for clients across diverse sectors. As a skilled storyteller, he has tapped into his creative side by authoring two graphic novels - \"In The Beginning: The Epic of the Anunnaki\" and \"Survivor: Aron's Story.\" The latter, an illustrated memoir using a unique format to teach history through a true personal story of his grandfather's survival during WWII and the Holocaust, has earned awards and recognition for both the book and its supplemental interactive virtual museum. This powerful work has been incorporated into school and college curriculum. A lifelong New Yorker after growing up in Brooklyn, Alex continues spreading messages of innovation and empathy through his professional endeavours, multimedia presentations, and passion for cutting-edge technologies like generative AI that he actively experiments with. His multifaceted background positions him as a unique visionary at the intersection of technology, creativity, and human-centric storytelling.",
        "linkedin": "http://linkedin.com/in/alexteplish"
      },
      {
        "name": "James Barnard",
        "position": "Board Member New York Auto Experience Inc.",
        "bio": "James B. is a humanities scholar, nonprofit builder, and lifelong motoring enthusiast who founded The Sports Car Institute (SCI) to rejuvenate car culture for Gen Z through ... hands-on education, design history, and safety-first performance. He spent 34 years teaching English and Film Studies (Arizona State University), holds graduate degrees in English and Film Studies, and is completing an M.S. in Forensic Psychology, adding behavioral-science insight to driver education and risk ethics. Previously, he founded and directed an award-winning Shakespeare theatre company, gaining board, budgeting, fundraising, and community-program experience. A manual-transmission owner and active lecturer, James treats the automobile as technology, design, and cultural text—crafting programs that connect museums, tracks, collectors, and classrooms to preserve heritage and cultivate the next generation of engaged, responsible drivers.",
        "linkedin": "https://www.linkedin.com/in/james-barnard-519128244/"
      }
    ]
  },
  {
    "category": "Motorsport, Classic Cars & Collecting",
    "members": [
      {
        "name": "Christian Ginet",
        "position": "Board of Advisors",
        "bio": "Based in Geneva, Switzerland, Ginet is the Creator and Owner of Driving Ambition LTD and Auto Sport Collection, a division of Driving Ambition S.A. Private Automobile. He is also an advisor for the F1 Grand Prix Driver's Club for the Formula One Grand Prix Drivers Club. He has also had more than 30-years of experience selling classic and sport cars in the world's most challenging markets: U.S., Europe, and Australia. Demonstrated leadership in re-engineering operations to optimize distribution channels; Specialty Developments, manages, and guides sales activities for the organization. Designs and applies the sales strategy and sales plan. Expert in Classic and sports cars Languages: French, English Education: Thevenon University France International Business & Management, 1986-1988 Medical University Grenoble France Sport medicine, 1982-1984 Oxford Brookes University UK 1979 Interests: Motor racing, Classic and sport cars, distribution and importation sport and classic cars.",
        "linkedin": "https://www.linkedin.com/in/christianginet"
      }
    ]
  },
  {
    "category": "Events, Experiences & Live Production",
    "members": [
      {
        "name": "Shawn Cuffie",
        "position": "Board Director",
        "bio": "Shawn Cuffie is an acclaimed producer, choreographer and entertainment visionary who has staged hundreds of successful events across North America for over the last 26 years. As Director Of Event Production and Development has created large-scale corporate and charitable events for Pepsi, TD Bank, Rogers Communication, Price Waterhouse Coopers, Air Canada, the Mandala Legacy, the Royal Ontario Museum, the Art Gallery of Ontario and many more. Thanks to his bold vision, Shawn has choreographed for many of Canada’s most spectacular festivals and concerts. A few of his credits include: The Black Diamond Ball, The Toronto Raptors, The Miss Canada World Pageant, the Festival of South Asia, the Irie Festival, Pride Festivals, exciting live concerts for Kiss 92.5 and many live fashion shows. A passionate supporter of the creative arts, Shawn gives back to the arts community through Artxperiential Projects, an innovative non-profit he founded and helms as Creative Director. Artxperiential Projects goal is to increase awareness of the types of bullying that youth face in technology, media, and within the community while spreading a message of anti-bullying and anti-violence by showcasing diversity and culture through the arts.",
        "linkedin": "https://www.linkedin.com/in/cuffieshawn"
      }
    ]
  },
  {
    "category": "Design, Preservation & Institutional Development",
    "members": [
      {
        "name": "Dr David Langguth PhD IIDA",
        "position": "Board of Advisors",
        "bio": "Award winning designer/ educator and historic preservationist. PhD in Fine arts/design. Master's historic preservation.. Over 6000 student graduates from various colleges and universities in multi-state locations. Award winning designer for celebrities, sports figures, government officials. Lead historical preservationist on multiple projects throughout the mid-atlantic region. Director of Design at Thomasville and Colony House furniture. Former Naval aviator now owner of Secure Flight VIP flights, servicing VIP's, celebrities, International government officials and our own at the highest levels. Former officer in a large Pennsylvania based Antique Auto Club. Looking forward to enhancing the efforts of The New York Auto Museum and World Motorsports Hall of fame.",
        "linkedin": "https://www.linkedin.com/in/david-langguth-3267542b"
      },
      {
        "name": "Gabriel Smith",
        "position": "Architect",
        "bio": "Gabriel Smith FAIA LEED AP, is a New York City based architect with experience in the US, UK, Europe and South America. Focused primarily on museums, he has led more than one million square feet of complex projects for cultural, education... , commercial and government clients to completion including Net Zero Carbon and LEED Platinum projects. He holds degrees in architecture from Harvard and Tulane and was elected to the American Institute of Architects College of Fellows for his contributions as a designer in 2015.",
        "linkedin": "https://www.linkedin.com/in/gabrielsmithfaia/"
      }
    ]
  },
  {
    "category": "Licensing, Media & Brand Strategy",
    "members": [
      {
        "name": "Russel A. Brown",
        "position": "Board of Advisors",
        "bio": "Russ Brown was recently the President of Consumer Products, Promotions and Ad Sales at Valiant Entertainment since 2012, the year Valiant was relaunched. Superhero merchandising is his claim-to-fame, having helped resurrecting the Marvel characters in merchandising (leading to the acquisition by Disney), and did the same for Valiant, the third largest universe of superheroes with over 2000 characters. Post the acquisition of Valiant by DMG Entertainment he also oversaw the licensing relationships held by DMG in the US and China including their relationships with Hasbro, Studio Canal and Playmobil to name a few. Russ lives the practice of integrating the three disciplines in his title and has done so for other brands and brand owners, including but not limited to ABG, Martha Stewart, Iconix Brand Group, AT&T and MasterCard. Additionally, he co-founded a marketing and licensing company 36ep. In addition to an extensive licensing background, Russ ran major promotional and advertising accounts in the US, and overseas, for Interpublic and Young & Rubicam for the brands including Heineken, AT&T, MasterCard, AOL and the Guggenheim Museum, and was the CMO for several packaged goods and beverage companies. Russ has held adjunct professorships at Fordham University, New York University and Adelphi University. In the off hours you can find Russ gardening and sailing Long Island Sound.",
        "linkedin": "http://linkedin.com/in/russell-brown-3579393"
      }
    ]
  },
  {
    "category": "Volunteers",
    "members": [
      {
        "name": "Lawrence Yee",
        "position": "Web Developer",
        "bio": "Lawrence is a experienced Frontend Developer with a background in architecture design. He takes pride in turning mock designs... into buildable code.",
        "linkedin": "https://www.linkedin.com/in/lawrenceyee91/"
      },
      {
        "name": "Pardhu Mattupalli",
        "position": "Web Designer",
        "bio": "Pardhu is a New York–based graduate student in Artificial Intelligence with a passion for building intelligent systems and creating seamless digital experiences. He has hands-on experience in machine learning, data analytics, predictive modeling, and computer vision, with projects ranging ...from ADAS-based automotive vision systems to medical image analysis and interactive dashboards. Alongside AI, he enjoys web development and UX/UI design, focusing on creating intuitive, responsive, and accessible digital platforms. Driven by curiosity and continuous learning, Pardhu aims to bridge AI, data, and design to develop innovative solutions that are both intelligent and user-friendly.",
        "linkedin": "https://www.linkedin.com/in/pardhu--mattupalli/"
      }
    ]
  },
  {
    "category": "ADMINISTRATIVE SUPPORT",
    "members": [
      {
        "name": "Jay Soneri",
        "position": "Project & Social Media Manager",
        "bio": "Jay is a versatile professional with experience across AI startups, Electronic Data Interchange (EDI), digital marketing and project management.... Throughout his career, he has worked as an EDI expert and has contributed to the success of several digital marketing agencies, specializing in off-page SEO and search engine optimization strategies. He also holds a Bachelor of Commerce (B.Com.) degree, providing a strong foundation in business and operations. In addition to his technical expertise, Jay has successfully managed multiple projects, leading teams to deliver high-quality results on time. His diverse background, problem-solving skills and collaborative approach enable him to effectively support businesses in achieving their operational and growth objectives.",
        "linkedin": "https://www.linkedin.com/in/jay-soneri-6a1944366/"
      },
      {
        "name": "Arvind Motivaras",
        "position": "Executive Assistant & Outreach Coordinator",
        "bio": "Arvind holds a Bachelor of Computer Applications (BCA) degree, providing a strong foundation in technology, digital tools, and modern business solutions. He has experience as an Executive Assistant and Virtual Assistant Specialist, supporting outreach, partnership development, email marketing, social media management, communications, scheduling and project coordination.... Currently serving at the New York Auto Museum, Arvind works closely with automotive leaders, organizations, dealerships, and community members to strengthen relationships and support the museum's outreach initiatives. He enjoys exploring emerging technologies and finding practical ways to simplify AI tools and software for everyday use.",
        "linkedin": "https://www.linkedin.com/in/arvind-motivaras-43953a414/"
      },
      {
        "name": "Vivek Malamdi",
        "position": "Administrative Support Specialist",
        "bio": "Vivek holds a B.Com degree and brings experience across banking, loan management and administrative support.... He has worked with two banks, gaining hands-on experience in loan management and financial operations. He also worked with Brainly as a Data Entry and Content Creation Specialist, where he developed strong skills in data management, content support and day-to-day administrative tasks.",
        "linkedin": "https://www.linkedin.com/in/vivek-malamdi-64449a3a3/"
      },
      {
        "name": "Narendra Jungi",
        "position": "Executive Assistant | Social Media & Community Outreach",
        "bio": "Narendra is a BCA graduate with a strong interest in social media and digital outreach. He specializes in LinkedIn and Facebook outreach and has hands-on experience connecting with audiences and building meaningful online engagement.... Before joining the team, he worked with an SEO agency, where he managed influencer outreach across Instagram, YouTube and other social platforms, giving him a well-rounded understanding of social media and digital marketing.",
        "linkedin": "https://www.linkedin.com/in/narendra-jungi-2905b4415/"
      }
    ]
  }
];

export default advisorsData;

/* ==============================================================================
   COMMENTED OUT ADVISORS (15 members hidden in HTML comments on live server)
   Preserved here for future reference or reactivation:
   ==============================================================================

   CATEGORY: Executive Leadership & Curatorial Strategy (6 members)
   ----------------------------------------------------------------------
   Name:     Frank Carofano
   Position: COO
   LinkedIn: https://www.linkedin.com/in/frank-carofano-68bb614/
   Bio:      Frank Carofano is an accomplished executive with over 24 years of leadership experience driving operational excellence, enterprise efficiency, and sustainable growth. A trusted strategic partner to CE...
   ----------------------------------------------------------------------
   Name:     Christina Asbee
   Position: Pro Bono Senior Counsel
   LinkedIn: https://www.linkedin.com/in/christina-asbee-7aa35b47/
   Bio:      Christina Asbee is a New York attorney who, for over a decade, has practiced in the civil rights space. She is committed to advancing the rights of people with disabilities and works to ensure that th...
   ----------------------------------------------------------------------
   Name:     Joshua Sherer
   Position: General Counsel
   LinkedIn: https://www.linkedin.com/in/joshua-sherer-a50ab045
   Bio:      Josh Sherer is a New York–based attorney and compliance leader with deep expertise in the automotive, OEM, and consumer electronics industries. As Deputy General Counsel of VOXX International Corporat...
   ----------------------------------------------------------------------
   Name:     Jeff Scott
   Position: Board Member New York Auto Experience Inc.
   LinkedIn: https://www.linkedin.com/in/jeff-scott-85b2a467/
   Bio:      Jeff Scott is the President and founder of Scott & McCauley Insurance Agency. Under his leadership, the firm has been recognized as one of the fastest-growing specialized commercial P&C agencies for a...
   ----------------------------------------------------------------------
   Name:     Joseph S Folz II
   Position: Legal Advisor
   LinkedIn: https://www.linkedin.com/in/joseph-folz-a159019/
   Bio:      Joe Folz is an attorney licensed in Michigan and Georgia. He began his career at General Motors, followed by 40 years as Vice President, General Counsel and Secretary of, first, Volkswagen of America,...
   ----------------------------------------------------------------------
   Name:     Leonard A. “Len” Bellavia
   Position: Senior Legal Counsel
   LinkedIn: https://www.linkedin.com/in/lbellavia/
   Bio:      Leonard A. “Len” Bellavia is the founding partner of Bellavia Blatt, PC, and a nationally recognized authority on automotive law. A lifelong New Yorker with deep roots in automotive retail, Len’s fami...

   CATEGORY: OEM, Industry & Mobility Strategy (1 members)
   ----------------------------------------------------------------------
   Name:     Dean Brauchli
   Position: Independent Board Director
   LinkedIn: https://www.linkedin.com/in/dean-brauchli-7ba283206
   Bio:      Dean Brauchli has had a professional automotive career since 1984, specializing in VW-Porsche-Audi retail sales and management. Attained U.S National sales champion for Audi 1995, 1996, 1997. He has a...

   CATEGORY: Design, Preservation & Institutional Development (1 members)
   ----------------------------------------------------------------------
   Name:     Bruce Wasserman
   Position: Director of Design & Board of Directors New York Auto Museum
   LinkedIn: https://www.linkedin.com/in/bruce-wasserman-64296610/
   Bio:      Bruce Wasserman is an accomplished graphic designer, having done his Masters work in Industrial Design at the prestigious Pratt Institute and a BFA in Advertising/Graphic Design from the New York Inst...

   CATEGORY: Licensing, Media & Brand Strategy (1 members)
   ----------------------------------------------------------------------
   Name:     Arin Kairam
   Position: Senior Public Relations Advisor
   LinkedIn: http://linkedin.com/in/russell-brown-3579393
   Bio:      Arin Kairam is a communications professional and writer with experience in public relations, media relations, and content development. He combines a strong foundation ... in strategic communications w...

   CATEGORY: Strategy, Technology & Security (6 members)
   ----------------------------------------------------------------------
   Name:     Kenneth “Bridger” Roy
   Position: Board of Advisors
   LinkedIn: http://linkedin.com/in/bridgerroy
   Bio:      Bridger Roy is a Lead Associate (Intelligence & Technology Expert) for Booz Allen Hamilton supporting the U.S. Department of Defense (DOD) and various Intelligence Community (IC) agencies/departments....
   ----------------------------------------------------------------------
   Name:     Keti Mehta
   Position: Board of Advisors
   LinkedIn: https://www.linkedin.com/in/keti-mehta-pcc-61541313/
   Bio:      Keti leads by example and is a highly skilled, certified sales activator, leadership development coach, talent enthusiast and evangelist of the Customer Experience. Mehta has also held senior executiv...
   ----------------------------------------------------------------------
   Name:     Corey Lancaster
   Position: Board of Directors New York Auto Experience
   LinkedIn: https://www.linkedin.com/in/coreylancaster/
   Bio:      Please welcome Corey S. Lancaster—a cybersecurity executive, AI-certified strategist, and U.S. Air Force veteran with over 25 years of experience in defense, government, finance, critical infrastructi...
   ----------------------------------------------------------------------
   Name:     Kyle Beagle
   Position: President, New York Auto Experience Inc. Board of Directors
   LinkedIn: https://www.linkedin.com/in/kylejb2456/
   Bio:      Kyle Beagle is a seasoned federal acquisition and procurement leader with over 17 years of experience supporting defense, small business, and innovation initiatives across the U.S. government. He curr...
   ----------------------------------------------------------------------
   Name:     George Panagiotakopoulos
   Position: Independent, Board Members New York Auto Experience Inc
   LinkedIn: https://www.linkedin.com/in/gpanagiotakopoulos/
   Bio:      George Panagiotakopoulos is a seasoned professional with extensive experience in innovation, entrepreneurship, and business strategy. He currently serves as the Head of Global Expansion at the Univers...
   ----------------------------------------------------------------------
   Name:     Steven Schwartz
   Position: Board Member New York Auto Museum
   LinkedIn: https://www.linkedin.com/in/stevenschwartzcyber/
   Bio:      Steven is a seasoned leader in cyber risk and insurance innovation, with over a decade of experience bridging technology, risk, and finance. He leads strategy and partnerships ... for a global cyber r...

============================================================================== */
