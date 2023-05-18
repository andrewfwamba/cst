import React from "react";

function Refund() {
  return (
    <div className="py-2 px-4 bg-gray-300">
      <div className="border-t border-blue-900 my-1"></div>
      <div>
        <h1 className="font-bold text-lg">Refund Policy</h1>
        <p>
          At Crewsoft Technologies, we strive to provide exceptional software
          solutions and customer satisfaction. However, we understand that
          circumstances may arise where a refund is necessary. This refund
          policy outlines the guidelines and procedures for requesting a refund.
        </p>
        <div className="p-2 md:p-8">
          <ol className="list-decimal">
            <li className="text-gray-950 font-bold text-lg">
              Eligibility for Refunds
            </li>
            <ul className="list-disc ml-4">
              <li>Refunds may be considered in the following situations:</li>
              <ul className="list-[square] ml-4">
                <li>
                  Software product/service purchased from Crewsoft Technologies
                  does not function as intended or described.
                </li>
                <li>
                  Significant technical issues or errors occur that prevent the
                  proper use of the software product/service.
                </li>
                <li>
                  Dissatisfaction with the software product/service, provided it
                  is expressed within a reasonable timeframe.
                </li>
              </ul>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              Refund Request Process
            </li>
            <ul className="list-disc ml-4">
              <li>
                To request a refund, please contact our customer support team at{" "}
                <a
                  href="mailto: refund@crewsofttechnologies.co.ke"
                  className="text-blue-700"
                >
                  refund@crewsofttechnologies.co.ke
                </a>{" "}
                and provide the following information:
              </li>
              <ul className="mx-4 md:mx-16 list-[upper-roman]">
                <li>Full name and contact details.</li>
                <li>Order/transaction number.</li>
                <li>
                  Detailed explanation of the issue or reason for the refund
                  request.
                </li>
                <li>
                  Any supporting documentation or evidence, if applicable.
                </li>
              </ul>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              Evaluation and Resolution
            </li>
            <ul className="list-[square] ml-4">
              <li>
                Once we receive your refund request, our customer support team
                will assess the request and may contact you for additional
                information or clarification.
              </li>
              <li>
                We will review the provided details and evaluate the eligibility
                for a refund based on our refund policy criteria.
              </li>
              <li>
                If approved, we will initiate the refund process within 90 days
                to the original payment method used for the purchase.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">Refund Options</li>
            <ul className="list-[square] ml-4">
              <li>
                Refunds will generally be issued in the same form as the
                original payment. However, specific refund options may vary
                based on the circumstances and applicable laws.
              </li>
              <li>
                Please note that any third-party transaction fees or charges
                incurred during the purchase may not be refundable.
              </li>
            </ul>
            <li className="text-gray-950 font-bold text-lg">Exclusions</li>
            <ul className="list-disc ml-4">
              <li>
                The following situations are generally not eligible for refunds:
              </li>
              <ul className="ml-6 list-[square]">
                <li>
                  Changes in your requirements or needs after the purchase.
                </li>
                <li>
                  Incompatibility issues arising from your hardware or software
                  environment that were not specified in the product/service
                  description.
                </li>
                <li>Refund requests made beyond the specified timeframe.</li>
              </ul>
            </ul>
            <li className="text-gray-950 font-bold text-lg">
              Modifications to the Refund Policy
            </li>
            <ul className="list-disc ml-4">
              <li>
                Crewsoft Technologies reserves the right to modify this refund
                policy at any time without prior notice. Any changes will be
                effective immediately upon posting the updated policy on our
                website.
              </li>
            </ul>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Refund;
