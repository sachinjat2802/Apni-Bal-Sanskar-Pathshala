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
  const basePath = "";
  return (
    <html lang="zxx">
      <head>
        <link rel="stylesheet" href={`${basePath}/css/bootstrap.min.css`} />
        <link rel="stylesheet" href={`${basePath}/css/icofont.min.css`} />
        <link rel="stylesheet" href={`${basePath}/css/meanmenu.css`} />
        <link rel="stylesheet" href={`${basePath}/css/modal-video.min.css`} />
        <link rel="stylesheet" href={`${basePath}/css/flaticon.css`} />
        <link rel="stylesheet" href={`${basePath}/css/animate.min.css`} />
        <link rel="stylesheet" href={`${basePath}/css/lightbox.min.css`} />
        <link rel="stylesheet" href={`${basePath}/css/owl.carousel.min.css`} />
        <link rel="stylesheet" href={`${basePath}/css/owl.theme.default.min.css`} />
        <link rel="stylesheet" href={`${basePath}/css/odometer.min.css`} />
        <link rel="stylesheet" href={`${basePath}/css/nice-select.min.css`} />
        <link rel="stylesheet" href={`${basePath}/css/style-1.css`} />
        <link rel="stylesheet" href={`${basePath}/css/responsive-1.css`} />
        <link rel="stylesheet" href={`${basePath}/css/theme-dark.css`} />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <link rel="icon" type="image/png" href={`${basePath}/images/logo.png`} />
      </head>
      <body>
        {children}

        {/* Global Scripts */}
        <Script src={`${basePath}/js/jquery.min.js`} strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script src={`${basePath}/js/bootstrap.bundle.min.js`} strategy="lazyOnload" />
        <Script src={`${basePath}/js/form-validator.min.js`} strategy="lazyOnload" />
        <Script src={`${basePath}/js/contact-form-script.js`} strategy="lazyOnload" />
        <Script src={`${basePath}/js/jquery.ajaxchimp.min.js`} strategy="lazyOnload" />
        <Script src={`${basePath}/js/jquery.meanmenu.js`} strategy="lazyOnload" />
        <Script src={`${basePath}/js/jquery-modal-video.min.js`} strategy="lazyOnload" />
        <Script src={`${basePath}/js/wow.min.js`} strategy="lazyOnload" />
        <Script src={`${basePath}/js/lightbox.min.js`} strategy="lazyOnload" />
        <Script src={`${basePath}/js/owl.carousel.min.js`} strategy="lazyOnload" />
        <Script src={`${basePath}/js/odometer.min.js`} strategy="lazyOnload" />
        <Script src={`${basePath}/js/jquery.appear.min.js`} strategy="lazyOnload" />
        <Script src={`${basePath}/js/jquery.nice-select.min.js`} strategy="lazyOnload" />
        <Script src={`${basePath}/js/custom.js`} strategy="lazyOnload" />
      </body>
    </html>
  );
}
