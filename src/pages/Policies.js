import React, { useState } from "react";

const Policies = () => {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  return (
    <div class="bg-white text-black font-verdana">
      <div class="container mx-auto py-12">
        <h1 class="text-center my-4 text-xl font-bold text-black ">
          Our Policies
        </h1>

        <div className="max-w-5xl mx-auto font-semibold px-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer "
            onClick={() => toggleSection("qualityAssurance")}
          >
            Quality Assurance
          </h3>
          {openSection === "qualityAssurance" && (
            <ul className="list-disc ">
              <li>
                <p className="text-md text-left font-normal mt-2">
                  All garments are thoroughly inspected prior to shipping to
                  ensure the highest quality and that they meet our standards.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer "
            onClick={() => toggleSection("returns")}
          >
            Returns and Exchange Policy
          </h3>
          {openSection === "returns" && (
            <ul className="list-disc ">
              <li>
                <p className="text-md text-left font-normal mt-2">
                  At Ayesha Ali Design, we are committed to your satisfaction.
                  While we do not offer refunds, we understand that sometimes a
                  different size may be needed. We are pleased to offer
                  exchanges for a different size of the same item within 3
                  business days of receiving your order.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer "
            onClick={() => toggleSection("exchanges")}
          >
            How to Exchange an Item
          </h3>
          {/* Render the content conditionally based on openSection state */}
          {openSection === "exchanges" && (
            <ul className="list-disc ">
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Contact Us: To initiate an exchange, please contact our
                  support team at{" "}
                  <a
                    href="mailto:support@ayeshaalidesign.com"
                    className="font-semibold"
                  >
                    support@ayeshaalidesign.com{" "}
                  </a>
                  within 3 business days of receiving your item. Please include
                  your order number and the size you wish to receive in your
                  exchange request.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Confirmation and Instructions: Once we receive your request,
                  we will confirm the availability of the desired size and
                  provide you with instructions on how to return the original
                  item.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Shipping Your Return: Please send the item back to us in its
                  original condition, unworn, unwashed, and with tags attached.
                  You will be responsible for covering the shipping charges
                  associated with returning the item. We recommend using a
                  traceable shipping method as we cannot be responsible for lost
                  returns.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Processing Your Exchange: Upon receiving the returned item, we
                  will inspect it to ensure it meets our return conditions. If
                  approved, we will ship the new size to you. Please note that
                  shipping charges for the new item will also be your
                  responsibility.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer "
            onClick={() => toggleSection("refunds")}
          >
           Additional Information 
          </h3>
          {/* Render the content conditionally based on openSection state */}
          {openSection === "refunds" && (
            <ul className="list-disc ">
              <li>
                <p className="text-md text-left font-normal mt-2">
                Time Frame: Exchanges must be postmarked within 3 business days from the date of receipt of the original
item.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                Condition of Items: Items must be returned in their original condition, unworn and with all tags attached.
Items that do not meet these criteria will not be eligible for an exchange.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                Shipping Costs: All shipping costs for exchanges are non-refundable and must be borne by the customer.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                Thank you for choosing Ayesha Ali Design. We appreciate your understanding of our policies and look forward
to continuing to serve you with beautifully designed garments.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer "
            onClick={() => toggleSection("returnExchange")}
          >
            Exchange Exceptions
          </h3>
          {/* Render the content conditionally based on openSection state */}
          {openSection === "returnExchange" && (
            <ul className="list-disc ">
              <li>
                <p className="text-md text-left font-normal mt-2">
                Final sale items, such as clearance items, are not eligible for return or exchange
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                Please review our return and exchange policy before making a purchase. For questions or concerns, contact
our customer service team for assistance.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer "
            onClick={() => toggleSection("exceptions")}
          >
           Shipping Methods
          </h3>
          {/* Render the content conditionally based on openSection state */}
          {openSection === "exceptions" && (
            <ul className="list-disc ">
              <li>
                <p className="text-md text-left font-normal mt-2">
                We offer standard and expedited shipping options. Standard shipping typically takes 3-5 business days for
domestic orders. We are not shipping orders outside the U.S. at this time
                </p>
              </li>
              
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer "
            onClick={() => toggleSection("shippingMethod")}
          >
            Shipping Rates
          </h3>
          {openSection === "shippingMethod" && (
            <ul className="list-disc ">
              <li>
                <p className="text-md text-left font-normal mt-2">
                Shipping rates are calculated based on the weight of the order, shipping destination, and selected shipping
method.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                Customers can view shipping rates at checkout before completing their purchase.
                </p>
              </li>

              <li>
                <p className="text-md text-left font-normal mt-2">
                Customers are responsible for paying the estimated shipping costs that are associated with exchanges.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer "
            onClick={() => toggleSection("shippingRates")}
          >
            Order Processing Time
          </h3>
          {openSection === "shippingRates" && (
            <ul className="list-disc ">
              <li>
                <p className="text-md text-left font-normal mt-2">
                Orders are typically processed and shipped within 1-2 business days of order placement.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                Orders placed on weekends or holidays will be processed the next business day.
                </p>
              </li>
              
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer "
            onClick={() => toggleSection("orderProcessing")}
          >
           Order Tracking
          </h3>
          {openSection === "orderProcessing" && (
            <ul className="list-disc ">
              <li>
                <p className="text-md text-left font-normal mt-2">
                Once the order has shipped, the customer will receive a shipping confirmation email with a tracking number
to monitor the status and location of their package.
                </p>
              </li>
              
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer "
            onClick={() => toggleSection("orderTracking")}
          >
            Shipping Restrictions
          </h3>
          {openSection === "orderTracking" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left font-normal mt-2">
                Please check our website for a list of eligible shipping destinations.
               
                </p>
              </li>

              <li>
                <p className="text-md text-left font-normal mt-2">
                
                Some items may be subject to shipping restrictions due to size, weight, or import/export regulations.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("shippingRestrictions")}
          >
           Delivery Issues
          </h3>
          {openSection === "shippingRestrictions" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left font-normal mt-2">
                In the event of a lost or delayed package, please contact our customer service team for assistance.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                We do not bear the responsibility for lost or stolen packages after delivery confirmation.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("deliveryIssues")}
          >
            International Shipping
          </h3>
          {openSection === "deliveryIssues" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left font-normal mt-2">
                We are not shipping orders outside the U.S. at this time
                </p>
              </li>
             
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("internationalShipping")}
          >
            Shipping Address
          </h3>
          {openSection === "internationalShipping" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left font-normal mt-2">
                Customers are responsible for providing accurate and complete shipping information at checkout.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                We are not responsible for orders shipped to incorrect or incomplete addresses provided by the customer.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                Please review our shipping policy before placing your order. If you have any questions or concerns, please
contact our customer service team for assistance.
                </p>
              </li>
            </ul>
          )}
        </div>

       
      </div>

      <div class="container mx-auto">
        <h1 class="text-center text-xl font-bold text-black">Privacy Policy</h1>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("informationCollection")}
          >
            Information Collection
          </h3>
          {openSection === "informationCollection" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left font-normal mt-2">
                  We collect personal information such as name, email address,
                  shipping address, and payment details when a customer places
                  an order on our website.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  We also collect non-personal information such as browsing
                  history, IP address, and device information through cookies
                  and similar technologies.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("useOfInformation")}
          >
            Use of Information
          </h3>
          {openSection === "useOfInformation" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left font-normal mt-2">
                  We use the information collected to process orders,
                  communicate with customers, and provide personalized shopping
                  experiences.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Personal information may also be used for marketing purposes,
                  including promotional emails and newsletters.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Non-personal information is used to analyze website usage
                  patterns, improve our products and services, and enhance user
                  experience.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("informationSharing")}
          >
            Information Sharing
          </h3>
          {openSection === "informationSharing" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left font-normal mt-2">
                We may share personal information with third-party service providers such as payment processors, shipping
companies, and marketing agencies to facilitate order fulfillment and marketing activities for our products
and services.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                We do not sell or rent personal information to third parties for their marketing purposes.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("dataSecurity")}
          >
            Data Security
          </h3>
          {openSection === "dataSecurity" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left font-normal mt-2">
                  We implement security measures to protect personal information
                  from unauthorized access, disclosure, alteration, or
                  destruction.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Secure socket layer (SSL) technology is used to encrypt
                  sensitive data transmitted between the user's browser and our
                  servers during online transactions.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("userRights")}
          >
            User Rights
          </h3>
          {openSection === "userRights" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left font-normal mt-2">
                Users have the right to update or delete their personal information stored in our database.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                Users can opt out of receiving promotional communications at any time by unsubscribing from marketing
emails or contacting customer support.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("cookiesTracking")}
          >
            Cookies and Tracking Technologies
          </h3>
          {openSection === "cookiesTracking" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left font-normal mt-2">
                  We use cookies and similar tracking technologies to enhance
                  user experience, analyze website traffic, and deliver targeted
                  advertising.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Users can manage cookie preferences through their web browser
                  settings and opt out of targeted advertising through industry
                  opt-out mechanisms.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("childrenPrivacy")}
          >
            Children's Privacy
          </h3>
          {openSection === "childrenPrivacy" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left font-normal mt-2">
                  Our website is not intended for children under the age of 13,
                  and we do not knowingly collect personal information from
                  minors.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("changesToPrivacyPolicy")}
          >
            Changes to the Privacy Policy
          </h3>
          {openSection === "changesToPrivacyPolicy" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left font-normal mt-2">
                We reserve the right to update our privacy policy periodically to reflect changes in our information practices.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                Users will be notified of any material changes to the privacy policy through website notifications or email
communication.
                </p>
              </li>
              <li>
                <p className="text-md text-left font-normal mt-2">
                By using our website and services, users consent to the collection, use, and sharing of their information as
described in this privacy policy. For questions or concerns about our privacy practices, please contact our
customer support for assistance.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("termsAndConditions")}
          >
            Terms and Conditions
          </h3>
          {openSection === "termsAndConditions" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left font-normal mt-2">
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
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("useOfWebsite")}
          >
            Use of Website
          </h3>
          {openSection === "useOfWebsite" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left font-normal mt-2">
                  You may not use our website for any unlawful or prohibited
                  purpose.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("intellectualProperty")}
          >
            Intellectual Property
          </h3>
          {openSection === "intellectualProperty" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
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
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("productInformation")}
          >
            Product Information
          </h3>
          {openSection === "productInformation" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
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
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("orderingPayment")}
          >
            Ordering and Payment
          </h3>
          {openSection === "orderingPayment" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                  Upon the placement of an order on our website, the customer
                  agrees to provide their accurate and complete information and
                  their preferred method of payment.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                  We reserve the right to cancel or refuse any orders at our
                  discretion, including orders with incorrect pricing or
                  availability information.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                  Payment is due at the time of purchase and is accepted through
                  the approved payment methods only.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("shippingDelivery")}
          >
            Shipping and Delivery
          </h3>
          {openSection === "shippingDelivery" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
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
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("customerServicePolicy")}
          >
            Customer Service Policy/ Communication Channels
          </h3>
          {openSection === "customerServicePolicy" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                  We provide multiple communication channels for customers to
                  reach us, including phone, email, and live chat support during
                  specified hours, however, currently we are focused on email
                  support.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                  Our customer service representatives are trained to provide
                  prompt and courteous assistance to address inquiries,
                  concerns, and feedback.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("responsiveness")}
          >
            Responsiveness
          </h3>
          {openSection === "responsiveness" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                  We strive to respond to customer inquiries and requests on
                  time, typically within 24 to 48 hours during regular business
                  hours.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                  Urgent matters or issues requiring immediate attention are
                  prioritized for faster resolution.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("productKnowledge")}
          >
            Product Knowledge
          </h3>
          {openSection === "productKnowledge" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                  Our customer service team is knowledgeable about our products,
                  including features, materials, sizing, and care instructions.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                  Detailed information and recommendations can be given on
                  request to help customers make informed purchasing decisions.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("orderAssistance")}
          >
            Order Assistance
          </h3>
          {openSection === "orderAssistance" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                We assist customers with order-related inquiries, including order status, tracking information, and
modifications or cancellations.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                Customers can also receive assistance with exchanges as per our return policy.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("problemResolution")}
          >
            Problem Resolution
          </h3>
          {openSection === "problemResolution" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                In the event of product defects, shipping issues, or other problems, we are committed to resolving issues
promptly and satisfactorily.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                  Our customer service team will work closely with customers to
                  find suitable solutions, which may include replacements,
                  refunds, or credits.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("professionalismCourtesy")}
          >
            Professionalism and Courtesy
          </h3>
          {openSection === "professionalismCourtesy" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                  We maintain a professional and courteous demeanor in all
                  customer interactions, treating each customer with respect and
                  empathy.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                  Our goal is to provide a positive and enjoyable shopping
                  experience for every customer, fostering long-term
                  relationships and loyalty.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("feedbackImprovement")}
          >
            Feedback and Improvement
          </h3>
          {openSection === "feedbackImprovement" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                  We welcome customer feedback and suggestions as valuable
                  insights for our continuous improvement.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                  Customer feedback is regularly reviewed and analyzed to
                  identify areas for enhancement in our products, services, and
                  customer experience.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("compliance")}
          >
            Compliance
          </h3>
          {openSection === "compliance" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                  Our customer service operations adhere to all relevant laws,
                  regulations, and industry standards, including those related
                  to consumer rights, data protection, and customer service
                  practices.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
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
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("authenticityGuarantee")}
          >
            Product Authenticity Guarantee/ Originality Assurance
          </h3>
          {openSection === "authenticityGuarantee" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
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
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("traceabilityDocumentation")}
          >
            Traceability and Documentation
          </h3>
          {openSection === "traceabilityDocumentation" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                  We maintain detailed records and documentation for each
                  product, including invoices, and receipts.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                  Customers can request product documentation and verification
                  to confirm the authenticity and provenance of their purchases.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("legalCompliance")}
          >
            Legal Compliance
          </h3>
          {openSection === "legalCompliance" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                Our operations comply with all relevant laws, regulations, and industry standards related to product
authenticity, including intellectual property rights, trademark protection, and anti-counterfeiting laws.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                We work closely with law enforcement agencies and industry organizations to combat counterfeiting and
protect the integrity of our products and brands.
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div class="container mx-auto">
        <h1 class="text-center text-xl font-bold text-black mt-12">
          Social Responsibility
        </h1>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("ethicalSourcingProduction")}
          >
            Ethical Sourcing and Production
          </h3>
          {openSection === "ethicalSourcingProduction" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                  We are committed to ethical sourcing and production practices
                  that prioritize the well-being of workers, communities, and
                  the environment.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                  Our supply chain partners are required to adhere to strict
                  ethical standards, including fair labor practices, safe
                  working conditions, and environmental sustainability.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("environmentalStewardship")}
          >
            Environmental Stewardship
          </h3>
          {openSection === "environmentalStewardship" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                  We recognize our responsibility to minimize the environmental
                  impact of our operations and products throughout their
                  lifecycle.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                  We implement sustainable practices such as reducing waste,
                  conserving resources, and minimizing carbon emissions in our
                  manufacturing, packaging, and distribution processes.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("communityEngagementPhilanthropy")}
          >
            Community Engagement and Philanthropy
          </h3>
          {openSection === "communityEngagementPhilanthropy" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                  We value our active engagement with local communities and
                  support charitable initiatives that address social, economic,
                  and environmental challenges.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
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
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("diversityInclusion")}
          >
            Diversity and Inclusion
          </h3>
          {openSection === "diversityInclusion" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                  We embrace diversity and inclusion as one of our fundamental
                  values that enrich our workplace culture, foster innovation,
                  and strengthen our brand.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                  We promote diversity in our workforce, supply chain, and
                  marketing efforts, striving to create an inclusive environment
                  where all individuals are valued, respected, and empowered.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("transparencyAccountability")}
          >
            Transparency and Accountability
          </h3>
          {openSection === "transparencyAccountability" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                  We are transparent about our social responsibility
                  initiatives, practices, and performance, regularly
                  communicating with stakeholders about our progress and
                  challenges.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                  We hold ourselves accountable for upholding the highest
                  standards of social responsibility and welcome feedback from
                  stakeholders to continuously improve our practices.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-4">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("continuousImprovement")}
          >
            Continuous Improvement
          </h3>
          {openSection === "continuousImprovement" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                  We are committed to continuous improvement in our social
                  responsibility efforts, striving to set and achieve ambitious
                  goals that drive positive impact.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                  We regularly assess our policies, practices, and performance,
                  identifying areas for improvement and implementing corrective
                  actions to address any shortcomings.
                </p>
              </li>
            </ul>
          )}
        </div>

        <div className="max-w-5xl mx-auto font-semibold px-4 mt-4 mb-8">
          <h3
            className="text-md md:text-md font-bold text-left cursor-pointer"
            onClick={() => toggleSection("complianceGovernance")}
          >
            Compliance and Governance
          </h3>
          {openSection === "complianceGovernance" && (
            <ul className="list-disc">
              <li>
                <p className="text-md text-left mt-2 font-normal">
                We comply with all applicable laws, regulations, and international standards related to social responsibility,
including labor rights, environmental protection, and human rights.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                Our social responsibility policies are governed by a dedicated team responsible for oversight, monitoring, and
ensuring compliance across our organization and supply chain.
                </p>
              </li>

              <li>
                <p className="text-md text-left mt-2 font-normal">
                Our Social Responsibility Policy reflects our dedication to making a positive difference in the world and
upholding ethical values.
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
