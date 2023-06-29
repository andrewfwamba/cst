import React from "react";

function Security() {
  return (
    <div className="py-2 px-4 bg-gray-300">
      <div>
        <h1 className="font-bold text-lg pb-2 border-b border-gray-400">
          Security
        </h1>
        <p>
          We prioritize the security and protection of our systems, data, and
          the confidentiality of our customers' information. This security
          policy outlines the measures we have implemented to ensure the
          integrity and security of our operations.
        </p>
        <div className="p-2 md:p-8">
          <ol className="list-decimal">
            <li className="text-gray-950 font-bold text-lg">
              Information Security
            </li>
            <ul className="list-disc ml-4">
              <li>
                We employ industry-standard security practices to protect
                against unauthorized access, use, disclosure, alteration, or
                destruction of data.
              </li>
              <li>
                Access to sensitive data is limited to authorized personnel who
                require access for legitimate business purposes.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">Data Protection</li>
            <ul className="list-disc ml-4">
              <li>
                We follow data protection laws and regulations applicable to the
                jurisdictions in which we operate.
              </li>
              <li>
                Personally identifiable information (PII) and sensitive data are
                collected, processed, and stored securely, using encryption and
                access controls.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              Employee Security Awareness
            </li>
            <ul className="list-[square] ml-4">
              <li>
                We conduct regular security awareness training programs to
                educate our employees about best practices for data protection,
                secure communication, and handling sensitive information.
              </li>
              <li>
                Employees are required to adhere to our security policies and
                procedures to maintain the confidentiality and integrity of
                data.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              Incident Response
            </li>
            <ul className="list-[square] ml-4">
              <li>
                We have an incident response plan in place to promptly address
                and mitigate security incidents, data breaches, or unauthorized
                access.
              </li>
              <li>
                Security incidents are reported to our designated incident
                response team for investigation, containment, and resolution.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              Physical Security
            </li>
            <ul className="list-disc ml-4">
              <li>
                We implement physical security measures, such as access controls
                and surveillance systems, to protect our facilities, servers,
                and equipment from unauthorized access, theft, or damage.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              System Monitoring and Logging
            </li>
            <ul className="list-disc ml-4">
              <li>
                We employ monitoring tools and log management systems to track
                and analyze system activities, detect and respond to security
                events, and ensure the integrity of our systems.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              Security Assessments
            </li>
            <ul className="list-disc ml-4">
              <li>
                We conduct regular security assessments, including vulnerability
                scanning and penetration testing, to identify and remediate
                potential security weaknesses.
              </li>
              <li>
                Third-party security assessments may be conducted periodically
                to validate the effectiveness of our security controls.
              </li>
            </ul>{" "}
            <li className="text-gray-950 font-bold text-lg">
              Business Continuity and Disaster Recovery
            </li>
            <ul className="list-disc ml-4">
              <li>
                We have implemented measures to ensure business continuity and
                disaster recovery in the event of system failures, natural
                disasters, or other disruptive incidents.
              </li>
              <li>
                Backup and recovery procedures are regularly tested and updated
                to ensure the availability and integrity of data.
              </li>
            </ul>{" "}
            <li className="text-gray-950 font-bold text-lg">Compliance</li>
            <ul className="list-disc ml-4">
              <li>
                We comply with relevant security and privacy laws, regulations,
                and industry standards applicable to our operations.
              </li>
              <li>
                We continuously monitor changes in regulations and update our
                security practices accordingly.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              Policy Review and Updates
            </li>
            <ul className="list-disc ml-4">
              <li>
                This security policy is regularly reviewed, updated, and
                communicated to employees to reflect changes in technology,
                threats, or regulations.
              </li>
              <li>
                Employees are expected to review and adhere to the most recent
                version of the security policy.
              </li>
            </ul>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Security;
