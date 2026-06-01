// ── CAREPROMO SHARED DATA & UTILITIES ──
// Edit SITE_CONFIG to customize your store

const SITE_CONFIG = {
  name: 'HealthPromo',
  tagline: 'Healthcare & ABA Promotional Items',
  phone: '(516) 655-5423',
  phoneRaw: '5166555423',
  email: 'info@healthpromo.net',
  formspreeId: 'mnjgwbyv',
  appsScriptUrl: 'https://script.google.com/macros/s/AKfycbz_p7HKA8qsz8YYCIxYKR-qzbuFPuKZxxo1zF4Ac7h9zQoLPqd5lzeFSSY-swSpPSbMjg/exec',
  adminPassword: 'healthpromo2025',        // ← CHANGE THIS
};

// ── DEFAULT PRODUCT CATALOG ──
const DEFAULT_CATALOG = [
  {
    id: 'fidgets', label: 'Fidgets', emoji: '🌀',
    products: [
      { id: 'f1', name: 'Flip & Slide Magnetic Stress Reliever', price: '$4.08', colors: 6, img: 'images/fidgets/f1.png', description: 'Satisfy restless hands with this flip-and-slide magnetic stress reliever, available in 6 vibrant colors. The satisfying tactile click of the magnets makes it a perfect calming tool for waiting rooms and therapy sessions. Customize with your clinic\'s logo for a branded giveaway patients will actually use.' },
      { id: 'f2', name: 'Fidget Puzzle Ball', price: '$2.48', img: 'images/fidgets/f2.png', description: 'This colorful fidget puzzle ball challenges dexterity and focus while keeping hands engaged. Made for all ages, it\'s an ideal therapeutic gift for ABA therapy centers and pediatric clinics. Custom-brandable so your logo stays in patients\' and clients\' hands.' },
      { id: 'f3', name: 'Fidget Spinner Stress Relief Stick', price: '$0.81', colors: 5, img: 'images/fidgets/f3.png', description: 'A sleek stress relief stick with a built-in spinner, available in 5 colors. Perfect for sensory-seeking individuals who need a discreet, on-the-go fidget tool. Custom logo printing turns it into a memorable branded giveaway from your practice.' },
      { id: 'f4', name: '"QUANTUM" Pop N Spin Stress Reliever', price: '$2.35', img: 'images/fidgets/f4.png', description: 'The QUANTUM Pop N Spin delivers two satisfying actions in one compact toy — push the poppable surface or spin it for instant stress relief. A fan-favorite in therapeutic and educational settings, it\'s both calming and engaging. Brand it with your logo for a standout promotional item.' },
      { id: 'f5', name: 'Push Pop Square Stress Reliever Game', price: '$2.69', colors: 2, img: 'images/fidgets/f5.png', description: 'This push pop square stress reliever packs a familiar popping game into a compact, squeezable form — available in 2 colors. Great for waiting rooms, goodie bags, and sensory kits, it\'s a crowd-pleasing tool that doubles as a branded promo. Keep your clinic top-of-mind every time it\'s used.' },
      { id: 'f6', name: 'Captain Smiley Stress Reliever', price: '$1.99', img: 'images/fidgets/f6.png', description: 'Captain Smiley is a fun, squishy stress reliever that brings a smile to every squeeze. A lighthearted promotional item perfect for pediatric and ABA therapy practices, it makes stress relief approachable and fun. Customizable with your logo for events, giveaways, and welcome kits.' },
      { id: 'f7', name: 'Moptoppers Stress Reliever', price: '$2.24', colors: 2, img: 'images/fidgets/f7.png', description: 'The Moptoppers stress reliever squeezes into a colorful character with wild hair — a playful, memorable giveaway for kids and adults alike. Available in 2 colors, it\'s a standout item for ABA therapy centers and community health events. Custom imprinting keeps your brand front and center.' },
      { id: 'f8', name: 'Molecool Stress Ball', price: '$4.00', min: 1000, colors: 3, img: 'images/fidgets/f8.png', description: 'The Molecool stress ball features a unique molecular-inspired design that\'s satisfying to squeeze and fidget with. Available in 3 colors with a minimum order of 1,000 units, it\'s ideal for large-scale promotional campaigns and client appreciation programs. Your custom logo gives it a professional, branded finish.' },
      { id: 'f9', name: 'Fidget Sensory Worm', price: '$1.95', min: 500, colors: 2, img: 'images/fidgets/f9.png', description: 'This flexible sensory worm bends, twists, and stretches for satisfying tactile stimulation. Available in 2 colors with a 500-unit minimum, it\'s a great choice for ABA therapy goodie bags and pediatric waiting rooms. Lightweight and durable, it travels well and keeps your brand visible wherever it goes.' },
      { id: 'f10', name: 'Stress Reliever Ball', price: '$1.31', min: 1000, img: 'images/fidgets/f10.png', description: 'A classic custom stress ball at an unbeatable price — perfect for bulk giveaways at health fairs, conferences, and awareness events. The simple squeeze-and-release design provides immediate stress relief for all ages. Imprint your logo in full color for maximum brand visibility.' },
      { id: 'f11', name: '2-in-1 Push Pop Stress Reliever Phone and Keychain Wristlet', price: '$2.78', img: 'images/fidgets/f11.jpg', description: 'This 2-in-1 multitasker serves as both a push pop fidget toy and a phone/keychain wristlet — perfect for on-the-go clients and staff. The poppable silicone surface provides calming sensory feedback while keeping your device close at hand. A uniquely practical branded giveaway that gets used every day.' },
      { id: 'f12', name: 'Aura Sensory Activity Game', price: '$2.65', img: 'images/fidgets/f12.jpg', description: 'The Aura Sensory Activity Game engages multiple senses with its interactive, multi-function design that\'s great for focus and calm. Ideal for ABA therapy centers and therapeutic care environments, it doubles as an engaging activity and a branded take-home gift. A memorable item that supports sensory development and keeps your brand top of mind.' },
      { id: 'f13', name: "Ball 'N Maze Sensory Fidget Spinner", price: '$2.35', img: 'images/fidgets/f13.jpg', description: 'Combine the fun of a maze with the satisfaction of a spinner — the Ball \'N Maze Sensory Fidget Spinner challenges coordination while providing soothing sensory input. A great add-on for sensory kits and therapy gift bags at ABA centers. Brand it with your logo for a purposeful, custom promotional item.' },
      { id: 'f14', name: 'Dragon Spring Game', price: '$1.67', img: 'images/fidgets/f14.jpg', description: 'The Dragon Spring Game is a delightfully springy, tactile fidget with a playful design kids and adults love. Its flexible spring action provides soothing sensory feedback, making it a natural fit for therapy-focused promotional programs. Affordable and easy to customize with your practice\'s branding.' },
      { id: 'f15', name: 'Eye-Popping Push Pop Ball', price: '$2.10', img: 'images/fidgets/f15.jpg', description: 'Watch the eyes pop out and bounce back with this eye-popping push pop ball — a silly, satisfying stress reliever that never gets old. Perfect for pediatric clinics, therapy centers, and wellness events where laughter is part of the medicine. Custom-branded for a giveaway that leaves a lasting impression.' },
      { id: 'f16', name: 'Gear Push Pop Spinner', price: '$1.95', img: 'images/fidgets/f16.jpg', description: 'The Gear Push Pop Spinner combines a tactile push-pop surface with a spinning gear mechanism for double the sensory engagement. A great sensory tool for ABA and behavioral health settings, it entertains and calms in equal measure. Imprint your logo on this eye-catching item for unforgettable branded giveaways.' },
      { id: 'f17', name: 'Massage Finger Fidget Spinner', price: '$2.27', img: 'images/fidgets/f17.jpg', description: 'Designed with massage nubs on the spinner blades, this Massage Finger Fidget Spinner soothes fingertips while satisfying the need to spin. A thoughtful, therapeutic giveaway for healthcare and wellness organizations. Your custom imprint turns it into a branded self-care gift clients will reach for again and again.' },
      { id: 'f18', name: 'Massage Roller with Spinner', price: '$2.95', img: 'images/fidgets/f18.jpg', description: 'This dual-purpose Massage Roller with Spinner lets users roll away tension while enjoying a tactile spinner at their fingertips. An elevated sensory tool for healthcare professionals and therapy centers, it combines utility with playful engagement. A premium-feeling branded gift at an accessible price point.' },
      { id: 'f19', name: 'Push Pop Ball Suction Cup Phone Stand', price: '$2.15', img: 'images/fidgets/f19.jpg', description: 'A 3-in-1 win: this Push Pop Ball doubles as a phone stand with a built-in suction cup — sensory therapy, entertainment, and desk utility all in one. Perfect for clients, caregivers, and staff at ABA therapy centers and medical practices. Your logo on this daily-use item means maximum brand impressions.' },
      { id: 'f20', name: 'Push Pop Bounce Ball', price: '$1.95', img: 'images/fidgets/f20.jpg', description: 'The Push Pop Bounce Ball offers the satisfying tactile pop of a push-pop toy in a bounceable form that\'s hard to put down. Great for waiting rooms, sensory break kits, and therapy giveaways, it combines play with calming proprioceptive input. A fun, budget-friendly branded item that always gets attention.' },
      { id: 'f21', name: 'Push Pop Charging Cable with Keyring & Screen Cleaner', price: '$4.95', img: 'images/fidgets/f21.jpg', description: 'This tech-forward Push Pop Charging Cable combines a poppable fidget surface with a functional charging cable, keyring, and screen cleaner. An incredibly practical branded gift for clients and staff who appreciate both sensory engagement and everyday utility. A standout premium giveaway with a high perceived value.' },
      { id: 'f22', name: 'Push Pop Cube', price: '$1.75', img: 'images/fidgets/f22.jpg', description: 'The compact Push Pop Cube delivers satisfying sensory activity in a palm-sized package. A therapeutic favorite for ABA therapy centers, schools, and wellness programs, it provides discreet, on-the-go fidget relief. Custom logo branding makes it an ideal high-value giveaway at a low price.' },
      { id: 'f23', name: 'Push Pop Propeller With Suction Cup', price: '$2.00', img: 'images/fidgets/f23.jpg', description: 'Pop the propeller free from its suction cup base and watch it fly — a fun desk toy that delivers sensory pop satisfaction and a surprising launch feature. Great for pediatric therapy environments and health event giveaways. Easy to brand and big on engagement.' },
      { id: 'f24', name: 'Push Pop Round Bubble Game', price: '$2.05', img: 'images/fidgets/f24.jpg', description: 'This Push Pop Round Bubble Game challenges users to pop all the bubbles in sequence — a calming, focus-building activity perfect for waiting rooms and sensory kits. Its round shape makes it comfortable to hold and play with repeatedly. A branded version is a thoughtful and useful giveaway for any healthcare setting.' },
      { id: 'f25', name: 'Push Pop Spinning Top', price: '$2.05', img: 'images/fidgets/f25.jpg', description: 'Spin this Push Pop Spinning Top for a hypnotic, calming visual and tactile experience equally satisfying for kids and adults. A natural fit for ABA therapy giveaway bags and pediatric wellness programs, it promotes focus and fine motor engagement. Your custom branding rides along on a toy people genuinely want to keep.' },
      { id: 'f26', name: 'Push Pop and Spinner Ball', price: '$2.45', img: 'images/fidgets/f26.jpg', description: 'The Push Pop and Spinner Ball delivers pop-and-spin sensory satisfaction in a compact, hand-friendly ball shape. Versatile enough for waiting rooms, therapy sessions, and event giveaways, it appeals to a wide range of ages and sensory preferences. A custom-branded version turns this popular fidget into a powerful marketing tool.' },
      { id: 'f27', name: 'Round Spiral Notebook Push Pop', price: '$2.17', img: 'images/fidgets/f27.jpg', description: 'Turn downtime into a creative moment — this Round Spiral Notebook with a built-in Push Pop fidget is equal parts stationery and stress reliever. Perfect for patient education events, therapy centers, and school outreach programs. Your logo on the cover puts your brand in the hands of clients every time they write or fidget.' },
      { id: 'f28', name: 'Square Spiral Notebook Push Pop', price: '$2.17', img: 'images/fidgets/f28.jpg', description: 'Combine note-taking with sensory relief — this Square Spiral Notebook features a built-in Push Pop fidget panel for on-the-go stress management. Useful for therapy sessions, healthcare education events, and staff appreciation kits. A thoughtful custom-branded gift that serves a real purpose every day.' },
      { id: 'f29', name: 'Starburst Color Changing Ball', price: '$3.27', img: 'images/fidgets/f29.jpg', description: 'The Starburst Color Changing Ball shifts colors as it\'s twisted and squeezed, delivering a mesmerizing visual and tactile experience. A premium sensory toy perfect for therapy gift bags, health fair giveaways, and wellness events. Its color-changing magic makes it a giveaway that clients will show off and remember.' },
      { id: 'f30', name: 'Theta Spinning Top', price: '$2.05', img: 'images/fidgets/f30.jpg', description: 'The Theta Spinning Top provides a steady, satisfying spin that promotes mindfulness and focus with each flick of the finger. A sleek, modern fidget tool ideal for ABA therapy centers, behavioral health waiting rooms, and stress relief kits. Custom branding gives your practice presence on a product clients will treasure.' },
      { id: 'f31', name: 'Axis Double Spinner', price: '$2.95', img: 'images/fidgets/f31.webp', description: 'This dual-ring fidget spinner delivers a uniquely satisfying spin experience with two independently rotating axes that move in mesmerizing, hypnotic patterns. The smooth bearing mechanism and lightweight frame make it ideal for stress relief, focus support, and sensory engagement throughout the day. A bold imprint area on the center disc turns every spin into a branded moment — perfect for health clinics, wellness programs, and corporate giveaways.' },
      { id: 'f32', name: 'Football Push Pop Ball', price: '$1.88', img: 'images/fidgets/f32.jpg', description: 'This football-shaped push pop ball scores big as a sensory tool for sports-themed wellness events and pediatric therapy programs. Every bubble-popping session delivers satisfying tactile feedback that helps calm and focus both kids and adults. Customize with your logo for a crowd-pleasing giveaway that hits from every angle.' },
      { id: 'f33', name: 'Heart Push Pop Ball', price: '$1.88', img: 'images/fidgets/f33.jpg', description: 'Show clients some love with this heart-shaped push pop fidget that combines soothing sensory activity with a warm, feel-good design. Perfect for Valentine\'s promotions, mental health awareness events, and therapy welcome kits. A branded heart push pop is a giveaway that genuinely resonates.' },
      { id: 'f34', name: 'Heart Push Pop Ball V2', price: '$1.88', img: 'images/fidgets/f34.jpg', description: 'An updated take on the classic heart push pop, this version features an enhanced bubble layout for even more satisfying popping action. Ideal for healthcare and ABA therapy settings where sensory tools need to be both functional and fun. Imprint your logo for a heartfelt branded keepsake.' },
      { id: 'f35', name: 'Round Spring', price: '$1.66', img: 'images/fidgets/f35.jpg', description: 'This compact round spring coils and springs back with a satisfying flex, providing tactile fidget stimulation for restless hands. Lightweight and pocket-sized, it\'s a natural fit for sensory break kits and therapy waiting rooms. A simple, effective stress tool that keeps your brand in constant motion.' },
      { id: 'f36', name: 'Two-Way Fidget Spinner Bottle Opener', price: '$1.92', img: 'images/fidgets/f36.jpg', description: 'This clever 2-in-1 gadget combines a smooth dual-blade fidget spinner with a functional bottle opener for maximum everyday utility. A unique conversation-starter giveaway for wellness events, health fairs, and staff appreciation programs. Your custom imprint travels with it everywhere — from the therapy office to the break room.' },
      { id: 'f37', name: 'USA Fun Putty', price: '$1.71', img: 'images/fidgets/f37.jpg', description: 'This classic moldable putty stretches, squishes, and bounces for open-ended sensory play that never gets old. A staple in occupational therapy and ABA settings, it supports fine motor development and stress relief in equal measure. Brand it with your logo for a tactile take-home gift clients will reach for daily.' },
      { id: 'f38', name: 'USA Fun Scented Putty', price: '$1.76', img: 'images/fidgets/f38.jpg', description: 'All the satisfying stretch and squish of classic putty, now with a delightful scent that adds an extra sensory dimension. The added olfactory element makes it especially engaging for sensory integration therapy and calming routines. A uniquely memorable branded giveaway that engages touch and smell together.' },
      { id: 'f39', name: 'Wooden Snake Puzzle', price: '$3.49', img: 'images/fidgets/f39.jpg', description: 'This articulated wooden snake puzzle twists and folds into hundreds of shapes, offering a calming, screen-free fidget experience for all ages. Its natural wood finish gives it a premium feel that stands out among typical promotional giveaways. A thoughtful branded gift for therapy centers and wellness programs that value mindful, tactile play.' },
      { id: 'f40', name: '5" Football Stress Reliever', price: '$2.24', img: 'images/fidgets/f40.jpg', description: 'This 5-inch foam football stress reliever is a classic squeeze toy that scores touchdowns at sports-themed health events and community outreach programs. Satisfying to grip and toss, it\'s a natural icebreaker and stress buster for waiting rooms and therapy sessions. Custom-imprinted with your logo, it keeps your brand in the game long after the event ends.' },
      { id: 'f41', name: 'Baseball Stress Reliever', price: '$1.22', img: 'images/fidgets/f41.jpg', description: 'Step up to the plate with this foam baseball stress reliever that\'s a home run at sports medicine clinics, pediatric offices, and community health fairs. The familiar shape makes it instantly approachable for patients of all ages. Customize it with your practice\'s logo for a branded giveaway that goes the distance.' },
      { id: 'f42', name: 'Beachball Stress Reliever', price: '$1.55', img: 'images/fidgets/f42.jpg', description: 'Bring a splash of summer fun to stress relief with this colorful beachball-shaped foam squeezie. Its bright, eye-catching design makes it a standout giveaway at outdoor health fairs, wellness expos, and seasonal promotional events. Imprint your logo for maximum visibility and a keepsake clients will genuinely enjoy.' },
      { id: 'f43', name: 'Construction Cone Stress Reliever', price: '$1.40', img: 'images/fidgets/f43.jpg', description: 'This mini construction cone stress reliever is a fun, novelty squeeze toy that\'s a hit at occupational health, workplace wellness, and safety awareness events. Its bright orange color and recognizable shape make it a memorable branded giveaway that stands out in any swag bag. A creative way to promote your organization\'s health and safety message.' },
      { id: 'f44', name: 'Cube Stress Reliever', price: '$2.17', img: 'images/fidgets/f44.jpg', description: 'This simple foam cube stress reliever delivers reliable squeeze-and-release therapy in a clean, geometric shape that looks great with any imprint. A versatile giveaway that works across healthcare, corporate wellness, and ABA therapy settings. Bold logo placement on all six sides ensures your brand gets seen from every angle.' },
      { id: 'f45', name: 'Droplet Stress Reliever', price: '$1.22', img: 'images/fidgets/f45.jpg', description: 'Shaped like a water droplet, this smooth foam stress reliever fits perfectly in the palm for a satisfying, ergonomic squeeze. Its clean, modern silhouette makes it a natural fit for healthcare organizations, wellness brands, and hydration-focused health campaigns. A distinctive custom giveaway that communicates care and calm.' },
      { id: 'f46', name: 'Hard Hat Stress Reliever', price: '$1.22', img: 'images/fidgets/f46.jpg', description: 'This hard hat-shaped stress reliever is a natural fit for occupational health programs, workplace safety campaigns, and construction industry wellness events. Squeeze away job-site stress with this fun, industry-relevant giveaway that doubles as a conversation starter. Custom-branded for safety-focused organizations that want their message to stick.' },
      { id: 'f47', name: 'Light Bulb Stress Reliever', price: '$1.63', img: 'images/fidgets/f47.jpg', description: 'Bright ideas deserve a bright stress reliever — this light bulb-shaped foam squeezie is a clever giveaway for innovation-focused health organizations and wellness programs. Its unique shape sparks curiosity and conversation at trade shows and health fairs. Imprint your logo for a branded item that lights up any swag collection.' },
      { id: 'f48', name: 'Pickleball Stress Ball', price: '$1.22', img: 'images/fidgets/f48.jpg', description: 'Ride the pickleball wave with this sport-specific stress ball that\'s perfectly timed for active lifestyle and recreational wellness promotions. Its textured surface and satisfying squeeze make it as functional as it is on-trend. A branded giveaway that connects your practice to the fastest-growing sport in America.' },
      { id: 'f49', name: 'Round Stress Ball', price: '$1.22', img: 'images/fidgets/f49.jpg', description: 'The round stress ball is a timeless promotional staple — universally loved, endlessly squeezable, and perfect for any healthcare or wellness giveaway program. Its classic shape provides a large, clean imprint area for maximum logo visibility. Affordable enough for bulk orders and quality enough to keep clients coming back.' },
      { id: 'f50', name: 'Stars & Stripes Patriotic Round Stress Ball', price: '$1.79', img: 'images/fidgets/f50.jpg', description: 'Show your patriotic spirit with this red, white, and blue round stress ball — a standout giveaway for Fourth of July health fairs, veterans\' wellness events, and community outreach programs. The bold flag-inspired design ensures your branded item gets noticed and remembered. A perfect seasonal stress reliever that celebrates both health and national pride.' },
      { id: 'f51', name: 'Tennis Ball Stress Reliever', price: '$1.04', img: 'images/fidgets/f51.jpg', description: 'This foam tennis ball stress reliever is a great match for sports medicine clinics, active lifestyle wellness programs, and recreational therapy giveaways. Its familiar fuzzy texture and bright yellow color make it instantly recognizable and fun to squeeze. Serve up your brand at the next health fair with a custom-imprinted giveaway that\'s always in play.' },
      { id: 'f52', name: 'Tooth Shaped Stress Reliever', price: '$1.70', img: 'images/fidgets/f52.jpg', description: 'This tooth-shaped foam stress reliever is a natural fit for dental offices, oral health outreach programs, and healthcare giveaway events. Its playful design makes routine dental visits more memorable while reinforcing your practice\'s brand. A uniquely relevant promotional item that patients young and old will smile about.' },
      { id: 'f53', name: 'Volleyball Stress Reliever', price: '$1.22', img: 'images/fidgets/f53.jpg', description: 'Bump, set, and squeeze — this volleyball-shaped stress reliever is a winning giveaway for sports medicine clinics, recreational therapy programs, and active wellness events. Its detailed panel design and satisfying foam squeeze make it a standout in any swag collection. Custom-imprinted with your logo for a branded item that stays in the game.' },
      { id: 'f54', name: 'Executive Survival Kit', price: '$9.75', img: 'images/fidgets/f54.jpg', description: 'The Executive Survival Kit bundles essential desk-side stress relief tools into one premium branded package — perfect for corporate wellness programs, leadership appreciation gifts, and high-value client giveaways. Each kit delivers a curated sensory experience that supports focus, calm, and resilience throughout the workday. A thoughtful, elevated promotional item that communicates your organization\'s genuine commitment to wellbeing.' },
    ]
  },
  {
    id: 'apparel', label: 'Apparel', emoji: '👕',
    products: [
      { id: 'a1', name: 'Core Cotton Tee (PC54)', price: '$4.94', originalPrice: '$10.68', colors: 10, img: 'images/apparel/a1.png', description: 'The Port & Company Core Cotton Tee (PC54) is a wardrobe staple available in 10 colors — soft, durable, and comfortable enough that your team will actually want to wear it. Custom embroidery or screen printing with your clinic\'s logo creates a cohesive, professional look for staff and volunteers. Currently available at a deeply discounted price for healthcare promotional budgets.' },
      { id: 'a2', name: 'Core Fleece Pullover Hoodie (PC78H)', price: '$21.82', originalPrice: '$29.08', colors: 10, img: 'images/apparel/a2.png', description: 'The Port & Company Core Fleece Pullover Hoodie (PC78H) offers cozy, midweight warmth in 10 colors — a go-to piece for clinical and community outreach teams. Custom logo embroidery turns it into a branded uniform that promotes your organization with every wear. On sale now — a great opportunity to stock up for the season.' },
      { id: 'a3', name: 'Core Fleece Crewneck Sweatshirt (PC78)', price: '$12.62', originalPrice: '$19.62', colors: 26, img: 'images/apparel/a3.png', description: 'With 26 available colors, the Port & Company Core Fleece Crewneck Sweatshirt (PC78) is one of the most customizable branded apparel pieces in our collection. A soft, comfortable layering piece perfect for clinical staff, event crews, and promotional giveaways. Currently on sale — ideal for ordering in bulk for your healthcare team.' },
      { id: 'a4', name: 'Core Fleece Full-Zip Hoodie (PC78ZH)', price: '$27.94', originalPrice: '$37.04', colors: 46, img: 'images/apparel/a4.png', description: 'The Port & Company Core Fleece Full-Zip Hoodie (PC78ZH) is a premium branded apparel item offered in an industry-leading 46 colors. Functional, comfortable, and polished, it\'s the perfect layering piece for staff uniforms and community event teams. Currently available at a significant discount — lock in your organization\'s colors before they\'re gone.' },
    ]
  },
  {
    id: 'drinkware', label: 'Drinkware', emoji: '🥤',
    products: [
      { id: 'd1', name: '24 oz Recycled Squared Tumbler', price: '$9.75', colors: 2, img: 'images/drinkware/d1.png', description: 'This 24 oz Recycled Squared Tumbler is an eco-conscious hydration companion available in 2 colors, made from recycled materials that align with your organization\'s commitment to sustainability. Its squared profile and generous capacity make it a practical gift for clients, caregivers, and staff. Custom logo printing turns every sip into a brand impression.' },
      { id: 'd2', name: '27 oz EverGreen Recycled Bottle', price: '$5.75', colors: 3, img: 'images/drinkware/d2.png', description: 'Made from recycled materials, the 27 oz EverGreen Recycled Bottle is a large-capacity hydration bottle that sends a green message with every refill. Available in 3 colors, it\'s perfect for community wellness events, staff appreciation programs, and patient gift bags. Your custom-imprinted logo reinforces your organization\'s values and visibility.' },
      { id: 'd3', name: '24 oz EcoFusion Recycled Tumbler', price: '$8.25', colors: 6, img: 'images/drinkware/d3.png', description: 'The 24 oz EcoFusion Recycled Tumbler blends sustainability with style, available in 6 vibrant colors for maximum customization. Ideal for healthcare organizations that prioritize eco-friendly promotional items, it makes a strong statement at conferences, health fairs, and wellness programs. A reusable gift that clients will reach for long after the event.' },
      { id: 'd4', name: '24 oz Chameleon Color Change Tumbler', price: '$2.75', colors: 6, img: 'images/drinkware/d4.png', description: 'Watch your logo transform as the 24 oz Chameleon Color Change Tumbler shifts colors with temperature — a jaw-dropping effect that turns your brand into a conversation starter. Available in 6 color options, it\'s a standout item for healthcare events, patient appreciation campaigns, and community outreach. The magic reveal every time it\'s filled ensures your branding gets noticed.' },
      { id: 'd5', name: '11 oz Boho Ceramic Mug', price: '$6.75', img: 'images/drinkware/d5.webp', description: 'This 11 oz Boho Ceramic Mug brings warmth and style to your branded drinkware lineup with its artisan-inspired design. Perfect for staff appreciation gifts, clinic waiting areas, and wellness event giveaways, it pairs beautifully with your logo imprint. A cozy, everyday item that keeps your healthcare brand front and center with every morning coffee or tea.' },
      { id: 'd6', name: '16 oz Bamboo Arcoroc Glass', price: '$7.50', img: 'images/drinkware/d6.webp', description: 'This 16 oz Bamboo Arcoroc Glass combines the clean look of glass with a sustainable bamboo sleeve for a premium eco-friendly drinkware option. Ideal for health-conscious organizations and sustainability-focused giveaway programs, it communicates your brand\'s commitment to the environment. A sophisticated promotional item that elevates any healthcare or wellness gifting experience.' },
      { id: 'd7', name: '18 oz Slique Recycled Tumbler', price: '$6.75', img: 'images/drinkware/d7.webp', description: 'The 18 oz Slique Recycled Tumbler pairs sleek, modern styling with eco-conscious construction from recycled materials. Its slim profile fits most cup holders, making it a practical daily companion for clients, staff, and caregivers on the go. Custom logo imprinting on this sustainability-forward tumbler reinforces your organization\'s values with every use.' },
      { id: 'd8', name: '18.6 oz Simple Bottle', price: '$10.75', img: 'images/drinkware/d8.webp', description: 'The 18.6 oz Simple Bottle lives up to its name — clean lines, reliable performance, and a no-fuss design that works for any lifestyle. A versatile hydration giveaway for health fairs, therapy centers, and corporate wellness programs, it keeps your brand visible throughout the day. Simple in design, powerful in impact.' },
      { id: 'd9', name: '20 oz Joe Recycled Tumbler', price: '$14.25', img: 'images/drinkware/d9.webp', description: 'The 20 oz Joe Recycled Tumbler is a go-to drinkware piece built from recycled materials for the eco-aware professional. Its generous 20 oz capacity handles coffee, tea, or cold beverages with ease — perfect for clinic staff, event attendees, and client appreciation kits. A branded tumbler that makes sustainability a daily habit.' },
      { id: 'd10', name: '20 oz Lulumax Bottle', price: '$13.75', img: 'images/drinkware/d10.webp', description: 'The 20 oz Lulumax Bottle features a sporty, ergonomic design that\'s built to keep up with active healthcare professionals and wellness-focused clients. Durable and leak-resistant, it\'s a practical branded gift for health fairs, fitness challenges, and community outreach events. Your logo on this high-use bottle means maximum daily brand exposure.' },
      { id: 'd11', name: '20 oz Soho Bottle', price: '$16.00', img: 'images/drinkware/d11.webp', description: 'The 20 oz Soho Bottle brings urban-chic design to promotional drinkware with a clean silhouette that looks great on any desk or gym bag. A stylish hydration gift for healthcare professionals, therapy center staff, and wellness program participants. Customize with your logo for a branded piece that blends seamlessly into everyday life.' },
      { id: 'd12', name: '20 oz Traveler Tumbler', price: '$16.00', img: 'images/drinkware/d12.webp', description: 'The 20 oz Traveler Tumbler is designed for life on the move — spill-resistant lid, insulated walls, and a comfortable grip make it the ideal companion for busy healthcare professionals and clients. A reliable branded giveaway for conferences, health fairs, and staff appreciation programs. Keep your logo traveling wherever your recipients go.' },
      { id: 'd13', name: '20 oz Vero Vacuum Insulated Tumbler', price: '$17.50', img: 'images/drinkware/d13.webp', description: 'The 20 oz Vero Vacuum Insulated Tumbler keeps beverages hot for hours and cold all day, delivering premium drinkware performance in a sleek package. An elevated branded gift for client appreciation events, executive gifting, and healthcare staff recognition programs. The vacuum insulation means your logo is in their hands long after the event ends.' },
      { id: 'd14', name: '24 oz Aluminum Loopy Bottle', price: '$5.50', img: 'images/drinkware/d14.webp', description: 'The 24 oz Aluminum Loopy Bottle features a convenient loop-top lid for easy carrying and a durable aluminum body that\'s built to last. A great hydration giveaway for outdoor health events, wellness challenges, and active lifestyle promotions. Lightweight, functional, and fully customizable with your organization\'s branding.' },
      { id: 'd15', name: '24 oz Aurora Tumbler', price: '$1.83', img: 'images/drinkware/d15.webp', description: 'The 24 oz Aurora Tumbler captivates with its shimmering finish and generous capacity — a premium drinkware piece that stands out in any branded giveaway program. Ideal for client appreciation events, healthcare conferences, and staff recognition gifts, it delivers both style and functionality. Your custom logo shines on this eye-catching tumbler.' },
      { id: 'd16', name: '24 oz Bux Glitter Recycled Tumbler', price: '$10.50', img: 'images/drinkware/d16.webp', description: 'Add some sparkle to your sustainability story with the 24 oz Bux Glitter Recycled Tumbler — eco-friendly construction meets dazzling glitter finish for a giveaway that gets noticed. Perfect for health awareness campaigns, women\'s wellness events, and patient appreciation programs. A glamorous way to keep your brand top of mind and the planet in mind.' },
      { id: 'd17', name: '24 oz Bux Metallic Recycled Tumbler', price: '$10.50', img: 'images/drinkware/d17.webp', description: 'The 24 oz Bux Metallic Recycled Tumbler delivers premium metallic style with eco-conscious recycled construction — a winning combination for brands that value both aesthetics and sustainability. A sophisticated branded drinkware piece for healthcare conferences, executive gifting, and upscale wellness events. Bold logo placement on this striking tumbler ensures your brand makes an impression.' },
      { id: 'd18', name: '26 oz Macaron Recycled Tumbler', price: '$8.00', img: 'images/drinkware/d18.webp', description: 'The 26 oz Macaron Recycled Tumbler brings pastel-inspired style to eco-friendly drinkware with a look that\'s as fresh as it is sustainable. Its larger capacity makes it ideal for all-day hydration at health fairs, therapy centers, and community wellness events. A cheerful, on-trend branded giveaway that resonates with health-conscious audiences.' },
      { id: 'd19', name: '27 oz EcoSip Recycled Mug', price: '$18.75', img: 'images/drinkware/d19.webp', description: 'The 27 oz EcoSip Recycled Mug combines a generous mug format with recycled-material construction for a sustainable drinkware option with serious capacity. Great for early-morning clinic staff meetings, patient lounges, and eco-focused wellness programs. Your custom logo on this oversized mug means your brand is seen with every sip throughout the day.' },
      { id: 'd20', name: '27 oz SilkChic Tumbler', price: '$10.00', img: 'images/drinkware/d20.webp', description: 'The 27 oz SilkChic Tumbler pairs a soft-touch silky finish with an impressive 27 oz capacity for a drinkware piece that feels as good as it looks. A premium branded gift for healthcare conferences, staff appreciation events, and high-value client giveaway programs. The luxurious finish and large imprint area make your logo impossible to ignore.' },
      { id: 'd21', name: '32 oz EcoPatriot Recycled Bottle', price: '$20.75', img: 'images/drinkware/d21.webp', description: 'The 32 oz EcoPatriot Recycled Bottle combines patriotic spirit with serious sustainability — built from recycled materials with a bold design that stands out at community health events and veterans\' wellness programs. Its large capacity supports all-day hydration for active clients and staff. A branded bottle that celebrates both health and national pride.' },
      { id: 'd22', name: 'Simple Tumbler', price: '$16.50', img: 'images/drinkware/d22.webp', description: 'The Simple Tumbler is exactly what it sounds like — clean, functional, and effortlessly versatile. A no-frills branded drinkware option that works for any healthcare giveaway, staff gift, or wellness event. Sometimes the most effective promotional items are the ones people actually use every day, and this tumbler delivers exactly that.' },
      { id: 'd23', name: 'Sleeved Glass Bottle', price: '$15.00', img: 'images/drinkware/d23.webp', description: 'The Sleeved Glass Bottle pairs the purity of glass hydration with a protective silicone sleeve for a premium, health-conscious drinkware option. Ideal for wellness-focused organizations and clients who prefer BPA-free glass over plastic. A sophisticated branded bottle that communicates your commitment to clean, healthy living.' },
      { id: 'd24', name: 'The Heavy Pour Mug', price: '$6.75', img: 'images/drinkware/d24.webp', description: 'The Heavy Pour Mug is built for serious beverage drinkers — substantial in weight, generous in capacity, and satisfying in every pour. A premium branded mug for healthcare staff lounges, executive gifting, and client appreciation programs where quality matters. Your logo on this heavyweight piece makes a lasting impression with every use.' },
    ]
  },
  {
    id: 'bags', label: 'Bags', emoji: '🎒',
    products: [
      { id: 'b1', name: 'Anywhere Quick Release Fanny Pack', price: null, img: 'images/bags/b1.png', description: 'The Anywhere Quick Release Fanny Pack is a hands-free carry solution perfect for busy clinic staff, health fair volunteers, and active clients. Its quick-release buckle system provides convenient access while keeping essentials secure and close. Custom logo branding makes it a practical, stylish giveaway for any healthcare or wellness program.' },
      { id: 'b2', name: 'Designer Tote Bag with Curved Corners', price: '$2.25', colors: 2, img: 'images/bags/b2.png', description: 'This Designer Tote Bag with Curved Corners brings a premium look to your promotional lineup, available in 2 colors at a budget-friendly price. Spacious enough for patient education materials, wellness kits, and everyday essentials, it\'s a carry-all your clients will use for years. Your custom-imprinted logo travels wherever the bag does.' },
      { id: 'b3', name: '14" Polyester Drawstring Backpack', price: null, img: 'images/bags/b3.png', description: 'The 14" Polyester Drawstring Backpack is a classic promotional item that works for all ages — patients, caregivers, staff, and event attendees. Lightweight and spacious, it\'s a practical branded giveaway for health fairs, school outreach programs, and community wellness events. Custom logo printing ensures your clinic\'s name and message go wherever your clients go.' },
      { id: 'b4', name: 'Non-Woven Two Tone Gift Bag', price: '$1.70', min: 500, img: 'images/bags/b4.png', description: 'This Non-Woven Two Tone Gift Bag offers a polished, branded packaging solution for welcome kits, patient appreciation gifts, and event giveaways. With a 500-unit minimum, it\'s ideal for organizations running ongoing community programs. The two-tone design adds a premium feel, making your logo and brand message look sharp and professional.' },
      { id: 'b5', name: 'Superhero Drawstring Backpack', price: '$1.65', min: 500, img: 'images/bags/b5.png', description: 'Featuring a fun superhero theme, this Drawstring Backpack is a hit with kids and families at pediatric clinics, ABA therapy events, and community health fairs. At a 500-unit minimum, it\'s an accessible branded giveaway for outreach programs. Custom logo printing keeps your practice front and center with the families you serve.' },
    ]
  },
  {
    id: 'pens', label: 'Pens & Writing', emoji: '🖋️',
    products: [
      { id: 'p1', name: '3-Way Pen', price: null, img: 'images/pens/p1.png', description: 'The 3-Way Pen puts three writing modes at your fingertips — a versatile multi-function pen that\'s a practical and useful branded giveaway for clinicians, administrators, and clients. Custom imprinting with your organization\'s name keeps it working for you long after it leaves your hands. A reliable everyday tool that reinforces your brand at every use.' },
      { id: 'p2', name: 'Fidget Spinner Plunge-Action Pen', price: '$1.60', min: 1000, colors: 2, img: 'images/pens/p2.png', description: 'The Fidget Spinner Plunge-Action Pen combines a functional ballpoint pen with a built-in spinner for hands that need to stay busy. Available in 2 colors with a 1,000-unit minimum, it\'s a uniquely therapeutic branded giveaway perfect for ABA therapy practices and behavioral health organizations. Spin and write — a promotional item that genuinely serves its users.' },
      { id: 'p3', name: 'iWriter® Gel-Sport Stylus Pen', price: null, img: 'images/pens/p3.png', description: 'The iWriter® Gel-Sport Stylus Pen delivers smooth gel ink and a responsive stylus tip for touchscreen devices — a tech-forward branded pen for modern healthcare professionals and clients. A polished promotional gift for conferences, patient education events, and staff appreciation programs. Custom imprinting elevates it from everyday pen to branded keepsake.' },
      { id: 'p4', name: 'Superhero Pen', price: null, colors: 2, img: 'images/pens/p4.png', description: 'With a fun superhero design available in 2 colors, this Superhero Pen adds a playful touch to your branded writing instruments. A favorite at pediatric clinics, school outreach events, and ABA therapy centers, it makes the mundane memorable. Customize it with your logo for a branded giveaway kids and parents will hold onto.' },
      { id: 'p5', name: 'Spinner Pen', price: '$1.95', min: 2000, img: 'images/pens/p5.png', description: 'The Spinner Pen puts a fidget spinner right on the end of a smooth-writing ballpoint — a thoughtful, therapeutic giveaway that ABA therapy centers and behavioral health practices love. Available at a 2,000-unit minimum, it\'s built for large-scale promotional campaigns. Your custom logo on this pen makes for a uniquely functional brand impression.' },
      { id: 'pen6', name: 'Ellipse Soft W/Stylus-Laser Engraved-Metal Pen', price: null, img: 'images/pens/pen6.png', description: 'The Ellipse Soft with Stylus is a premium laser-engraved metal pen that combines touchscreen functionality with a sophisticated, lasting engraving. A refined promotional gift for healthcare executives, physicians, and high-value client relationships. The permanent laser-engraved logo ensures your brand remains clear and professional over years of daily use.' },
      { id: 'pen7', name: 'Jada M Stylus Twist Pen', price: null, img: 'images/pens/pen7.png', description: 'The Jada M Stylus Twist Pen offers dual pen-and-stylus functionality in a sleek twist-action barrel — a versatile, modern branded pen for healthcare professionals and tech-savvy clients. An elevated promotional gift that works seamlessly on paper and touchscreens. Custom imprinting showcases your organization with a clean, professional look.' },
      { id: 'pen8', name: 'Sleek Write Rubberized Pen', price: null, img: 'images/pens/pen8.png', description: 'The Sleek Write Rubberized Pen features a comfortable rubberized grip and smooth writing performance in a trim, professional form factor. A great everyday branded pen for patient intake desks, clinician pockets, and corporate giveaway bags. Custom logo printing makes it a polished, practical promotional item for any healthcare organization.' },
      { id: 'pen9', name: '4-Color Retractable Ball Pen', price: null, img: 'images/pens/pen9.png', description: 'Never run out of the right ink color — the 4-Color Retractable Ball Pen puts red, blue, black, and green all in one barrel. A uniquely useful branded giveaway for clinicians, administrators, and educators who need multiple colors on hand. Your custom logo on this multi-function tool keeps your brand useful throughout the workday.' },
      { id: 'pen10', name: '6 in 1 Multi Function Tool Pen', price: null, img: 'images/pens/pen10.png', description: 'The 6 in 1 Multi Function Tool Pen is a power-packed promotional item that includes a pen, stylus, level, ruler, screwdriver, and more. A premium-value branded giveaway for healthcare professionals and administrative staff who appreciate multi-purpose tools. Every function it offers is another opportunity for your logo to be seen and appreciated.' },
      { id: 'pen11', name: 'Soft Rubberized Touch Retractable Gel Pen', price: null, img: 'images/pens/pen11.png', description: 'The Soft Rubberized Touch Retractable Gel Pen delivers silky smooth gel ink in a comfortable, grip-friendly barrel designed for extended writing sessions. A refined everyday pen for medical staff, patient intake desks, and professional gift sets. Custom imprinting makes it a clean, polished brand ambassador for your healthcare organization.' },
      { id: 'pen12', name: 'Smoothy Classic Pen', price: null, img: 'images/pens/pen12.png', description: 'The Smoothy Classic Pen lives up to its name with a consistently smooth write, a simple reliable design, and a clean imprint area that showcases your logo beautifully. A no-fuss, budget-friendly branded pen ideal for bulk distribution at health fairs, conferences, and community events. Sometimes the classic choice is the best choice.' },
      { id: 'pen13', name: 'Saturn Spinning Ring Pen', price: '$1.57', img: 'images/pens/pen13.jpg', description: 'The Saturn Spinning Ring Pen features a freely rotating decorative ring on the barrel — a subtle, satisfying fidget element that makes this writing tool uniquely appealing to sensory-aware users. A perfect crossover item for ABA therapy centers and general healthcare promotions, it\'s a pen with personality. Your custom logo rides on a branded item clients will notice and appreciate.' },
    ]
  },
  {
    id: 'toys', label: 'Toys & Balls', emoji: '🏀',
    products: [
      { id: 't1', name: '9" Fantastic Flier Flying Disc', price: null, colors: 2, img: 'images/toys/t1.png', description: 'The 9" Fantastic Flier Flying Disc is a full-sized branded frisbee available in 2 colors — a fun, outdoor promotional item perfect for community health events, outdoor wellness programs, and family-oriented outreach. Your custom-imprinted logo gets airtime at every throw. An active, visible branded giveaway that extends your reach beyond the clinic walls.' },
      { id: 't2', name: '6" Big Paw Bear', price: null, colors: 13, img: 'images/toys/t2.png', description: 'The 6" Big Paw Bear is a lovable plush bear available in 13 colors — a soft, comforting promotional item that resonates deeply with pediatric patients, families, and ABA therapy clients. An embroidered logo on this cuddle-worthy keepsake creates a lasting emotional connection to your brand. A premium giveaway that families will treasure long after their visit.' },
      { id: 't3', name: '16" Confetti Filled Clear Beach Ball', price: null, img: 'images/toys/t3.png', description: 'This 16" Confetti Filled Clear Beach Ball makes a big, colorful impression at outdoor events, health fairs, and community wellness days. The confetti-filled interior creates a festive, eye-catching effect that turns heads and sparks conversation. Custom imprint your logo on this oversized branded item for maximum visibility at any event.' },
      { id: 't4', name: 'Mini Basketball Set', price: null, colors: 3, img: 'images/toys/t4.png', description: 'The Mini Basketball Set brings the game to any desk, door, or break room — a fun, stress-relieving promotional item available in 3 colors. Perfect for healthcare staff appreciation events and community giveaways that want to stand out. Custom imprinting on the board or ball makes your brand part of every score.' },
      { id: 't5', name: '3" Mini Frisbee', price: '$1.05', min: 2000, img: 'images/toys/t5.png', description: 'The 3" Mini Frisbee is a bite-sized version of the outdoor classic — a compact, lightweight promotional item great for events, goodie bags, and kids\' giveaways. With a 2,000-unit minimum, it\'s built for large-scale branded campaigns at a price that makes bulk ordering easy. Your logo spins right into the hands of the community you serve.' },
      { id: 't6', name: 'Light Up Yo Yo', price: '$1.48', min: 1000, img: 'images/toys/t6.png', description: 'The Light Up Yo Yo glows as it spins, creating a captivating light show that draws kids and adults alike. A high-engagement promotional item at a low price point with a 1,000-unit minimum, it\'s perfect for evening events, health fairs, and pediatric outreach programs. Custom imprinting keeps your brand glowing long after the event.' },
      { id: 't7', name: '12" Translucent Beach Ball', price: '$1.36', colors: 4, img: 'images/toys/t7.png', description: 'The 12" Translucent Beach Ball is a classic oversized promotional item available in 4 colors with a large custom imprint area for maximum logo visibility. A natural fit for outdoor health events, summer wellness programs, and community outreach days. An affordable, high-impact giveaway that floats your brand right to the center of the action.' },
    ]
  },
  {
    id: 'desk', label: 'Desk Items', emoji: '🖥️',
    products: [
      { id: 'dk1', name: 'Happy Dude Mobile Device Holder', price: null, colors: 2, img: 'images/desk/dk1.png', description: 'The Happy Dude Mobile Device Holder is an adorable, poseable character stand that holds phones and tablets at a comfortable viewing angle. Available in 2 colors, it\'s a quirky, fun desk addition that\'s perfect for staff appreciation gifts and patient engagement giveaways. Your custom logo on Happy Dude puts a smile on your brand.' },
      { id: 'dk2', name: 'High Five Foldable Media Stand', price: null, img: 'images/desk/dk2.png', description: 'The High Five Foldable Media Stand props up tablets and phones at a hands-free viewing angle — a practical desk accessory for clinicians doing paperwork, patients watching instructional videos, and remote workers. Its foldable design makes it portable and easy to toss in a bag. A sleek, branded gift that earns real daily use.' },
      { id: 'dk3', name: 'Acrobat Paper Clips with Magnet Base', price: '$7.00', img: 'images/desk/dk3.png', description: 'The Acrobat Paper Clips with Magnet Base is a refined desk accessory that keeps paper clips organized and within reach in a magnetic, sculptural base. A sophisticated branded gift for medical office staff, administrative teams, and professional giveaway programs. Your custom logo on this executive desk piece makes a polished, lasting impression.' },
      { id: 'dk4', name: 'Wheat Straw Cutlery Set', price: '$3.00', img: 'images/desk/dk4.png', description: 'The Wheat Straw Cutlery Set provides an eco-friendly, reusable alternative to single-use plastic utensils — a thoughtful wellness gift for health-conscious clients and staff. Made from sustainable wheat straw material, it aligns with the health and environmental values your patients care about. A branded gift that promotes healthy choices and your organization simultaneously.' },
    ]
  },
  {
    id: 'hats', label: 'Hats', emoji: '🧢',
    products: [
      { id: 'h1', name: 'Sport Headbands', price: null, img: 'images/hats/h1.png', description: 'Sport Headbands are a stylish, functional promotional item for active clients, staff, and community wellness participants. Perfect for 5K charity runs, fitness events, and outdoor health fairs, they keep sweat out of the eyes while keeping your logo in view. A wearable branded giveaway that goes where your community goes.' },
      { id: 'h2', name: 'Port Authority Flexfit Cotton Twill Cap', price: '$11.98', img: 'images/hats/h2.png', description: 'The Port Authority Flexfit Cotton Twill Cap is a structured, professionally fitted cap that looks great on staff and volunteers alike. With a comfortable flexfit band and a clean custom embroidery area, it\'s a premium branded hat for healthcare teams, event crews, and community ambassadors. A classic cap that carries your brand with confidence and style.' },
      { id: 'h3', name: 'Knit Beanie With Cuff', price: null, img: 'images/hats/h3.png', description: 'The Knit Beanie with Cuff is a cozy cold-weather branded giveaway that clients and staff reach for all winter long. A universally flattering and comfortable knit design, it\'s a popular branded apparel item for healthcare organizations in colder climates. Custom embroidery of your logo creates a warm, lasting brand impression.' },
    ]
  },
  {
    id: 'tech', label: 'Technology', emoji: '📱',
    products: [
      { id: 'tc1', name: 'Selfie Ring Light', price: '$4.30', colors: 5, img: 'images/tech/tc1.png', description: 'The Selfie Ring Light clips onto any phone and provides flattering, adjustable LED illumination for telehealth appointments, team social media content, and virtual events. Available in 5 colors, it\'s a modern, relevant branded gift that healthcare providers and patients actually use. A tech accessory that keeps your logo in the spotlight — literally.' },
      { id: 'tc2', name: 'Phone Screen Cleaner', price: '$3.20', colors: 7, img: 'images/tech/tc2.png', description: 'The Phone Screen Cleaner is a small but mighty branded accessory that keeps touchscreens spotless and germ-free — a naturally relevant giveaway for healthcare settings. Available in 7 colors with a large custom imprint area, it sticks right to the back of phones for instant access. A subtle, useful branded item that earns daily impressions in any healthcare or ABA environment.' },
    ]
  },
  {
    id: 'accessories', label: 'Accessories', emoji: '🔑',
    products: [
      { id: 'ac1', name: 'AirTag Silicone Key Chain', price: '$3.00', colors: 5, img: 'images/accessories/ac1.png', description: 'The AirTag Silicone Key Chain provides secure, colorful protection for Apple AirTags while keeping your brand visible on keychains and bags. Available in 5 colors, it\'s a modern, tech-savvy branded gift for clients, caregivers, and staff who rely on Apple\'s tracking ecosystem. A niche but highly appreciated promotional item for tech-forward healthcare organizations.' },
      { id: 'ac2', name: 'Buddy Phone Mount', price: '$1.50', colors: 2, img: 'images/accessories/ac2.png', description: 'The Buddy Phone Mount snaps onto car vents, desks, and countertops to hold devices at a hands-free viewing angle. Available in 2 colors with a custom imprint area, it\'s a practical everyday accessory for clients and staff on the go. A small but mighty branded gift that earns daily impressions every time a device is mounted.' },
      { id: 'ac3', name: 'Phone Kickstand', price: '$3.20', colors: 5, img: 'images/accessories/ac3.png', description: 'The Phone Kickstand attaches to the back of any phone to enable hands-free portrait and landscape viewing — a universally useful promotional item in 5 colors. Great for telehealth-using patients, healthcare staff doing remote documentation, and busy caregivers. Your custom logo on this everyday tool puts your brand in the hand of your audience all day long.' },
      { id: 'ac4', name: 'Resistance Band Kit', price: '$2.50', colors: 4, img: 'images/accessories/ac4.png', description: 'The Resistance Band Kit is a portable mini-fitness set that supports strength training and physical therapy exercises anywhere, anytime. Available in 4 color options, it\'s a health-aligned branded gift that naturally resonates with healthcare and therapy-focused organizations. Your custom logo on a wellness product reinforces your commitment to the health of the people you serve.' },
      { id: 'ac5', name: 'Rotating Media Stand', price: '$3.80', colors: 2, img: 'images/accessories/ac5.png', description: 'The Rotating Media Stand holds phones and tablets on any flat surface with smooth 360° rotation for flexible viewing in any direction. Available in 2 colors, it\'s a practical branded desk or countertop accessory for clinical waiting rooms, home caregivers, and on-the-go professionals. A polished, functional giveaway that keeps your logo front and center.' },
    ]
  },
  {
    id: 'personal', label: 'Personal Care', emoji: '💄',
    products: [
      { id: 'pc1', name: 'Lip Balm with Clip SPF15 (USA Made)', price: '$1.10', colors: 13, img: 'images/personal/pc1.png', description: 'Made right here in the USA, this SPF15 Lip Balm with Clip is a health-conscious promotional item that protects lips and reinforces your brand\'s commitment to wellness. Available in 13 colors with a clip for easy attachment to lanyards, bags, and keychains, it\'s a standout giveaway for healthcare events and patient welcome kits. An everyday-use item that keeps your logo visible all year long.' },
      { id: 'pc2', name: 'Yummy Lip Balm', price: '$1.65', min: 1000, img: 'images/personal/pc2.png', description: 'Yummy Lip Balm comes in irresistible flavors that make lip care a pleasure — a fun, friendly branded gift for patients of all ages. With a 1,000-unit minimum, it\'s great for large-scale giveaway programs at clinics, therapy centers, and community health events. Your custom-imprinted logo on this pocket-sized essential ensures your brand stays on lips — in more ways than one.' },
    ]
  },
  {
    id: 'tradeshow', label: 'Tradeshows', emoji: '🏷️',
    products: [
      { id: 'ts1', name: '3/4" Imprinted Polyester Lanyard', price: null, img: 'images/tradeshow/ts1.png', description: 'The 3/4" Imprinted Polyester Lanyard is a tradeshow staple that keeps badges, keys, and credentials accessible throughout long conference days. Fully customizable with your clinic or organization\'s name and logo along the full length of the lanyard. A simple, high-visibility branding opportunity at every event your team attends.' },
      { id: 'ts2', name: 'Dye-Sublimated Lanyard With Clear Badge Holder', price: null, img: 'images/tradeshow/ts2b.png', description: 'The Dye-Sublimated Lanyard with Clear Badge Holder delivers vibrant full-color branding on a comfortable polyester lanyard with a convenient attached badge holder. Your logo and design are printed edge-to-edge using dye sublimation for bold, professional color that won\'t fade. A premium lanyard solution for healthcare conferences, tradeshow staff, and community events.' },
      { id: 'ts3', name: 'Air Freshener', price: null, img: 'images/tradeshow/ts3.png', description: 'Turn every car ride into a brand moment with a custom air freshener that keeps your logo looking — and smelling — great. Ideal for healthcare events, welcome kits, and patient giveaways, it\'s a uniquely memorable promotional item with real everyday staying power. Choose your scent and shape for a completely custom-branded experience.' },
      { id: 'ts4',  name: 'Custom Fabric Pop Up Straight Display 10x10', price: '$645', img: 'images/tradeshow/ts4.png', description: 'The Custom Fabric Pop Up Straight Display is a 10x10 tradeshow backdrop that assembles tool-free in minutes, offering a professional, branded presence at any indoor event. Full-color dye-sublimation printing brings your healthcare brand to life across the entire surface. A sleek, portable display solution that makes a powerful first impression at conferences, health fairs, and community events.' },
      { id: 'ts5',  name: 'U-Shaped Tool-Free Tension Fabric Trade Show Display 10x10', price: '$630', img: 'images/tradeshow/ts5.png', description: 'The U-Shaped Tool-Free Tension Fabric Trade Show Display creates an eye-catching 10x10 curved backdrop structure that draws attendees in and builds an immersive branded environment. Assembly requires no tools and takes just minutes, making it ideal for high-volume event schedules. Full-color tension fabric graphics showcase your healthcare brand with vivid, seamless clarity.' },
      { id: 'ts6',  name: '10Ft Trade Show Display Kit With S-Shaped Backdrop & Counter', price: '$820', img: 'images/tradeshow/ts6.png', description: 'This 10Ft Trade Show Display Kit combines an S-shaped fabric backdrop with a branded counter for a polished, complete tradeshow setup. The S-shaped frame creates visual depth and movement that stands out in crowded exhibit halls. An all-in-one solution for healthcare organizations looking to make a strong, professional statement at major events.' },
      { id: 'ts7',  name: '10ft Pillowcase Backdrop Backwall Display Kit', price: '$600', img: 'images/tradeshow/ts7.png', description: 'The 10ft Pillowcase Backdrop Backwall Display Kit features a seamless, edge-to-edge fabric graphic that installs like a pillowcase for a perfectly smooth, wrinkle-resistant presentation. Ideal for healthcare tradeshows, community events, and branded photoshoot backdrops. A premium look at an accessible price, with full-color printing that showcases your brand in stunning detail.' },
      { id: 'ts8',  name: 'Deluxe Retractable Aluminum Banner Stand W/Graphic 31.5" X 79"', price: '$215', img: 'images/tradeshow/ts8.png', description: 'The Deluxe Retractable Aluminum Banner Stand rolls your display up and out of sight in seconds and stands at 31.5" x 79" for impressive visibility in any indoor setting. A polished, professional solution for conferences, clinic lobbies, and tradeshow aisles where a compact footprint is a must. Full-color graphics roll up beautifully for effortless transport and storage.' },
      { id: 'ts9',  name: "8'x10' Backdrop Banner Stand", price: '$420', img: 'images/tradeshow/ts9.png', description: 'The 8\'x10\' Backdrop Banner Stand creates a large, impactful branded backdrop for photography, presentations, and tradeshow exhibits. Full-color printing across the entire surface ensures your healthcare brand commands attention from across the room. A professional-grade display solution that sets the scene at any event or in-clinic installation.' },
      { id: 'ts10', name: '10ft Display Kit With Backdrop, Feather Flags & Table Cover', price: '$660', img: 'images/tradeshow/ts10.png', description: 'This 10ft Display Kit bundles a full backdrop, feather flags, and a branded table cover for a cohesive, high-impact tradeshow setup that covers every angle of your exhibit. Everything assembles quickly and packs down compactly for easy transport between events. A turnkey branded environment for healthcare organizations that exhibit frequently.' },
      { id: 'ts11', name: "6' Premium Fitted Standard Table Cover (Full Color Dye Sublimation)", price: '$120', img: 'images/tradeshow/ts11.png', description: 'Make a polished statement at any event with this 6\' Premium Fitted Standard Table Cover, printed with full-color dye sublimation that brings your brand to life on every side. The stretch-fit design ensures a clean, wrinkle-free look that elevates your exhibit space. A simple but impactful branded touchpoint at conferences, health fairs, and sponsored events.' },
      { id: 'ts12', name: "10'x10' Full Color Pop Up Canopy Tent With Back Full Wall And Two Half Walls", price: '$650', img: 'images/tradeshow/ts12.png', description: 'The 10\'x10\' Full Color Pop Up Canopy Tent with Back Full Wall and Two Half Walls creates a fully enclosed, branded outdoor event space for maximum visibility and staff comfort. Full-color dye-sublimation printing across the canopy and walls makes your healthcare brand the centerpiece of any outdoor gathering. A professional, weatherproof setup built for high-volume event seasons.' },
      { id: 'ts13', name: "10' Pop Up Tent 600D Polyester With Vented Canopy", price: '$455', img: 'images/tradeshow/ts13.png', description: 'The 10\' Pop Up Tent with 600D Polyester and Vented Canopy is built for durability and airflow, keeping your team comfortable even on warm event days. The vented canopy structure reduces wind resistance and improves stability, making it a smart choice for outdoor health fairs and community events. Full-color custom printing ensures your brand is visible from every angle.' },
      { id: 'ts14', name: "10'x10' Custom Printed Pop Up Tent Kit w/ Steel Frame", price: '$422', img: 'images/tradeshow/ts14.png', description: 'The 10\'x10\' Custom Printed Pop Up Tent Kit with Steel Frame offers professional-grade durability at a competitive price, with full-color custom printing on the canopy. The heavy-duty steel frame provides stability in outdoor conditions, making it a reliable branded shelter for healthcare outreach events. A complete kit that assembles quickly and looks great season after season.' },
      { id: 'ts15', name: "10'x10' Heavy Duty Steel Pop Up Canopy w/600 Denier Polyester", price: '$415', img: 'images/tradeshow/ts15.png', description: 'Built with a heavy-duty steel frame and 600 Denier Polyester canopy, this 10\'x10\' pop up canopy is engineered for demanding outdoor event environments. Full-color custom printing showcases your healthcare brand with vibrant, professional clarity. A workhorse tent that protects your team and your brand through every event of the season.' },
      { id: 'ts16', name: "10'x10' Full Color Pop Up Canopy Tent Kit", price: '$330', img: 'images/tradeshow/ts16.png', description: 'The 10\'x10\' Full Color Pop Up Canopy Tent Kit is a straightforward, high-quality branded tent solution that gets your organization noticed at any outdoor event. Quick assembly, full-color canopy printing, and solid construction make it a popular entry-level option for healthcare organizations building their event program. A dependable branded shelter that delivers value event after event.' },
      { id: 'ts17', name: "10'x10' Instant One-Push Custom Canopy Tent Kit", price: '$400', img: 'images/tradeshow/ts17.png', description: 'The Instant One-Push 10\'x10\' Custom Canopy Tent Kit opens in one step, making setup faster than any other tent in our lineup. Full-color custom printing transforms the canopy into a branded centerpiece that draws attention from across the event space. An excellent choice for busy healthcare teams who need a professional setup without the hassle.' },
      { id: 'ts18', name: "10'x10' Instant One-Push Custom Canopy Tent Kit w/Vented Top", price: '$450', img: 'images/tradeshow/ts18.png', description: 'The Instant One-Push Custom Canopy Tent with Vented Top adds superior airflow to the speed and convenience of one-push setup. The vented canopy keeps your team cooler and your tent more stable in breezy outdoor conditions. Full-color custom printing ensures your brand is as prominent as your tent is practical.' },
      { id: 'ts19', name: "10'x10' Deluxe 50mm Hex Aluminum Frame w/Dye Sublimation Canopy", price: '$700', img: 'images/tradeshow/ts19.png', description: 'The 10\'x10\' Deluxe 50mm Hex Aluminum Frame with Dye Sublimation Canopy represents the pinnacle of lightweight, professional-grade tent construction. The heavy-wall hex aluminum frame provides exceptional stability and longevity, while the vibrant dye sublimation canopy delivers edge-to-edge color brilliance. A premium investment for healthcare organizations that represent their brand at events throughout the year.' },
      { id: 'ts20', name: "10'x10' Hex Aluminum Frame w/Custom Printed Canopy", price: '$465', img: 'images/tradeshow/ts20.png', description: 'The 10\'x10\' Hex Aluminum Frame with Custom Printed Canopy offers the superior stability and lightweight portability of a hex aluminum frame at an accessible price point. Custom-printed canopy graphics showcase your healthcare brand with full-color precision across the entire canopy surface. A professional-quality tent that balances performance, portability, and price.' },
      { id: 'ts21', name: "10' Premium Hex Aluminum Frame w/Full Color Canopy", price: '$530', img: 'images/tradeshow/ts21.png', description: 'The 10\' Premium Hex Aluminum Frame with Full Color Canopy delivers a premium branded outdoor event presence with a lightweight, rust-resistant aluminum structure. Full-color canopy printing gives your healthcare organization bold, professional visibility at any outdoor setting. A durable, high-performance tent built to represent your brand event after event.' },
      { id: 'ts22', name: "10'x20' Premium Hex Aluminum Canopy Tent w/Dye Sublimation Canopy", price: '$875', img: 'images/tradeshow/ts22.png', description: 'The 10\'x20\' Premium Hex Aluminum Canopy Tent doubles the footprint of a standard 10x10 tent for organizations that command a larger presence at outdoor events. Dye sublimation printing delivers vivid, edge-to-edge branding across a massive canopy surface. The hex aluminum frame provides the durability and portability needed for frequent large-scale event deployments.' },
      { id: 'ts23', name: "20' Full Color Custom Printed Tent Back Wall", price: '$215', img: 'images/tradeshow/ts23.png', description: 'This 20\' Full Color Custom Printed Tent Back Wall transforms the rear of your tent into a stunning, floor-to-ceiling branded display. Perfect for adding depth and professionalism to any outdoor tent setup, it creates a cohesive brand environment that envelops your exhibit space. Full-color dye sublimation printing ensures your healthcare brand looks brilliant from all angles.' },
      { id: 'ts24', name: "10'x15' Custom Printed Pop Up Tent Kit, Full Wall & 2 Half Walls", price: '$1,000', img: 'images/tradeshow/ts24.png', description: 'The 10\'x15\' Custom Printed Pop Up Tent Kit with Full Wall and 2 Half Walls provides a mid-size, fully enclosed branded event space for healthcare organizations that need more coverage than a standard 10x10. Full-color custom printing across all walls and the canopy creates a fully immersive branded environment. A premium, complete kit for high-visibility community events and health fairs.' },
      { id: 'ts25', name: "10'x20' Hex Aluminum Frame Tent w/Full Color Canopy And Back Wall", price: '$987', img: 'images/tradeshow/ts25.png', description: 'The 10\'x20\' Hex Aluminum Frame Tent with Full Color Canopy and Back Wall is a complete large-scale event solution that creates an expansive, professional branded space. The hex aluminum frame delivers superior portability and durability for organizations managing a heavy event schedule. Full-color printing on both the canopy and back wall ensures total, immersive brand coverage.' },
      { id: 'ts26', name: "10'x10' Deluxe Black Steel Frame Tent Kit w/Dye Sublimation Canopy + Full Back Wall", price: '$490', img: 'images/tradeshow/ts26.png', description: 'The 10\'x10\' Deluxe Black Steel Frame Tent Kit combines a striking all-black frame with vivid full-color sublimation printing for a premium, sophisticated look. The included full back wall adds privacy and brand coverage at the rear of your exhibit space. A bold, professional setup that sets healthcare organizations apart in crowded event environments.' },
      { id: 'ts27', name: "10'x10' Instant One-Push Custom Canopy Tent Kit w/Rear Full Wall", price: '$480', img: 'images/tradeshow/ts27.png', description: 'The Instant One-Push Custom Canopy Tent with Rear Full Wall combines the fastest tent setup in the lineup with full rear coverage for a more private, professional event footprint. Custom-printed canopy and rear wall provide 360° brand visibility without sacrificing ease of setup. An excellent choice for healthcare teams that exhibit frequently and need speed without compromise.' },
      { id: 'ts28', name: "10' Custom Printed Aluminum Frame Tent w/2 Double Sided Flag Mount Kit", price: '$911', img: 'images/tradeshow/ts28.png', description: 'The 10\' Custom Printed Aluminum Frame Tent with 2 Double Sided Flag Mount Kit combines a branded custom tent with mounted double-sided feather flags for maximum outdoor visibility. Full-color tent printing and dual flags create a dynamic, professional setup that commands attention from all directions. A complete outdoor event kit designed for healthcare organizations that want to stand out.' },
      { id: 'ts29', name: "5'x5' Heavy Duty Pop Up Tent w/Dye Sublimation Canopy", price: '$285', img: 'images/tradeshow/ts29.png', description: 'The 5\'x5\' Heavy Duty Pop Up Tent with Dye Sublimation Canopy is a compact but mighty branded tent solution for smaller event footprints, table-side setups, and intimate community events. Full-color dye sublimation printing delivers brilliant, professional branding even in a compact form. A cost-effective branded shelter for healthcare organizations attending a high volume of smaller events.' },
      { id: 'ts30', name: "10'x10' Commercial Steel Frame Tent Kit w/Full Back Wall + 2 Half Side Walls", price: '$650', img: 'images/tradeshow/ts30.png', description: 'The 10\'x10\' Commercial Steel Frame Tent Kit with Full Back Wall and 2 Half Side Walls provides a fully enclosed, weather-resistant branded event space built for commercial-grade durability. Full perimeter wall coverage makes it ideal for outdoor health screening events, clinics, and exhibitions requiring privacy and protection. A professional, complete branded solution for organizations that take their event presence seriously.' },
      { id: 'ts31', name: "10'x10' Full Color Pop Up Canopy Tent With Back Full Wall And Two Half Walls (PU Coated)", price: '$650', img: 'images/tradeshow/ts31.png', description: 'This PU Coated 10\'x10\' Full Color Pop Up Canopy Tent adds a premium coating to the canopy fabric for enhanced water resistance and UV protection. A fully enclosed, full-color branded event space that performs in a wider range of weather conditions. The same professional full-coverage setup, upgraded for durability.' },
      { id: 'ts32', name: "10' x 3' Half Tent Wall - Set of 2", price: '$265', img: 'images/tradeshow/ts32.png', description: 'The 10\' x 3\' Half Tent Wall (Set of 2) adds customizable side coverage to your existing tent setup, creating additional privacy and branding real estate at any outdoor exhibit. Full-color printing ensures your healthcare brand is displayed consistently across all surfaces of your event space. An affordable expansion kit that maximizes the branding potential of your existing tent.' },
      { id: 'ts33', name: "Custom 10'x10' Promotion Event Hexagonal Kiosk Dome Tent (Full Color)", price: '$1,500', img: 'images/tradeshow/ts33.png', description: 'The Custom 10\'x10\' Hexagonal Kiosk Dome Tent is a truly statement-making event structure — its unique dome shape draws eyes and creates an unforgettable branded presence at any event. Full-color custom printing across the curved dome surface delivers 360° brand visibility unlike any standard tent. A premium event structure for healthcare organizations that want their exhibit to be the most memorable at any venue.' },
      { id: 'ts34', name: "AirDome Inflatable Tent 10'x10' With Full Dye Sublimated Top", price: '$1,430', img: 'images/tradeshow/ts34.png', description: 'The AirDome Inflatable Tent sets up in minutes and delivers a bold, one-of-a-kind branded presence that is impossible to overlook. Full dye sublimation printing across the entire inflatable canopy creates a vivid, eye-catching logo display visible from a distance. A premium, conversation-starting event structure for healthcare organizations that want their brand to be truly unforgettable.' },
    ]
  },
];

