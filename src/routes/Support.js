import React, { useState } from "react";
import Accordion from "../components/Accordion";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Location from "../components/Location";

function Support() {
  const [email, setEmail] = useState("");
  const validate = () => {
    const Regexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return Regexp.test(email);
  };
  const failed = () => {
    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const alert = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will send Weekly news to your email!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "gray",
      customClass: {
        container: "swal-width",
        title: "swal-text",
      },
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, it's okay!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Great!",
          html: "Your will receive weekly newsletters from us. You may unsubscrbe anytime",
          icon: "",
        });
      }
    });
  };
  const failedAlert = () => {
    Swal.fire({
      icon: "",
      title: "Oops...",
      html: "Something went wrong",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  };
  const invalidAlert = () => {
    Swal.fire({
      title: "Error",
      text: "Input valid email address",
      icon: "warning",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    });
  };

  const submit = (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        console.log(email);
        function charFrequency(str) {
          const freq = {};
          str.split("").forEach((char) => {
            freq[char] = (freq[char] || 0) + 1;
          });
          return freq;
        }
        console.log(charFrequency("I am awesome"));
        alert();
      } catch (error) {
        console.log(error.message);
        failedAlert();
      }
    } else {
      console.log("please input a valid email address");
      // invalidAlert();
      failed();
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="animate__animated animate__fadeInDown grid lg:grid-cols-2 bg-gray-200">
        <div className="w-full  py-8 text-center lg:pt-[10rem]">
          <h6 className="text-red-400 font-medium">CONTACT NOW</h6>
          <h3 className="text-blue-800 text-xl font-bold">
            Have a Question? Talk to Us
          </h3>
          <p className="text-base px-8 text-gray-600 font-medium">
            We will get back to you as early as we receive the message
          </p>
        </div>
        <div className="w-full">
          {/* phone contact */}
          <div className="bg-gray-200 py-4 px-8 m-4 rounded shadow-lg hover:ring-1">
            <h4 className="text-gray-700 text-lg font-bold text-start py-[auto]">
              {" "}
              Phone:
            </h4>
            <h6 className="text-gray-800 text-base font-light py-4">
              Availability hours: Monday - Friday, 9am to 5pm
            </h6>
            <p itemprop="telephone" className="font-bold text-lg text-gray-700">
              <a href="tel:+254 722 753364">(+254) 722 753364</a>
            </p>
          </div>
          {/* email contact */}
          <div className="bg-gray-200 py-4 px-8 m-4 rounded shadow-lg hover:ring-1">
            <h4 className="text-gray-700 text-lg font-bold text-start py-3">
              {" "}
              Email:
            </h4>
            <h6 className="text-gray-800 text-base font-light py-4">
              Our support team will get back to you within 24hours on standard
              business hours.
            </h6>
            <p itemprop="email" className="font-bold text-lg text-gray-700">
              <a href="mailto: info@example.com"> Send us an email</a>
            </p>
          </div>
        </div>
      </div>

      {/* Location */}
      <Location />

      {/* Email insights */}
      <div className="animate__animated animate__backInUp relative isolate overflow-hidden bg-gray-800 pb-2 sm:py-4 lg:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl mx-auto lg:max-w-lg">
              <h2 className="text-base lg:text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Get New Insights Weekly
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Subscribe to our newsletter. Enter your email
              </p>
              <div className="mt-6 flex flex-col space-y-6 max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="min-w-fit flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  onClick={submit}
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">
                  Weekly articles
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non
                  irure cupidatat duis commodo amet.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">No spam</dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Officia excepteur ullamco ut sint duis proident non
                  adipisicing. Voluptate incididunt anim.
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <svg
          className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
          viewBox="0 0 1155 678"
          fill="none"
        >
          <path
            fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Accordion />
      <Contactus />
      <Footer />
    </>
  );
}

export default Support;
