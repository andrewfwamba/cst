import React from "react";

function Conduct() {
  return (
    <div className="py-2 px-4 bg-gray-300">
      <div>
        <h1 className="font-bold text-lg pb-2 border-b border-gray-400">
          Code of Conduct
        </h1>
        <p>
          Crewsoft Technologies is committed to maintaining a respectful,
          inclusive, and professional work environment for all employees,
          contractors, clients, and partners. Our code of conduct sets forth the
          standards of behavior we expect from everyone associated with our
          company.
        </p>
        <div className="p-2 md:p-8">
          <ol className="list-decimal">
            <li className="text-gray-950 font-bold text-lg">
              Respectful and Inclusive Environment
            </li>
            <ul className="list-disc ml-4">
              <li>
                We treat each other with respect, dignity, and fairness,
                regardless of race, ethnicity, gender, sexual orientation, age,
                religion, or any other characteristic.
              </li>
              <li>
                We foster an inclusive environment that values diverse
                perspectives, promotes teamwork, and discourages discrimination,
                harassment, or any form of offensive behavior.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">Professionalism</li>
            <ul className="list-disc ml-4">
              <li>
                We conduct ourselves professionally in all interactions, both
                internally and externally, upholding the reputation and
                integrity of Crewsoft Technologies.
              </li>
              <li>
                We maintain a positive attitude, exercise good judgment, and
                communicate effectively and respectfully.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              Ethics and Integrity
            </li>
            <ul className="list-[square] ml-4">
              <li>
                We adhere to the highest ethical standards, conducting business
                honestly, transparently, and in compliance with applicable laws
                and regulations.
              </li>
              <li>
                We avoid conflicts of interest and act in the best interests of
                our clients, stakeholders, and the company.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              Confidentiality and Data Protection
            </li>
            <ul className="list-[square] ml-4">
              <li>
                We respect the confidentiality of proprietary, sensitive, and
                personal information entrusted to us by our clients, employees,
                and partners.
              </li>
              <li>
                We follow data protection policies and procedures to ensure the
                privacy and security of confidential information.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              Intellectual Property
            </li>
            <ul className="list-disc ml-4">
              <li>
                We respect the intellectual property rights of others and
                protect the intellectual property developed by Crewsoft
                Technologies.
              </li>
              <li>
                We do not engage in unauthorized use, reproduction, or
                distribution of copyrighted materials or proprietary
                information.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              Safety and Security
            </li>
            <ul className="list-disc ml-4">
              <li>
                We prioritize the safety and security of our employees, clients,
                and stakeholders, both physically and digitally.
              </li>
              <li>
                We comply with safety regulations, report any potential hazards
                or security concerns promptly, and protect our systems from
                unauthorized access.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              Conflict Resolution
            </li>
            <ul className="list-disc ml-4">
              <li>
                We strive to resolve conflicts and disagreements through open
                and constructive dialogue, seeking solutions that are fair and
                mutually beneficial.
              </li>
              <li>
                We report any concerns or violations of the code of conduct to
                the appropriate channels within the company.
              </li>
            </ul>{" "}
            <li className="text-gray-950 font-bold text-lg">Compliance</li>
            <ul className="list-disc ml-4">
              <li>
                We comply with all applicable laws, regulations, and company
                policies.
              </li>
              <li>
                We stay informed about changes in laws and regulations that
                affect our work and promptly address any non-compliance.
              </li>
            </ul>{" "}
            <li className="text-gray-950 font-bold text-lg">
              Reporting and Accountability
            </li>
            <ul className="list-disc ml-4">
              <li>
                We encourage individuals to report any violations or concerns
                related to the code of conduct without fear of retaliation.
              </li>
              <li>
                Violations of the code of conduct may result in disciplinary
                action, up to and including termination of employment or
                contractual relationship.
              </li>
            </ul>
            <p className="px-1 ml-2 md:ml-4 mt-4 italic text-gray-900 font-bold text-xs md:text-sm lg:px-6 border-l-4 border-gray-800">
              This code of conduct applies to all employees, contractors,
              clients, and partners associated with Crewsoft Technologies. By
              being part of our company, we commit to upholding these standards
              of behavior and creating a positive work environment for everyone.
            </p>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Conduct;