// ── CATALOG STORAGE ──
let _liveCatalog = null; // set by initCatalog() after sheet fetch

function getCatalog() {
  if (_liveCatalog) return _liveCatalog;
  try {
    const saved = localStorage.getItem('cp_catalog');
    return saved ? JSON.parse(saved) : DEFAULT_CATALOG;
  } catch { return DEFAULT_CATALOG; }
}

function saveCatalog(catalog) {
  localStorage.setItem('cp_catalog', JSON.stringify(catalog));
}

// Merge sheet catalog on top of DEFAULT_CATALOG.
// Sheet products with matching IDs update the default entry.
// Sheet-only products (new IDs) are appended to their category.
// DEFAULT_CATALOG products not in the sheet are always kept.
function fmtPrice(v) {
  if (!v) return v;
  const s = v.toString().trim();
  if (!s) return s;
  // Strip leading $ and parse as number to normalize decimal places
  const raw = s.startsWith('$') ? s.slice(1) : s;
  const num = parseFloat(raw);
  if (!isNaN(num)) return '$' + num.toFixed(2);
  return s.startsWith('$') ? s : '$' + s;
}

function mergeCatalogs(sheetCatalog) {
  // Build a map of all default products by id
  const defaultById = {};
  DEFAULT_CATALOG.forEach(cat => {
    cat.products.forEach(p => { defaultById[p.id] = { catId: cat.id, product: p }; });
  });
  // Build a map of sheet products by id
  const sheetById = {};
  sheetCatalog.forEach(cat => {
    cat.products.forEach(p => { sheetById[p.id] = { catId: cat.id, product: p }; });
  });
  // Start from a deep copy of DEFAULT_CATALOG
  const merged = DEFAULT_CATALOG.map(cat => ({
    ...cat,
    products: cat.products.map(p => {
      // If sheet has this product, use sheet version (allows price/desc overrides)
      if (!sheetById[p.id]) return p;
      const sp = sheetById[p.id].product;
      return { ...p, ...sp, price: fmtPrice(sp.price ?? p.price), originalPrice: fmtPrice(sp.originalPrice ?? p.originalPrice) };
    })
  }));
  // Append any sheet-only products (new IDs not in DEFAULT_CATALOG)
  sheetCatalog.forEach(sheetCat => {
    sheetCat.products.forEach(p => {
      if (!defaultById[p.id]) {
        // Find matching category in merged, or append new category
        const cat = merged.find(c => c.id === sheetCat.id);
        const np = { ...p, price: fmtPrice(p.price), originalPrice: fmtPrice(p.originalPrice) };
        if (cat) {
          cat.products.push(np);
        } else {
          merged.push({ id: sheetCat.id, label: sheetCat.label, emoji: sheetCat.emoji, products: [np] });
        }
      }
    });
  });
  return merged;
}

