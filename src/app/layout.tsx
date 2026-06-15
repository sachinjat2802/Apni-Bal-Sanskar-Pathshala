import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uthan seva sansthan",
  description: "Apni-Bal-Sanskar-Pathshala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="zxx">
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/icofont.min.css" />
        <link rel="stylesheet" href="/css/meanmenu.css" />
        <link rel="stylesheet" href="/css/modal-video.min.css" />
        <link rel="stylesheet" href="/css/flaticon.css" />
        <link rel="stylesheet" href="/css/animate.min.css" />
        <link rel="stylesheet" href="/css/lightbox.min.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/css/odometer.min.css" />
        <link rel="stylesheet" href="/css/nice-select.min.css" />
        <link rel="stylesheet" href="/css/style-1.css" />
        <link rel="stylesheet" href="/css/responsive-1.css" />
        <link rel="stylesheet" href="/css/theme-dark.css" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <link rel="icon" type="image/png" href="/images/logo.png" />
      </head>
      <body>
        {children}

        {/* Global Scripts */}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
        <Script src="/js/form-validator.min.js" strategy="lazyOnload" />
        <Script src="/js/contact-form-script.js" strategy="lazyOnload" />
        <Script src="/js/jquery.ajaxchimp.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.meanmenu.js" strategy="lazyOnload" />
        <Script src="/js/jquery-modal-video.min.js" strategy="lazyOnload" />
        <Script src="/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/js/lightbox.min.js" strategy="lazyOnload" />
        <Script src="/js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/js/odometer.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.appear.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.nice-select.min.js" strategy="lazyOnload" />
        <Script src="/js/custom.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
