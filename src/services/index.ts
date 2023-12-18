// place utils here

import { Work } from "../types";

/** Simulate load all featured  works  */
const getFeaturedWorks = async (): Promise<Work[]> => {
  
    /* const res = await fetch(`https://headlessserver-or-this.com/works`)
    const works = await res.json()
    if (!works) {
        return []
    }
    const featuredWorks = [works[1], works[2], works[4]]; */
  const works: Work[] = [
    {
      id: "studiofix",
      title: "Studiofix",
      description: "A portfolio web page template (Digital Product).",
      category: "Front-end, UI Design",
      img: "/studiofix.jpg",
      url: "http://demo.cutekit.net/studiofix/demo.html",
      style: {
        backgroundColor: '#c9e9e4',
        color: 'currentColor',
      },
    },
    {
      id: "cutekit-pages",
      title: "Cutekit",
      description: "A website that I manage to showcase and sell some digital products that I made.",
      category: "Front-end, UI Kit, WordPress",
      img: "/cutekit-pages.jpg",
      url: "http://cutekit.net",
      style: {
        backgroundColor: '#fecc87',
        color: 'currentColor',
      },
    },
    {
      id: "hr-app",
      title: "Fiasako",
      description: "A SaaS solution for human ressource management (Work in progress).",
      category: "SaaS, Web App, Fullstack",
      img: "/hr-app.jpg",
      // url: "an-url",
      style: {
        backgroundColor: '#7268db',
        color: '#ffffff',
      },
    },
    {
      id: "simpleux",
      title: "Simpleux pages",
      description: "A set of ready to use portfolio web pages (Digital Product).",
      category: "Front-end, UI Design",
      img: "/simpleux.jpg",
      url: "http://demo.highhay.com/simpleux-2/demo.html",
      style: {
        backgroundColor: '#c67498',
        color: '#ffffff',
      },
    },
  ];
  return works;
};
 

export { getFeaturedWorks };
