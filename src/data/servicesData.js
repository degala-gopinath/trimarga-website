import { groupByPath } from './paths';

const RAW_SERVICES = [
  {
    id: 'website-design',
    num: '01',
    slug: 'website-design',
    category: 'Websites',
    title: 'Website Design and Development',
    shortDesc: 'A fast, mobile-first website that explains your business and turns visitors into enquiries.',
    headline: 'A website that works as hard as you do.',
    intro: 'Your website is your shop that never closes. We design and develop fast, mobile-first websites that explain what you do, build trust in seconds, and make it easy to call, message, book or buy.',
    problems: [
      'Customers search for your business online and find nothing at all.',
      'Your current site looks outdated or breaks on mobile phones.',
      'Visitors land on your page but leave without calling or messaging.'
    ],
    included: [
      'Custom design matched to your brand - no copied templates that look like everyone else',
      'Mobile-first build - most of your customers will visit on a phone',
      'Pages: Home, About, Services, Gallery / Menu, Reviews, Contact',
      'Call, WhatsApp, directions and enquiry buttons on every page',
      'Contact / enquiry form delivered to your email or WhatsApp',
      'Google Maps, opening hours and social links integrated',
      'Basic SEO setup - titles, descriptions and Google indexing (full SEO on our SEO page)',
      'Speed and security setup, plus training so you can request updates easily'
    ],
    whoItIsFor: 'Restaurants, cafes, boutiques, salons, studios, clinics and service businesses with no website, or a website that is slow, outdated or not bringing enquiries.',
    relatedDemoIndex: 0,
    faqs: [
      {
        q: 'How long does it take?',
        a: 'We confirm an exact timeline in your quote before starting.'
      },
      {
        q: 'Can I update it myself?',
        a: 'Yes - we show you how, or manage updates for you.'
      }
    ]
  },
  {
    id: 'ecommerce-websites',
    num: '02',
    slug: 'ecommerce-websites',
    category: 'Websites',
    title: 'E-commerce Website Development',
    shortDesc: 'Sell online with product pages, easy checkout and payment options your customers trust.',
    headline: 'Start selling online - properly.',
    intro: 'We build online stores where customers can browse, trust and pay without friction - and where you can manage products, prices and orders without technical help.',
    problems: [
      'Taking orders manually over phone calls and DMs wastes hours every day.',
      'Customers abandon purchases when checkout feels confusing or untrusted.',
      'Updating stock, sizes and prices feels overly technical.'
    ],
    included: [
      'Store design with categories, search and product filters',
      'Product pages with photos, sizes / variants, prices and offers',
      'Cart and secure checkout with payment gateway setup',
      'Delivery, pickup and shipping options configured for your business',
      'Order emails / messages to you and your customer',
      'Discount codes, sale banners and featured products',
      'Training: adding products, changing prices, processing orders'
    ],
    whoItIsFor: 'Clothing and fashion stores, boutiques, gift and specialty shops, and any business taking orders over phone or DM today.',
    relatedDemoIndex: 1,
    faqs: [
      {
        q: 'Can I add and edit products myself after launch?',
        a: 'Yes. We provide hands-on training for adding products, changing prices, and processing orders without needing technical help.'
      },
      {
        q: 'What payment and delivery options are supported?',
        a: 'We configure secure payment gateways along with delivery, pickup, and shipping options tailored to your business.'
      }
    ]
  },
  {
    id: 'portfolio-websites',
    num: '03',
    slug: 'portfolio-websites',
    category: 'Websites',
    title: 'Business Portfolio Websites',
    shortDesc: 'Show your work, services and reviews in one clean link you can share anywhere.',
    headline: 'One link that shows all your work.',
    intro: 'A clean portfolio website for studios, creators, consultants and service professionals - your services, best work, reviews and contact details in one link for Instagram, WhatsApp and Google.',
    problems: [
      'Your best work is scattered across old chats, folders and social feeds.',
      'Prospective clients ask for samples and pricing every time they message.',
      'You need one credible link to share on Instagram, WhatsApp and Google.'
    ],
    included: [
      'About and services sections',
      'Work gallery',
      'Client reviews section',
      'Price / package section (built with your pricing details)',
      'Booking or enquiry form',
      'Social links throughout'
    ],
    whoItIsFor: 'Studios, creators, consultants and service professionals who want one clean link to showcase their work, reviews and services.',
    relatedDemoIndex: 3,
    faqs: [
      {
        q: 'Can I share this link in my Instagram bio and WhatsApp?',
        a: 'Yes. It is designed as one fast, mobile-ready link you can share anywhere.'
      },
      {
        q: 'Can we add new projects to the gallery later?',
        a: 'Yes. We build it cleanly so new work and reviews can be added anytime.'
      }
    ]
  },
  {
    id: 'google-business-profile',
    num: '04',
    slug: 'google-business-profile',
    category: 'Local Visibility',
    title: 'Google Business Profile Setup and Optimisation',
    shortDesc: 'Appear on Google Search and Maps when nearby customers search for what you do.',
    headline: 'When nearby customers search, they should find you first.',
    intro: 'For a local business, your Google Business Profile is often more important than your website. It is what shows on Google Search and Maps with your rating, photos, hours and call button. We set it up completely and optimise it so you show up for the searches that bring customers.',
    problems: [
      'Nearby customers search for your service and find competitors instead.',
      'Your listing has missing hours, wrong map pins, or incomplete services.',
      'You have happy customers in person but very few Google reviews online.'
    ],
    included: [
      'New profile creation and verification, or cleanup of an existing profile',
      'Correct categories, services, service areas and business description written for search',
      'Photos setup - storefront, interior, products / work, team',
      'Opening hours, holiday hours, phone, website and booking links',
      'Products / menu / services listings inside the profile',
      'Review system: a simple review link and QR code for your counter, plus reply templates',
      'Monthly posts, photo updates and profile health checks (in monthly plans)',
      'Fixes for common problems: wrong location pin, duplicate listings, suspended profiles (where recoverable)'
    ],
    whoItIsFor: 'Every local business. If you serve customers in one city or area, this is the first service to buy.',
    relatedDemoIndex: 2,
    faqs: [
      {
        q: 'I already have a Google profile. Is optimisation still useful?',
        a: 'Yes - most profiles are missing categories, services, photos and updates that decide who appears first. We audit yours free and show you what is missing.'
      },
      {
        q: 'How do you help us get more reviews?',
        a: 'We set up a simple review link and QR code for your counter along with clear reply templates.'
      }
    ]
  },
  {
    id: 'social-media',
    num: '05',
    slug: 'social-media',
    category: 'Brand & Social',
    title: 'Social Media Management',
    shortDesc: 'Regular, on-brand posts and reels that keep your business active and remembered.',
    headline: 'Stay active online, even when you are busy in the shop.',
    intro: 'Customers check your Instagram before they visit. An active, professional page builds trust; a silent page sends them to a competitor. We plan, design, write and post for you - consistently.',
    problems: [
      'Your last post was months ago because running the business takes all day.',
      'Random posts without a consistent look fail to build customer trust.',
      'Customers check your page before visiting and wonder if you are still active.'
    ],
    included: [
      'Monthly content plan built around your offers, seasons and events',
      'Posts, carousels and reels - designed and captioned for your business',
      'Hashtags and location tags chosen for your city and category',
      'Festival, offer and announcement creatives',
      'Profile optimisation - bio, highlights, pinned posts',
      'Comment and message guidance, with reply templates for common questions',
      'Monthly report: reach, followers, best posts and what we will do next'
    ],
    whoItIsFor: 'Businesses that know social media matters but have no time to post well or regularly.',
    relatedDemoIndex: 3,
    faqs: [
      {
        q: 'Do you need photos and videos from us?',
        a: 'Real photos of your business perform best. We will give you a simple monthly shot list anyone on your team can capture on a phone, and we handle editing and design.'
      },
      {
        q: 'Which platforms do you manage?',
        a: 'Instagram and Facebook as standard, with LinkedIn and YouTube available on request.'
      }
    ]
  },
  {
    id: 'meta-ads',
    num: '06',
    slug: 'meta-ads',
    category: 'Paid Growth',
    title: 'Digital Marketing and Meta Ads',
    shortDesc: 'Facebook and Instagram ads targeted at the right people, in the right area, with clear reporting.',
    headline: 'Put your offer in front of the right people, near your business.',
    intro: 'Meta Ads - advertising on Facebook and Instagram - lets you reach people by location, age, interests and behaviour. We plan, create, run and improve your campaigns so your budget works on enquiries, not just views.',
    honestNote: 'Ad budget is paid by you directly to Meta and is separate from our service fee. We recommend a starting budget based on your city and category during the free consultation.',
    problems: [
      'Boosting posts blindly spends money without bringing real WhatsApp messages or calls.',
      'Your offers are not reaching buyers in your local neighbourhood or target audience.',
      'You have no clear breakdown of how much each enquiry actually costs.'
    ],
    included: [
      'WhatsApp / Messages campaigns - ads that open a chat with your business',
      'Calls and store visits - local campaigns for restaurants, salons, clinics and shops',
      'Website traffic and sales - send ready buyers to your site or store',
      'Lead generation - enquiry forms for services, courses, bookings and consultations',
      'Retargeting - re-show your business to people who visited your page or website',
      'Offer and festival campaigns - launches, sales and seasonal pushes',
      'Audience and location targeting, ad copy and creative design, campaign setup and tracking, weekly optimisation, and a monthly report in simple language - spend, reach, enquiries and cost per enquiry'
    ],
    whoItIsFor: 'Businesses wanting targeted local reach, WhatsApp enquiries, store visits, bookings, or online sales on Facebook and Instagram.',
    relatedDemoIndex: 1,
    faqs: [
      {
        q: 'Who pays the ad spend budget?',
        a: 'Ad budget is paid by you directly to Meta and is separate from our service fee. We recommend a starting budget based on your city and category during the free consultation.'
      },
      {
        q: 'How will I know if the ads are working?',
        a: 'You receive a monthly report in simple language showing spend, reach, enquiries and cost per enquiry.'
      }
    ]
  },
  {
    id: 'google-ads',
    num: '07',
    slug: 'google-ads',
    category: 'Paid Growth',
    title: 'Google Ads',
    shortDesc: 'Appear at the top of Google exactly when customers are ready to call or buy.',
    headline: 'Be the first name Google shows when customers are ready to buy.',
    intro: 'Google Ads puts your business at the top of search results for the exact words customers type - like your service plus your area. These are people already looking to call, visit or order.',
    problems: [
      'High-intent buyers search for your service right now and click competitors above you.',
      'Unfiltered keywords waste ad budget on irrelevant searches outside your area.',
      'You cannot tell which searches led to actual phone calls or form enquiries.'
    ],
    included: [
      'Search ads - for your services and category keywords in your area',
      'Call campaigns - tap-to-call ads for mobile searchers',
      'Local / Maps visibility campaigns - support your Google Business Profile',
      'Shopping ads - for e-commerce stores with product feeds',
      'YouTube and Display - awareness campaigns on request',
      'Keyword research for your area, ad copy, location and schedule targeting, conversion tracking (calls, forms, WhatsApp clicks), negative keyword cleanup so budget is not wasted, and monthly reporting'
    ],
    whoItIsFor: 'Service businesses, clinics, local shops and e-commerce stores ready to capture customers actively searching to call, visit or buy.',
    relatedDemoIndex: 0,
    faqs: [
      {
        q: 'Meta Ads or Google Ads - which one?',
        a: 'Google Ads catches people already searching. Meta Ads creates demand with people who fit your customer profile. Many businesses do best with both - we will recommend based on your business, honestly, in the free consultation.'
      },
      {
        q: 'How do you stop budget from being wasted on wrong clicks?',
        a: 'We set up strict location and schedule targeting alongside negative keyword cleanup and conversion tracking for calls, forms and WhatsApp clicks.'
      }
    ]
  },
  {
    id: 'seo',
    num: '08',
    slug: 'seo',
    category: 'Search & AI',
    title: 'SEO - Search Engine Optimisation',
    shortDesc: 'Rank higher on Google over time and get enquiries without paying for every click.',
    headline: 'Rank higher on Google and get enquiries without paying for every click.',
    intro: 'SEO improves your website and Google profile so you appear higher in organic (free) search results. It compounds over time - the work done this month keeps bringing visitors for months after.',
    honestNote: 'SEO is a medium-term investment. Most businesses see clear movement in 3 - 6 months. Anyone promising page 1 in a week is not being honest with you - we would rather show you steady, real progress.',
    problems: [
      'Your website sits buried on page two or three where customers rarely scroll.',
      'You rely solely on paid ads or word-of-mouth for steady website visitors.',
      'Technical issues, slow speed, or missing local pages hold your site back.'
    ],
    included: [
      'SEO audit - what is holding your site back today, in plain language',
      'Keyword research - the exact searches your customers use, by service and area',
      'On-page SEO - titles, headings, page copy, images and internal links optimised',
      'Local SEO - Google Business Profile, location pages and local listings aligned',
      'Technical SEO - speed, mobile usability, indexing and error fixes',
      'Content - service pages and helpful articles that answer customer questions',
      'Reviews and authority - a system to earn genuine reviews and local mentions',
      'Monthly report - rankings, traffic and enquiries, with next steps'
    ],
    whoItIsFor: 'Businesses with a website that want sustainable organic search traffic and enquiries month after month.',
    relatedDemoIndex: 0,
    faqs: [
      {
        q: 'How long until we see results from SEO?',
        a: 'SEO is a medium-term investment. Most businesses see clear movement in 3 - 6 months. Anyone promising page 1 in a week is not being honest with you - we would rather show you steady, real progress.'
      },
      {
        q: 'Does SEO include local Google Maps visibility?',
        a: 'Yes. Our Local SEO aligns your Google Business Profile, location pages and local listings together.'
      }
    ]
  },
  {
    id: 'geo',
    num: '09',
    slug: 'geo',
    category: 'Search & AI',
    title: 'GEO - AI Search Optimisation',
    shortDesc: 'Get your business named and recommended when customers ask ChatGPT, Gemini and other AI tools.',
    headline: 'When customers ask AI for a recommendation, your business should be the answer.',
    intro: 'More customers now ask ChatGPT, Gemini, Perplexity and Google AI Overviews questions like "best restaurant near me" or "who makes websites for small businesses here?" GEO - Generative Engine Optimisation - structures your online presence so AI tools can find, understand, trust and recommend your business.',
    problems: [
      'Customers ask AI assistants for local recommendations and your business is never named.',
      'Inconsistent business details across directories confuse AI search models.',
      'Your site lacks structured facts and schema markup that AI engines cite.'
    ],
    included: [
      'AI visibility check - what AI tools currently say about your business and category',
      'Entity setup - the same correct name, address, phone, services and hours everywhere online',
      'Structured content - clear service pages, FAQs and facts written so AI can quote them accurately',
      'Schema / structured data - technical markup that tells search and AI tools exactly what you offer',
      'Authority signals - reviews, listings and mentions on trusted sites AI tools rely on',
      'Question content - pages that answer the real questions customers ask AI about your category',
      'Monitoring - periodic checks of how AI answers in your category are changing'
    ],
    whoItIsFor: 'Businesses that already have a website and Google profile and want to stay visible as search changes. GEO works best on top of good SEO - we offer them together.',
    relatedDemoIndex: 0,
    faqs: [
      {
        q: 'Is GEO different from SEO?',
        a: "Yes. SEO ranks your pages in Google's list of links. GEO gets your business named inside the AI-generated answer itself. You need the same strong base for both - accurate information, helpful content and genuine reviews."
      },
      {
        q: 'Do I need a website first for GEO?',
        a: 'Yes. GEO works best on top of a solid website and Google Business Profile, which is why we offer SEO and GEO together.'
      }
    ]
  },
  {
    id: 'branding',
    num: '10',
    slug: 'branding',
    category: 'Brand & Social',
    title: 'Branding and Graphic Design',
    shortDesc: 'Logo, colours and designs that make your business look professional everywhere.',
    headline: 'Look like the business you want to become.',
    intro: 'Good branding makes a small business look established and trustworthy - on your board, your website, your packaging and your Instagram. We build a clear, consistent identity you can use everywhere.',
    problems: [
      'Your logo looks blurry on social media or clashes with your shop signage.',
      'Your colours, fonts and posts look different on every platform.',
      'First-time visitors judge your quality by inconsistent visual presentation.'
    ],
    included: [
      'Logo design with variations for light, dark and social use',
      'Brand colours, fonts and a simple brand guideline sheet',
      'Social media design templates in your brand style',
      'Offer posters, festival creatives and ad creatives',
      'Business profile / brochure design',
      'Menu, price list and in-store design support (on request)',
      'Rebranding: refresh an old logo and identity without losing recognition'
    ],
    whoItIsFor: 'New businesses that need a complete identity, and existing businesses whose logo, colours and designs do not match across platforms.',
    relatedDemoIndex: 3,
    faqs: [
      {
        q: 'Will I own my logo files?',
        a: 'Yes. You receive the final files in the formats you need for print, web and social media.'
      },
      {
        q: 'Can you refresh our existing logo without starting from scratch?',
        a: 'Yes. Our rebranding service refreshes an old logo and identity without losing recognition.'
      }
    ]
  },
  {
    id: 'digital-presence-setup',
    num: '11',
    slug: 'digital-presence-setup',
    category: 'Complete Setup',
    title: 'Business Digital Presence Setup',
    shortDesc: 'The complete starter package: website, Google profile, social pages and basics, set up together.',
    headline: 'Starting from zero? We set up everything, together.',
    intro: 'One complete setup that takes your business from invisible to fully present online - launched together, connected properly, and handed over with simple training.',
    isOutreachLanding: true,
    problems: [
      'You are starting from zero and do not know whether to build a site, Google profile, or Instagram first.',
      'Hiring separate freelancers leaves your links, branding and profiles disconnected.',
      'You want one reliable team to set everything up properly and hand it over cleanly.'
    ],
    included: [
      'Business website (custom mobile-first design and development)',
      'Google Business Profile setup and optimisation',
      'Instagram and Facebook pages - created or cleaned up, with bio, profile and highlights',
      'WhatsApp Business profile with catalogue, greeting and quick replies',
      'Logo and basic brand kit if you do not have one',
      'All profiles linked to each other and to the website',
      'Review links and QR codes for your shop',
      'Handover session: what everything is, how to use it, what to do weekly'
    ],
    whoItIsFor: 'New businesses, businesses moving online for the first time, and owners who want one team to just handle all of it.',
    ctaNote: 'Tell us about your business and we will recommend the right setup for your stage and budget.',
    relatedDemoIndex: 0,
    faqs: [
      {
        q: 'I do not have a logo or photos yet. Can we still start?',
        a: 'Yes. A logo and basic brand kit are included if you do not have one, and we guide you on collecting photos and business details.'
      },
      {
        q: 'Will everything be connected when you hand it over?',
        a: 'Yes. All profiles are linked to each other and to your website, followed by a clear handover session showing what everything is and what to do weekly.'
      }
    ]
  }
];

