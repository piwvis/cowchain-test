import dynamic from "next/dynamic";

const Header = dynamic(() => import("./blocks/Header"));
const HomeContent = dynamic(() => import("./blocks/home-content"));

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Web3 development, and how is it different from traditional web development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web3 development represents the evolution of web technologies towards decentralized"
      }
    },
    {
      "@type": "Question",
      name: "What measures are taken to ensure the security of Web3 applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web3 applications prioritize security through smart contract audits, secure coding practices, and encryption protocols. Regular penetration testing identifies vulnerabilities, and decentralized identity systems enhance user privacy. Immutable ledgers in blockchain technology ensure data integrity, and community involvement through open-source development contributes to overall security. Continuous monitoring detects and responds to real-time threats, and adaptation to evolving standards is essential for maintaining robust security in the dynamic Web3 landscape."
      }
    },
    {
      "@type": "Question",
      name: "How can I monetize my Web3 application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tokenization: Implement utility tokens within your Web3 app, allowing users to engage in transactions and exchanges with the platform's native token. NFT Sales: Monetize by selling unique digital assets as NFTs, enabling users to buy, sell, and trade these assets within the application. Subscription Plans: Introduce subscription models for premium features, offering users enhanced functionalities in exchange for a recurring fee. DeFi Integration: Explore decentralized finance (DeFi) opportunities, such as lending or yield farming, and generate revenue through associated transaction fees or interest."
      }
    },
    {
      "@type": "Question",
      name: "What are the benefits of using Web3 applications for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web3 applications bring transparency and trust to the forefront by leveraging decentralized technologies. This not only reduces dependence on intermediaries but also introduces innovative monetization through utility tokens, creating a dynamic user-centric economy within the application. The result is a more secure and forward-thinking digital environment for your business"
      }
    },
    {
      "@type": "Question",
      name: "How can a Web3 development agency help my business implement blockchain technology effectively?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Web3 development agencies prioritize security throughout the development process. This includes rigorous smart contract auditing, following best practices for secure coding, implementing encryption protocols, conducting penetration testing, and keeping abreast of the latest security standards."
      }
    }
  ]
};

const jsonLdContacts = {
  "@context": "http://schema.org",
  "@type": "Organization",
  brand: "Cowchain",
  logo: "/logo-light.svg",
  name: "cowchain.io",
  email: "sales@cowchain.io",
  url: "{page_URL}",
  sameAs: [
    "https://twitter.com/cow_chain?s=21&t=GzCtGwm3Tlc6X48xYesJlw",
    "https://www.linkedin.com/company/cowchain/"
  ]
};

const jsonLdVideo = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Cownchain Logo Animation",
  description: "Cownchain Logo Animation",
  thumbnailUrl: ["@/assets/homepage/thumbnail.png"],
  uploadDate: "2024-02-31T08:00:00+08:00",
  duration: "PT1M6S",
  contentUrl: "/homepage/video.mp4",
  embedUrl: "/homepage/video.mp4",
  interactionStatistic: {
    "@type": "InteractionCounter",
    interactionType: { "@type": "WatchAction" }
  }
};

export const metadata = {
  metadataBase: new URL("https://cowchain.io/"),
  alternates: {
    canonical: "/"
  }
};

export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdContacts) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }}
      />
      <Header />
      <HomeContent />{" "}
    </div>
  );
}
