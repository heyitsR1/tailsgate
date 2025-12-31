import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO = ({
    title,
    description = "Tailsgate - Custom web development for growing businesses. We craft professional websites that scale with your business including Next.js, React, and e-commerce solutions.",
    keywords = "web development, website design, SMB, small business, Next.js, React, custom websites, e-commerce",
    image = "/og-image.png",
    url = "https://tailsgate.com"
}: SEOProps) => {
    const siteTitle = title.includes('Tailsgate') ? title : `${title} | Tailsgate`;
    const canonicalUrl = url.endsWith('/') ? url : `${url}/`;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Tailsgate",
        "image": "https://tailsgate.com/og-image.png",
        "@id": "https://tailsgate.com",
        "url": "https://tailsgate.com",
        "telephone": "+15551234567",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Tech Avenue",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "postalCode": "94107",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 37.7749,
            "longitude": -122.4194
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
        },
        "sameAs": [
            "https://www.facebook.com/tailsgate",
            "https://twitter.com/tailsgate",
            "https://www.linkedin.com/company/tailsgate"
        ]
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Canonical */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