/**
 * The list the whole site reads. Services are put in path order (Get Found,
 * Look Trusted, Get More Customers) and numbered 01-11 in that order, so the
 * number on a card, in the menu and on the detail page always matches what
 * the visitor sees. The numbers used to be fixed in the data above, which
 * left each path's cards with gaps (01, 02, 03, then 05, 10).
 */
export const SERVICES_LIST = groupByPath(RAW_SERVICES)
  .flatMap((group) => group.services)
  .map((service, index) => ({
    ...service,
    num: String(index + 1).padStart(2, '0')
  }));

export const GENERAL_FAQS = [
  {
    q: 'Do you work with businesses outside your city?',
    a: 'Yes. Our services are delivered online. Trimarga is based in Naperville, IL, and we work with businesses in the USA and India.'
  },
  {
    q: 'What do you need from me to start?',
    a: 'Your business name, logo if you have one, photos, and your services and prices. Do not have them ready? We will guide you - collecting this is part of the setup.'
  },
  {
    q: 'Who owns my website and accounts?',
    a: 'You do. Your domain, website, Google profile and ad accounts stay in your name. We work inside them as your team.'
  },
  {
    q: 'Can I start small and add services later?',
    a: 'Yes, and we recommend it. Most clients start with a website or Google profile, then add social media, ads and SEO as they grow.'
  }
];

