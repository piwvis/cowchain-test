export function faqMicroData() {
  return {
    __html: `{"@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Question 1",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Answer 1"
            }
        },
        {
            "@type": "Question",
            "name": "Question 2",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Answer 2"
            }
        }
    ]
}`
  };
}
