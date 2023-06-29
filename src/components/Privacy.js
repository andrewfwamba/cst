import React from "react";

function Privacy() {
  return (
    <div className="p-6 bg-gray-300">
      <div>
        <h1 className="font-bold text-lg">Privacy Policy</h1>
        <p>
          At Crewsoft Technologies, we are committed to protecting the privacy
          and confidentiality of our customers' and employees' personal
          information. This privacy policy outlines how we collect, use,
          disclose, and protect personal information. By accessing our website
          or using our software products/services, you consent to the practices
          described in this policy.
        </p>
        <div className="p-2 md:p-8">
          <ol className="list-decimal">
            <li className="text-gray-950 font-bold md:text-lg text-sm">
              Information Collection and Use
            </li>
            <ul className="list-[disc] ml-4">
              <li>
                We may collect personal information such as names, contact
                details, and payment information when you engage with our
                services or communicate with us.
              </li>
              <li>
                Personal information is used for the purposes of providing and
                improving our software products/services, responding to
                inquiries, processing payments, and communicating with customers
                about updates, promotions, or other relevant information.
              </li>
              <li>
                We do not sell, rent, or lease personal information to third
                parties unless required by law or with explicit consent.
              </li>
            </ul>
            <li className="text-gray-950 font-bold md:text-lg text-sm">
              Data Retention
            </li>
            <ul className="ml-4 list-disc">
              <li>
                We retain personal information only for as long as necessary to
                fulfill the purposes for which it was collected or as required
                by law.
              </li>
              <li>
                When personal information is no longer needed, we take
                appropriate measures to securely delete or anonymize it.
              </li>
            </ul>
            <li className="text-gray-950 font-bold md:text-lg text-sm">
              Data Security
            </li>
            <ul className="ml-4 list-disc">
              <li>
                We implement industry-standard security measures to protect
                personal information from unauthorized access, disclosure,
                alteration, or destruction.
              </li>
              <li>
                We regularly review and update our security practices to ensure
                the ongoing protection of personal information.
              </li>
            </ul>
            <li className="text-gray-950 font-bold md:text-lg text-sm">
              Cookies and Tracking Technologies
            </li>
            <ul className="ml-4 list-disc">
              <li>
                We may use cookies and similar tracking technologies to enhance
                your experience, analyze website usage, and personalize content
                and advertisements.
              </li>
              <li>
                You can control the use of cookies through your browser
                settings, but please note that disabling cookies may limit the
                functionality of our website or software products/services.
              </li>
            </ul>
            <li className="text-gray-950 font-bold md:text-lg text-sm">
              Third-Party Websites and Services
            </li>
            <ul className="ml-4 list-disc">
              <li>
                Our website or software products/services may contain links to
                third-party websites or services that have their own privacy
                policies.
              </li>
              <li>
                We are not responsible for the privacy practices or content of
                these third-party websites or services. We encourage you to
                review their privacy policies before providing any personal
                information.
              </li>
            </ul>
            <li className="text-gray-950 font-bold md:text-lg text-sm">
              Children's Privacy
            </li>
            <ul className="ml-4 list-disc">
              <li>
                Our software products/services are not intended for use by
                individuals under the age of 16.
              </li>
              <li>
                We do not knowingly collect personal information from
                individuals under 16 years of age. If we become aware of any
                such data, we will take steps to delete it promptly.
              </li>
            </ul>
            <li className="text-gray-950 font-bold md:text-lg text-sm">
              Changes to the Privacy Policy
            </li>
            <ul className="ml-4 list-disc">
              <li>
                We reserve the right to update or modify this privacy policy at
                any time. Any changes will be effective upon posting the updated
                policy on our website.
              </li>
              <li>
                We encourage you to review this policy periodically to stay
                informed about how we collect, use, and protect personal
                information.
              </li>
            </ul>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