export const HOME_FAQS = [
  {
    q: 'I do not have a website yet. Where do I start?',
    a: 'Start with a free consultation. For most local businesses we recommend the Digital Presence Setup - website, Google Business Profile and social pages together - so everything launches at once.'
  },
  {
    q: 'How much does a website cost?',
    a: 'It depends on the type of website and the features you need. Share your requirements and we will give you a clear quote before any work starts.'
  },
  {
    q: 'Can you manage everything for me every month?',
    a: 'Yes. Social media, ads, SEO and updates can all be handled as one monthly service, with a simple report each month.'
  },
  {
    q: 'I already have a website. Can you improve it?',
    a: 'Yes. We can redesign it, speed it up, add online ordering or booking, and connect it properly to Google and your social pages.'
  }
];

export const PACKAGES = [
  {
    tier: 'Tier 01',
    name: 'Launch',
    bestFor: 'New businesses getting online for the first time',
    includes: [
      'Website or portfolio site',
      'Google Business Profile',
      'WhatsApp Business setup',
      'Basic brand kit'
    ]
  },
  {
    tier: 'Tier 02',
    name: 'Grow',
    bestFor: 'Businesses that are online but not getting enquiries',
    featured: true,
    includes: [
      'Everything in Launch (or cleanup of existing assets)',
      'Social media management',
      'Local SEO'
    ]
  },
  {
    tier: 'Tier 03',
    name: 'Scale',
    bestFor: 'Businesses ready to invest in growth',
    includes: [
      'Everything in Grow',
      'Meta Ads and / or Google Ads management',
      'SEO and GEO',
      'Monthly growth report'
    ]
  }
];
