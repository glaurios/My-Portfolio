export default function StructuredData() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Tyndale Anane Antwi",
        description:
          "Portfolio of Tyndale Anane Antwi, a Full Stack Developer.",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Tyndale Anane Antwi",
        url: siteUrl,
        jobTitle: "Full Stack Developer",
        description:
          "Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and modern digital experiences.",
        image: `${siteUrl}/opengraph-image.png`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}