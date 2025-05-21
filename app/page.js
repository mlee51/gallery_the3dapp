"use client";
import { useState } from "react";

const tourData = [
  {
    url: "https://embed.the3dapp.com/?mode=walk&tour_id=yXDzVoyUHY3ZEBVRCVVB&floor=1&pano=gJBTHsT18aJHeR16epvx&yaw=1.44",
    thumb: "/one.jpg",
  },
  {
    url: "https://embed.the3dapp.com/?mode=walk&tour_id=ddv6uYFT33Ds7fz41Gqc&floor=1&pano=dBQvbeDiOePnutKIhfEV&yaw=1.03",
    thumb: "/two.jpg",
  },
  {
    url: "https://embed.the3dapp.com/?mode=walk&tour_id=HsPny2fv94rpH4IPJNtW&floor=1&pano=E1z2EQskQsd7wObeLcGu&yaw=-1.26",
    thumb: "/three.jpg",
  },
  {
    url: "https://embed.the3dapp.com/?mode=walk&tour_id=4B70P5SPXsA86fnTup3a&floor=1&pano=oGY5I1eq1n2kptujjmvt&yaw=0.51",
    thumb: "/four.jpg",
  },
  {
    url: "https://embed.the3dapp.com/?mode=walk&tour_id=p9DOOLlmGjdtHx66OOrp&floor=1&pano=JNCkGO0NSsyBukW0JZ5y&yaw=-2.93",
    thumb: "/five.jpg",
  },
  {
    url: "https://embed.the3dapp.com/?mode=walk&tour_id=tFlbLeTYEBUISWcCjFdi&floor=1&pano=N3z30wLJbso7xKBlGHmY&yaw=-0.98",
    thumb: "/six.jpg",
  },
  {
    url: "https://embed.the3dapp.com/?mode=walk&tour_id=FBhnHToAnAuLZrZoL8oE&floor=1&pano=FKhbP10UfS2q7CslvF1n&yaw=-0.15",
    thumb: "/seven.jpg",
  },
  {
    url: "https://embed.the3dapp.com/?mode=walk&tour_id=dO9j0MIZOS7bcTsNPrVy&floor=1&pano=I3R0OMTMVXI3GLCdeLsl&yaw=1.18",
    thumb: "/eight.jpg",
  },
  {
    url: "https://embed.the3dapp.com/?mode=walk&tour_id=fWWou2IgeM5eXrCOAJkQ&floor=1&pano=ErkD0CzvK2uA3E9tGnqM&yaw=1.21",
    thumb: "/nine.jpg",
  },
  {
    url: "https://embed.the3dapp.com/?mode=walk&tour_id=sxooXQJIBbjJnF3wFQPd&floor=1&pano=tRAJ2yM1WLWMJXfr25VB&yaw=-2.54",
    thumb: "/ten.jpg",
  },
  {
    url: "https://embed.the3dapp.com/?mode=walk&tour_id=uTwWtfm4o4ZRxlZ8QV9x&floor=1&pano=D3REUunEWhOB6uOp9pya&yaw=3.09",
    thumb: "/eleven.jpg",
  },
  {
    url: "https://embed.the3dapp.com/?mode=walk&tour_id=xe9z0WjtoQlBJT1fcqlN&floor=1&pano=hEKwhk4tqaAZMOxoOaMP&yaw=0.16",
    thumb: "/twelve.jpg",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <main className="min-h-screen flex flex-col items-center gap-12 py-16 bg-black">
      {tourData.map((tour, index) => (
        <LazyIframe
          key={index}
          url={tour.url}
          thumb={tour.thumb}
          index={index}
          isActive={activeIndex === index}
          onActivate={() => setActiveIndex(index)}
          onDeactivate={() => setActiveIndex(null)}
        />
      ))}
    </main>
  );
}

function LazyIframe({ url, thumb, index, isActive, onActivate, onDeactivate }) {
  return (
    <div className="w-full px-4 md:px-0">
      <div className="relative w-full aspect-[9/16] md:aspect-video md:w-[960px] md:h-[540px] rounded-xl overflow-hidden shadow-2xl border border-gray-800 mx-auto">
        {/* Preview */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isActive ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
          }`}
          style={{
            backgroundImage: `url('${thumb}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button
            onClick={onActivate}
            className="group absolute inset-0 z-10 flex items-center justify-center transition"
          >
            <div className="blur-text text-4xl sm:text-5xl font-bold opacity-100 md:opacity-10 md:group-hover:opacity-100 md:group-hover:brightness-125 transition duration-300">
              View
            </div>
          </button>
        </div>

        {/* Iframe */}
        {isActive && (
  <div className="absolute inset-0 z-20">
    <iframe
      src={url}
      title={`3D Tour ${index + 1}`}
      allowFullScreen
      className="w-full h-full border-0"
    ></iframe>

    <button
      onClick={onDeactivate}
      className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded hover:bg-black/80"
    >
      Close
    </button>
  </div>
)}

      </div>
    </div>
  );
}

