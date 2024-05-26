"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Pravin",
    avatar: "P",
    title: "Engineer - NKOCET",
    description: "This is the best application I've used!",
  },
  {
    name: "Sushrut",
    avatar: "S",
    title: "Engineer - NKOCET",
    description: "I'm amazed by the user-friendly design of this software!",
  },
  {
    name: "Aditya",
    avatar: "A",
    title: "Engineer - NKOCET",
    description:
      "This application has significantly streamlined our data analysis process.",
  },
  {
    name: "Ritesh",
    avatar: "R",
    title: "Engineer - NKOCET",
    description:
      "I highly recommend this tool for anyone looking to boost their marketing campaigns!",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-4">{item.description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