// Fetch catalog from Google Sheet (10-min session cache).
// Merges sheet data on top of DEFAULT_CATALOG so code-added products are never lost.
async function initCatalog() {
  const url = SITE_CONFIG.appsScriptUrl;
  if (!url || url === 'YOUR_APPS_SCRIPT_URL') {
    _liveCatalog = DEFAULT_CATALOG;
    return _liveCatalog;
  }
  // Check sessionStorage cache
  try {
    const cached = sessionStorage.getItem('hp_sheet_catalog');
    if (cached) {
      const { data, ts } = JSON.parse(cached);
      if (Date.now() - ts < 10 * 60 * 1000) {
        _liveCatalog = mergeCatalogs(data);
        return _liveCatalog;
      }
    }
  } catch {}
  // Fetch from Apps Script
  try {
    const res = await fetch(url + '?action=catalog');
    const json = await res.json();
    if (json.ok && json.catalog && json.catalog.length > 0) {
      _liveCatalog = mergeCatalogs(json.catalog);
      try { sessionStorage.setItem('hp_sheet_catalog', JSON.stringify({ data: json.catalog, ts: Date.now() })); } catch {}
      return _liveCatalog;
    }
  } catch (e) { console.log('Sheet catalog unavailable, using default:', e.message); }
  _liveCatalog = DEFAULT_CATALOG;
  return _liveCatalog;
}

