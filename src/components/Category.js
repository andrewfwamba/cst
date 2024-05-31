import Projectslides from "../utilities/Projectslides";

const callouts = [
  {
    name: "Enterprise management",
    description: "Get fluid management for your businesses",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "/",
  },
  {
    name: "Custom softwares",
    description: "Get custom softwares for your specific business needs",
    imageSrc:
      "https://unsplash.com/photos/XJXWbfSo2f0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHx8fDE2ODY5OTU4ODd8MA&force=true&w=1920",
    imageAlt: "Desktop display with code editor open",
    href: "#",
  },
  {
    name: "Mobile Apps",
    description: "Get Mobile fast mobile apps both custom and proprietary",
    imageSrc:
      "https://unsplash.com/photos/w33-zg-dNL4/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg3MDAwNzM4fA&force=true&w=1920",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Shule Soft",
    description: "School management  system coming soon",
    imageSrc:
      " https://unsplash.com/photos/89xuP-XmyrA/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjg3MDAzNDgyfA&force=true&w=1920",
    imageAlt: "mobile app code editor illustration.",
    href: "#",
  },
];

export default function Category() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-4 sm:py-6 lg:max-w-none lg:py-8">
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover transition hover:scale-110 duration-300 ease-in-out object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Projectslides projectImages={[]} type={""} />
    </div>
  );
}
