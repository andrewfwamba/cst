import React from "react";

function Terms() {
  return (
    <div className="p-6 bg-gray-300">
      <div className="border-t border-blue-900 my-1"></div>
      <div>
        <h1 className="font-bold text-lg">Terms of Service</h1>
        <p>
          Welcome to Crewsoft Technologies! These terms of service ("Terms")
          govern your access to and use of our software products and services
          ("Services"). By accessing or using our Services, you agree to be
          bound by these Terms. If you do not agree to these Terms, please
          refrain from using our Services.
        </p>
        <div className="p-2 md:p-8">
          <ol className="list-decimal">
            <li className="text-gray-950 font-bold text-lg">
              License and Use of Services
            </li>
            <ul className="list-disc ml-4">
              <li>
                Crewsoft Technologies grants you a non-exclusive,
                non-transferable license to access and use the Services in
                accordance with these Terms.
              </li>
              <li>You agree not to:</li>
              <ul className="list-[square] ml-4">
                <li>
                  Use the Services for any unlawful or unauthorized purpose.
                </li>
                <li>
                  Modify, adapt, translate, or reverse engineer any part of the
                  Services.
                </li>
                <li>
                  Interfere with or disrupt the functionality of the Services or
                  the servers hosting them.
                </li>
                <li>
                  Violate any applicable laws, regulations, or third-party
                  rights.
                </li>
              </ul>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              Intellectual Property Rights
            </li>
            <ul className="list-disc ml-4">
              <li>
                The Services and all associated intellectual property rights are
                owned by Crewsoft Technologies.
              </li>
              <li>
                You retain ownership of any data or content you submit or upload
                to the Services. By doing so, you grant Crewsoft Technologies a
                worldwide, royalty-free license to use, reproduce, modify,
                adapt, publish, and display such content solely for the purpose
                of providing the Services.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              Payments and Subscriptions
            </li>
            <ul className="list-[square] ml-4">
              <li>
                Certain Services may require payment, and you agree to pay all
                applicable fees and charges.
              </li>
              <li>
                Payment terms and subscription details are provided on our
                website or as otherwise communicated to you.
              </li>
              <li>
                Subscription plans may auto-renew unless you cancel prior to the
                renewal date.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              Disclaimer of Warranties
            </li>
            <ul className="list-[square] ml-4">
              <li>
                The Services are provided on an "as is" and "as available" basis
                without warranties of any kind, whether express, implied, or
                statutory.
              </li>
              <li>
                Crewsoft Technologies does not warrant that the Services will be
                uninterrupted, error-free, or secure, or that any defects or
                errors will be corrected.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              Limitation of Liability
            </li>
            <ul className="list-disc ml-4">
              <li>
                Crewsoft Technologies shall not be liable for any indirect,
                incidental, consequential, or punitive damages arising out of or
                related to the use or inability to use the Services.
              </li>
              <li>
                In no event shall the total liability of Crewsoft Technologies
                exceed the amount you paid, if any, for accessing or using the
                Services during the six months preceding the claim.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">Indemnification</li>
            <ul className="list-disc ml-4">
              <li>
                You agree to indemnify and hold Crewsoft Technologies and its
                affiliates, officers, directors, employees, and agents harmless
                from any claims, liabilities, damages, losses, or expenses
                arising out of or related to your use of the Services, violation
                of these Terms, or infringement of any third-party rights.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">Termination</li>
            <ul className="list-disc ml-4">
              <li>
                Crewsoft Technologies may terminate or suspend your access to
                the Services at any time for any reason without notice or
                liability.
              </li>
              <li>
                Upon termination, your right to access and use the Services will
                immediately cease.
              </li>
            </ul>{" "}
            <li className="text-gray-950 font-bold text-lg">
              Governing Law and Dispute Resolution
            </li>
            <ul className="list-disc ml-4">
              <li>
                These Terms shall be governed by and construed in accordance
                with the laws of [Jurisdiction].
              </li>
              <li>
                Any disputes arising out of or in connection with these Terms
                shall be resolved through negotiation, and if unsuccessful,
                through binding arbitration in accordance with the rules of
                [Arbitration Provider].
              </li>
            </ul>{" "}
            <li className="text-gray-950 font-bold text-lg">General</li>
            <ul className="list-disc ml-4">
              <li>
                These Terms constitute the entire agreement between you and
                Crewsoft Technologies regarding the Services and supersede any
                prior agreements or understandings.
              </li>
              <li>
                If any provision of these Terms is found to be invalid or
                unenforceable, the remaining provisions shall continue to be
                valid and enforceable.
              </li>
              <li>
                Crewsoft Technologies' failure to enforce any right or provision
                of these Terms shall not be deemed a waiver of such right or
                provision.
              </li>
            </ul>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Terms;