// ── QUOTE CART STORAGE ──
function getCart() {
  try {
    const saved = localStorage.getItem('cp_cart');
    return saved ? JSON.parse(saved) : [];
  } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('cp_cart', JSON.stringify(cart));
}

function addToCart(product, categoryLabel) {
  const cart = getCart();
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ ...product, qty: 1, category: categoryLabel });
  }
  saveCart(cart);
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((s, i) => s + (i.qty || 1), 0);
  document.querySelectorAll('.cart-count').forEach(el => { el.textContent = total; el.style.display = total > 0 ? 'flex' : 'none'; });
}

// ── TOAST ──
function showToast(msg, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.className = `toast ${type}`;
  toast.innerHTML = (type === 'success' ? '✓ ' : '✕ ') + msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── SHARED HEADER HTML ──
function renderHeader(activePage) {
  const cart = getCart();
  const cartTotal = cart.reduce((s, i) => s + (i.qty || 1), 0);
  return `
    <div class="brand-bar">
      <div class="brand-bar-inner">
        <a class="brand-tab" href="https://bespokepromos.com">Bespoke Promotions</a>
        <span class="brand-tab active">HealthPromo</span>
        <span class="brand-tab soon">Bespoke Events <em>soon</em></span>
        <span class="brand-tab soon">Bespoke Sports <em>soon</em></span>
      </div>
    </div>
    <header>
      <div class="header-inner">
        <a class="logo" href="index.html">
          <svg style="width:42px;height:42px;flex-shrink:0" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34 20 L34 38 L16 38 Q12 38 12 42 L12 58 Q12 62 16 62 L34 62 L34 80 Q34 84 38 84 L62 84 Q66 84 66 80 L66 62 L84 62 Q88 62 88 58 L88 42 Q88 38 84 38 L66 38 L66 20 Q66 16 62 16 L38 16 Q34 16 34 20 Z" stroke="white" stroke-width="4" stroke-linejoin="round"/>
            <polyline points="18,52 26,52 29,43 33,61 37,47 41,52 46,52 51,44 55,60 59,52 64,52 82,52" fill="none" stroke="#6dd4cc" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M50 4 Q50 1 53 1 Q56 1 56 4 Q56 7 53 8 L50 10" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M50 10 Q48 15 24 32 Q17 36 13 39" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M50 10 Q52 15 76 32 Q83 36 87 39" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M44 16 Q47 19 50 19 Q53 19 56 16" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M50 27 Q50 23 46.5 23 Q43 23 43 27 Q43 30 50 35 Q57 30 57 27 Q57 23 53.5 23 Q50 23 50 27 Z" fill="#6dd4cc"/>
          </svg>
          <div>
            <span class="logo-text">HealthPromo</span>
            <span class="logo-sub">Healthcare &amp; ABA Promotional Items</span>
          </div>
        </a>
        ${activePage === 'shop' ? `
        <div class="search-bar">
          <svg class="search-icon" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input type="text" placeholder="Search products…" id="searchInput">
        </div>` : ''}
        <div class="header-actions">
          <a href="about.html" class="header-nav-link ${activePage === 'about' ? 'active' : ''}">About</a>
          <a href="quote.html" class="header-nav-link">Get a Quote</a>
          <a href="quote.html" class="cart-btn">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span class="cart-btn-text">Quote List</span>
            <span class="cart-count" style="display:${cartTotal > 0 ? 'flex' : 'none'}">${cartTotal}</span>
          </a>
          <button class="hamburger" id="hamburgerBtn" aria-label="Open menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile navigation">
        <div class="mobile-menu-inner">
          <a href="index.html" class="mobile-menu-link">🏠 Browse Products</a>
          <a href="about.html" class="mobile-menu-link">ℹ️ About Us</a>
          <a href="quote.html" class="mobile-menu-cta">
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" style="display:inline;vertical-align:middle;margin-right:6px">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>
            </svg>View Quote List
          </a>
          <div class="mobile-menu-contacts">
            <a href="tel:${SITE_CONFIG.phoneRaw}">${SITE_CONFIG.phone}</a>
            <a href="mailto:${SITE_CONFIG.email}">${SITE_CONFIG.email}</a>
          </div>
        </div>
      </div>
    </header>
    <nav class="nav-strip" id="navStrip">
      <div class="nav-inner" id="navInner"></div>
    </nav>
  `;
}

function renderContactStrip() {
  return `
    <div class="contact-strip">
      <p>Need help or a custom order?</p>
      <a class="contact-item" href="tel:${SITE_CONFIG.phoneRaw}">
        <svg viewBox="0 0 24 24" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.64 12 19.79 19.79 0 0 1 1.58 3.38 2 2 0 0 1 3.55 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l1.09-1.09a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
        ${SITE_CONFIG.phone}
      </a>
      <a class="contact-item" href="mailto:${SITE_CONFIG.email}">
        <svg viewBox="0 0 24 24" stroke-width="1.8"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        ${SITE_CONFIG.email}
      </a>
      <a href="quote.html" class="btn-teal">Request a Quote →</a>
    </div>
  `;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <footer>
      <div class="footer-main">

        <!-- Brand column -->
        <div class="footer-brand">
          <div class="footer-logo-text">HealthPromo</div>
          <div class="footer-tagline">Healthcare &amp; ABA Promotional Items</div>
          <p>Custom-branded promotional products for healthcare providers, ABA therapy centers, and care organizations. Logo imprinting on everything.</p>
          <div class="footer-contact-links">
            <a class="footer-contact-item" href="tel:${SITE_CONFIG.phoneRaw}">
              <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.58 5.1 2 2 0 0 1 3.55 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              ${SITE_CONFIG.phone}
            </a>
            <a class="footer-contact-item" href="mailto:${SITE_CONFIG.email}">
              <svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              ${SITE_CONFIG.email}
            </a>
          </div>
        </div>

        <!-- Categories column -->
        <div class="footer-col">
          <h4>Shop by Category</h4>
          <ul>
            <li><a href="index.html?cat=fidgets">🌀 Fidgets</a></li>
            <li><a href="index.html?cat=apparel">👕 Apparel</a></li>
            <li><a href="index.html?cat=drinkware">🥤 Drinkware</a></li>
            <li><a href="index.html?cat=bags">🎒 Bags</a></li>
            <li><a href="index.html?cat=pens">🖋️ Pens &amp; Writing</a></li>
            <li><a href="index.html?cat=toys">🏀 Toys &amp; Balls</a></li>
            <li><a href="index.html?cat=desk">🖥️ Desk Items</a></li>
            <li><a href="index.html?cat=tech">📱 Technology</a></li>
            <li><a href="index.html?cat=tradeshow">🏷️ Tradeshows</a></li>
          </ul>
        </div>

        <!-- Quick links column -->
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="index.html">Shop All Products</a></li>
            <li><a href="quote.html">Request a Quote</a></li>
            <li><a href="quote.html">Quote List</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="mailto:${SITE_CONFIG.email}">Contact Us</a></li>
          </ul>
        </div>

        <!-- Info column -->
        <div class="footer-col">
          <h4>Why HealthPromo</h4>
          <ul>
            <li><a href="quote.html">Custom Logo Imprinting</a></li>
            <li><a href="quote.html">Bulk Order Pricing</a></li>
            <li><a href="quote.html">Digital Proofs Included</a></li>
            <li><a href="quote.html">1-Business-Day Response</a></li>
            <li><a href="index.html?cat=tradeshow">Tradeshow Packages</a></li>
          </ul>
        </div>

      </div>

      <hr class="footer-divider">

      <div class="footer-bottom">
        <span>© ${year} HealthPromo. All rights reserved.</span>
        <div class="footer-bottom-links">
          <a href="privacy.html">Privacy Policy</a>
          <a href="mailto:${SITE_CONFIG.email}">Contact</a>
          <a href="admin/" style="opacity:0.4">Admin</a>
        </div>
      </div>
    </footer>
  `;
}

// ── MOBILE MENU ──
document.addEventListener('click', function(e) {
  const btn = e.target.closest('#hamburgerBtn');
  const menu = document.getElementById('mobileMenu');
  if (!menu) return;

  if (btn) {
    const isOpen = menu.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    return;
  }

  // Close when clicking outside
  if (menu.classList.contains('open') &&
      !e.target.closest('#mobileMenu') &&
      !e.target.closest('#hamburgerBtn')) {
    menu.classList.remove('open');
    const hamburger = document.getElementById('hamburgerBtn');
    if (hamburger) { hamburger.classList.remove('open'); hamburger.setAttribute('aria-expanded', 'false'); }
  }
});

// Close menu on nav link click
document.addEventListener('click', function(e) {
  if (e.target.closest('.mobile-menu-link, .mobile-menu-cta')) {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('hamburgerBtn');
    if (menu) menu.classList.remove('open');
    if (btn) { btn.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  }
});
