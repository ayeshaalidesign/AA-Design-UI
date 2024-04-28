import React, { useState } from "react";

const Policies = () => {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  return (
    <div class="bg-white text-black">
      <div class="container mx-auto py-12">
        <h1
          class="text-center my-4 text-3xl font-bold text-black"
          style={{ fontFamily: "Seasons" }}
        >
          Our Policies
        </h1>

        <div className="max-w-5xl mx-auto font-semibold px-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("returns")}
          >
            Returns:
          </h2>
          {openSection === "returns" && (
            <ul className="list-disc" style={{ fontFamily: "Seasons Light" }}>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  We facilitate hassle-free returns for online purchases,
                  providing the opportunity to explore alternative selections or
                  receive store credit.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-semibold mt-2">
                  We accept returns exclusively for items that exhibit damage
                  within a defined time frame of 10-14 days from the shipping
                  date, contingent upon the presentation of the original invoice
                  and intact tags.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Items must be unworn, unwashed, and in their original
                  condition, with tags attached. Proof of purchase is required
                  for all returns.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Refunds will be issued to the original form of payment.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Customers are responsible for return shipping costs.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("exchanges")}
          >
            Exchanges:
          </h2>
          {/* Render the content conditionally based on openSection state */}
          {openSection === "exchanges" && (
            <ul className="list-disc" style={{ fontFamily: "Seasons Light" }}>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  We offer exchanges for a different size or color within 14
                  days of the purchase date.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Items must be unworn, unwashed, and in their original
                  condition with tags attached.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Proof of purchase is required for all exchanges.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Exchanges are subject to availability of the selected size and
                  color.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Customers are responsible for return shipping costs for
                  exchanges.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("refunds")}
          >
            Refunds:
          </h2>
          {/* Render the content conditionally based on openSection state */}
          {openSection === "refunds" && (
            <ul className="list-disc" style={{ fontFamily: "Seasons Light" }}>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Refunds will be processed within 7-10 business days of
                  receiving the returned item.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Refunds will be issued to the original form of payment.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  The restocking fee will be deducted from the refund amount.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Shipping charges are non-refundable.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("returnExchange")}
          >
            Initiating a Return or Exchange:
          </h2>
          {/* Render the content conditionally based on openSection state */}
          {openSection === "returnExchange" && (
            <ul className="list-disc" style={{ fontFamily: "Seasons Light" }}>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  To initiate a return or exchange, please contact our customer
                  service team through email.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Our team will provide instructions on how to return or
                  exchange your item.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("exceptions")}
          >
            Exceptions:
          </h2>
          {/* Render the content conditionally based on openSection state */}
          {openSection === "exceptions" && (
            <ul className="list-disc" style={{ fontFamily: "Seasons Light" }}>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Final sale items, such as clearance or discounted items, are
                  not eligible for return or exchange.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Please review our return and exchange policy carefully before
                  making a purchase. For questions or concerns, contact our
                  customer service team for assistance.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("shippingMethod")}
          >
            Shipping Methods:
          </h2>
          {openSection === "shippingMethod" && (
            <ul className="list-disc" style={{ fontFamily: "Seasons Light" }}>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  We offer standard and expedited shipping options for domestic
                  and international orders.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Standard shipping typically takes 5-7 business days for
                  domestic orders and 7-14 business days for international
                  orders.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("shippingRates")}
          >
            Shipping Rates:
          </h2>
          {openSection === "shippingRates" && (
            <ul className="list-disc" style={{ fontFamily: "Seasons Light" }}>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Shipping rates are calculated based on the weight of the
                  order, shipping destination, and selected shipping method.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Customers can view shipping rates at checkout before
                  completing their purchase.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Customers are responsible for paying the estimated shipping
                  costs that are associated with returns and exchanges.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("orderProcessing")}
          >
            Order Processing Time:
          </h2>
          {openSection === "orderProcessing" && (
            <ul className="list-disc" style={{ fontFamily: "Seasons Light" }}>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Orders are typically processed and shipped within 1-2 business
                  days of order placement.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Orders placed on weekends or holidays will be processed the
                  next business day.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("orderTracking")}
          >
            Order Tracking:
          </h2>
          {openSection === "orderTracking" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Once the order has shipped, the customer will receive a
                  shipping confirmation email with a tracking number to monitor
                  the status and location of their package.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("shippingRestrictions")}
          >
            Shipping Restrictions:
          </h2>
          {openSection === "shippingRestrictions" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Please check our website for a list of eligible shipping
                  destinations.
                </p>
              </li>
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Some items may be subject to shipping restrictions due to
                  size, weight, or import/export regulations.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("deliveryIssues")}
          >
            Delivery Issues:
          </h2>
          {openSection === "deliveryIssues" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  In the event of a lost or delayed package, please contact our
                  customer service team for assistance.
                </p>
              </li>
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We do not bear the responsibility for lost or stolen packages
                  after delivery confirmation.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("internationalShipping")}
          >
            International Shipping:
          </h2>
          {openSection === "internationalShipping" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  International orders may be subject to customs duties, taxes,
                  and import fees imposed by the destination country.
                </p>
              </li>
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Customers are responsible for paying any additional charges
                  levied by customs authorities.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("shippingAddress")}
          >
            Shipping Address:
          </h2>
          {openSection === "shippingAddress" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Customers are responsible for providing accurate and complete
                  shipping information at checkout.
                </p>
              </li>
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We are not responsible for orders shipped to incorrect or
                  incomplete addresses provided by the customer.
                </p>
              </li>
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Please review our shipping policy carefully before placing
                  your order. If you have any questions or concerns, please
                  contact our customer service team for assistance.
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div class="container mx-auto">
        <h1
          class="text-center text-3xl font-bold text-black"
          style={{ fontFamily: "Seasons" }}
        >
          Privacy Policy
        </h1>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("informationCollection")}
          >
            Information Collection:
          </h2>
          {openSection === "informationCollection" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We collect personal information such as name, email address,
                  shipping address, and payment details when a customer places
                  an order on our website.
                </p>
              </li>
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We also collect non-personal information such as browsing
                  history, IP address, and device information through cookies
                  and similar technologies.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("useOfInformation")}
          >
            Use of Information:
          </h2>
          {openSection === "useOfInformation" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We use the information collected to process orders,
                  communicate with customers, and provide personalized shopping
                  experiences.
                </p>
              </li>
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Personal information may also be used for marketing purposes,
                  including promotional emails and newsletters.
                </p>
              </li>
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Non-personal information is used to analyze website usage
                  patterns, improve our products and services, and enhance user
                  experience.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("informationSharing")}
          >
            Information Sharing:
          </h2>
          {openSection === "informationSharing" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We may share personal information with third-party service
                  providers such as payment processors, shipping companies, and
                  marketing agencies to facilitate order fulfillment and
                  marketing activities.
                </p>
              </li>
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We do not sell or rent personal information to third parties
                  for their marketing purposes.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("dataSecurity")}
          >
            Data Security:
          </h2>
          {openSection === "dataSecurity" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We implement security measures to protect personal information
                  from unauthorized access, disclosure, alteration, or
                  destruction.
                </p>
              </li>
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Secure socket layer (SSL) technology is used to encrypt
                  sensitive data transmitted between the user's browser and our
                  servers during online transactions.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("userRights")}
          >
            User Rights:
          </h2>
          {openSection === "userRights" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Users have the right to access, update, or delete their
                  personal information stored in our database.
                </p>
              </li>
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Users can opt out of receiving promotional communications at
                  any time by unsubscribing from marketing emails or contacting
                  customer support.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("cookiesTracking")}
          >
            Cookies and Tracking Technologies:
          </h2>
          {openSection === "cookiesTracking" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We use cookies and similar tracking technologies to enhance
                  user experience, analyze website traffic, and deliver targeted
                  advertising.
                </p>
              </li>
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Users can manage cookie preferences through their web browser
                  settings and opt out of targeted advertising through industry
                  opt-out mechanisms.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("childrenPrivacy")}
          >
            Children's Privacy:
          </h2>
          {openSection === "childrenPrivacy" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Our website is not intended for children under the age of 13,
                  and we do not knowingly collect personal information from
                  minors.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("changesToPrivacyPolicy")}
          >
            Changes to the Privacy Policy:
          </h2>
          {openSection === "changesToPrivacyPolicy" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We reserve the right to update our privacy policy periodically
                  to reflect changes in our information practices.
                </p>
              </li>
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Users will be notified of any material changes to the privacy
                  policy through website notifications or email communication.
                </p>
              </li>
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  By using our website and services, users consent to the
                  collection, use, and sharing of their information as described
                  in this privacy policy. For questions or concerns about our
                  privacy practices, please contact our privacy officer for
                  assistance.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("termsAndConditions")}
          >
            Terms and Conditions:
          </h2>
          {openSection === "termsAndConditions" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  By accessing or using our website and services, users agree to
                  comply with these terms and conditions. If you do not agree
                  with any part of these terms, you may not use our website or
                  services.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("useOfWebsite")}
          >
            Use of Website:
          </h2>
          {openSection === "useOfWebsite" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left font-normal mt-2"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  You may not use our website for any unlawful or prohibited
                  purpose.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("intellectualProperty")}
          >
            Intellectual Property:
          </h2>
          {openSection === "intellectualProperty" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-semibold"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  All content on our website, including text, graphics, logos,
                  images, and software, is the property of our brand AYESHA ALI
                  DESIGN, and protected by intellectual property laws. You may
                  not reproduce, distribute, modify, or display any content from
                  our website without prior written consent.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("productInformation")}
          >
            Product Information:
          </h2>
          {openSection === "productInformation" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Our team works meticulously to provide accurate and up-to-date
                  information about our products, including descriptions,
                  prices, and availability. However, we do not guarantee the
                  accuracy or completeness of product information and reserve
                  the right to correct any errors or inaccuracies.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("orderingPayment")}
          >
            Ordering and Payment:
          </h2>
          {openSection === "orderingPayment" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Upon the placement of an order on our website, the customer
                  agrees to provide their accurate and complete information and
                  their preferred method of payment.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We reserve the right to cancel or refuse any orders at our
                  discretion, including orders with incorrect pricing or
                  availability information.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Payment is due at the time of purchase and is accepted through
                  the approved payment methods only.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("shippingDelivery")}
          >
            Shipping and Delivery:
          </h2>
          {openSection === "shippingDelivery" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We prioritize the processing and shipping of all orders in a
                  timely manner. Shipping costs and delivery times may vary
                  depending on the customer’s location and chosen shipping
                  method.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("customerServicePolicy")}
          >
            Customer Service Policy/ Communication Channels:
          </h2>
          {openSection === "customerServicePolicy" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We provide multiple communication channels for customers to
                  reach us, including phone, email, and live chat support during
                  specified hours, however, currently we are focused on email
                  support.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Our customer service representatives are trained to provide
                  prompt and courteous assistance to address inquiries,
                  concerns, and feedback.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("responsiveness")}
          >
            Responsiveness:
          </h2>
          {openSection === "responsiveness" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We strive to respond to customer inquiries and requests on
                  time, typically within 24 to 48 hours during regular business
                  hours.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Urgent matters or issues requiring immediate attention are
                  prioritized for faster resolution.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("productKnowledge")}
          >
            Product Knowledge:
          </h2>
          {openSection === "productKnowledge" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Our customer service team is knowledgeable about our products,
                  including features, materials, sizing, and care instructions.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Detailed information and recommendations can be given on
                  request to help customers make informed purchasing decisions.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("orderAssistance")}
          >
            Order Assistance:
          </h2>
          {openSection === "orderAssistance" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We assist customers with order-related inquiries, including
                  order status, tracking information, and modifications or
                  cancellations.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Customers can also receive assistance with returns, exchanges,
                  and refunds as per our return policy.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("problemResolution")}
          >
            Problem Resolution:
          </h2>
          {openSection === "problemResolution" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  In the event of product defects, shipping issues, or other
                  problems, we are committed to resolving issues promptly and
                  satisfactorily.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Our customer service team will work closely with customers to
                  find suitable solutions, which may include replacements,
                  refunds, or credits.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("professionalismCourtesy")}
          >
            Professionalism and Courtesy:
          </h2>
          {openSection === "professionalismCourtesy" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We maintain a professional and courteous demeanor in all
                  customer interactions, treating each customer with respect and
                  empathy.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Our goal is to provide a positive and enjoyable shopping
                  experience for every customer, fostering long-term
                  relationships and loyalty.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("feedbackImprovement")}
          >
            Feedback and Improvement:
          </h2>
          {openSection === "feedbackImprovement" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We welcome customer feedback and suggestions as valuable
                  insights for our continuous improvement.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Customer feedback is regularly reviewed and analyzed to
                  identify areas for enhancement in our products, services, and
                  customer experience.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("compliance")}
          >
            Compliance:
          </h2>
          {openSection === "compliance" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Our customer service operations adhere to all relevant laws,
                  regulations, and industry standards, including those related
                  to consumer rights, data protection, and customer service
                  practices.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  For questions, concerns, or feedback regarding our customer
                  service policy, please contact us. We are committed to
                  providing exceptional service and satisfaction to our valued
                  customers.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("authenticityGuarantee")}
          >
            Product Authenticity Guarantee/ Originality Assurance:
          </h2>
          {openSection === "authenticityGuarantee" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We guarantee that all products offered by AYESHA ALI DESIGN
                  are 100% authentic and the original work of the designer. Each
                  item undergoes rigorous quality control measures to ensure
                  authenticity, including verification of trademarks, logos,
                  labels, and packaging.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("traceabilityDocumentation")}
          >
            Traceability and Documentation:
          </h2>
          {openSection === "traceabilityDocumentation" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We maintain detailed records and documentation for each
                  product, including invoices, and receipts.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Customers can request product documentation and verification
                  to confirm the authenticity and provenance of their purchases.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("legalCompliance")}
          >
            Legal Compliance:
          </h2>
          {openSection === "legalCompliance" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Our operations comply with all relevant laws, regulations, and
                  industry standards related to product authenticity, including
                  intellectual property rights, trademark protection, and
                  anti-counterfeiting laws.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We work closely with brand owners, law enforcement agencies,
                  and industry organizations to combat counterfeiting and
                  protect the integrity of our products and brands.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("satisfactionGuarantee")}
          >
            Satisfaction Guarantee:
          </h2>
          {openSection === "satisfactionGuarantee" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We stand behind the authenticity of our products and offer a
                  satisfaction guarantee to ensure customer confidence and
                  satisfaction.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  In the rare event that a customer receives a product that is
                  found to be damaged or defective, we offer hassle-free
                  returns, exchanges, or refunds as per our return policy.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Our Product Authenticity Guarantee reflects our unwavering
                  commitment to delivering genuine luxury products and
                  maintaining the trust and satisfaction of our valued
                  customers.
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div class="container mx-auto">
        <h1
          class="text-center text-3xl font-bold text-black mt-8"
          style={{ fontFamily: "Seasons" }}
        >
          Social Responsibility
        </h1>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("ethicalSourcingProduction")}
          >
            Ethical Sourcing and Production:
          </h2>
          {openSection === "ethicalSourcingProduction" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We are committed to ethical sourcing and production practices
                  that prioritize the well-being of workers, communities, and
                  the environment.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Our supply chain partners are required to adhere to strict
                  ethical standards, including fair labor practices, safe
                  working conditions, and environmental sustainability.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("environmentalStewardship")}
          >
            Environmental Stewardship:
          </h2>
          {openSection === "environmentalStewardship" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We recognize our responsibility to minimize the environmental
                  impact of our operations and products throughout their
                  lifecycle.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We implement sustainable practices such as reducing waste,
                  conserving resources, and minimizing carbon emissions in our
                  manufacturing, packaging, and distribution processes.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("communityEngagementPhilanthropy")}
          >
            Community Engagement and Philanthropy:
          </h2>
          {openSection === "communityEngagementPhilanthropy" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We value our active engagement with local communities and
                  support charitable initiatives that address social, economic,
                  and environmental challenges.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Through partnerships with nonprofit organizations and
                  community outreach programs, we contribute to initiatives
                  focused on education, poverty alleviation, and environmental
                  conservation.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("diversityInclusion")}
          >
            Diversity and Inclusion:
          </h2>
          {openSection === "diversityInclusion" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We embrace diversity and inclusion as one of our fundamental
                  values that enrich our workplace culture, foster innovation,
                  and strengthen our brand.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We promote diversity in our workforce, supply chain, and
                  marketing efforts, striving to create an inclusive environment
                  where all individuals are valued, respected, and empowered.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("humanRightsLaborStandards")}
          >
            Human Rights and Labor Standards:
          </h2>
          {openSection === "humanRightsLaborStandards" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We uphold human rights and labor standards in all aspects of
                  our business operations and supply chain.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We prohibit forced labor, child labor, discrimination,
                  harassment, and other forms of exploitation, and we require
                  our suppliers to adhere to the same principles.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("transparencyAccountability")}
          >
            Transparency and Accountability:
          </h2>
          {openSection === "transparencyAccountability" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We are transparent about our social responsibility
                  initiatives, practices, and performance, regularly
                  communicating with stakeholders about our progress and
                  challenges.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We hold ourselves accountable for upholding the highest
                  standards of social responsibility and welcome feedback from
                  stakeholders to continuously improve our practices.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("continuousImprovement")}
          >
            Continuous Improvement:
          </h2>
          {openSection === "continuousImprovement" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We are committed to continuous improvement in our social
                  responsibility efforts, striving to set and achieve ambitious
                  goals that drive positive impact.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We regularly assess our policies, practices, and performance,
                  identifying areas for improvement and implementing corrective
                  actions to address any shortcomings.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-8">
          <h2
            className="text-lg font-bold text-left cursor-pointer"
            style={{ fontFamily: "Seasons" }}
            onClick={() => toggleSection("complianceGovernance")}
          >
            Compliance and Governance:
          </h2>
          {openSection === "complianceGovernance" && (
            <ul className="list-disc">
              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  We comply with all applicable laws, regulations, and
                  international standards related to social responsibility,
                  including labor rights, environmental protection, and human
                  rights.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Our social responsibility policies are governed by a dedicated
                  team responsible for oversight, monitoring, and ensuring
                  compliance across our organization and supply chain.
                </p>
              </li>

              <li>
                <p
                  className="text-md text-left mt-2 font-normal"
                  style={{ fontFamily: "Seasons Light" }}
                >
                  Our Social Responsibility Policy reflects our dedication to
                  making a positive difference in the world, upholding ethical
                  values, and contributing.
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Policies;
