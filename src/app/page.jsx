"use client";
import { ChevronsRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <TabsTable />
    </div>
  );
}
const TabsTable = () => {
  return (
    <div className="w-254.25 p-10 flex justify-center shadow-xl gap-10">
      <NavigationButtons />
      <JobInfo tabsData={tabsData} />
    </div>
  );
};

const NavigationButtons = () => {
  const [currentItem, setCurrentItem] = useState(tabsData);

  return (
    <div className="w-50 flex justify-start flex-col gap-6 font-medium">
      <div className="flex gap-12">
        <div className="text-teal-500 text-2xl "> |</div>
        <button className="text-shadow-gray-800 text-[13.3px] hover:text-teal-500 hover:ease-in-out cursor-pointer ">
          TOMMY
        </button>
      </div>
      <div className="flex gap-12">
        <div className="text-teal-500 text-2xl "> |</div>
        <button className="text-shadow-gray-800 text-[13.3px] hover:text-teal-500 hover:ease-in-out cursor-pointer ">
          BIGDROP
        </button>
      </div>
      <div className="flex gap-12">
        <div className="text-teal-500 text-2xl "> |</div>
        <button className="text-shadow-gray-800 text-[13.3px] hover:text-teal-500 hover:ease-in-out cursor-pointer ">
          CUKER
        </button>
      </div>
    </div>
  );
};

const JobInfo = ({ tabsData }) => {
  const { id, button, role, date, description1, description2, description3 } =
    tabsData;
  return (
    <div key={id}>
      <div className="flex flex-col gap-3">
        <h3 className="text-[#0f172a] text-[31.24px]">{role}</h3>
        <button className="bg-gray-300 text-4 py-1.5 px-3 rounded-sm font-medium w-fit">
          {button}
        </button>
        <p className="text-[#64748b] text-4">{date}</p>
      </div>

      <div className="text-[#334155] text-4 mt-8 gap-8 flex flex-col">
        <div className="flex gap-5 items-center ">
          <ChevronsRight />

          <p className="w-175.25 leading-normal">{description1}</p>
        </div>
        <div className="flex gap-5 items-center ">
          <ChevronsRight />

          <p className="w-175.25 leading-normal">{description2}</p>
        </div>
        <div className="flex gap-5 items-center ">
          <ChevronsRight />

          <p className="w-175.25 leading-normal">{description3}</p>
        </div>
      </div>
    </div>
  );
};

const tabsData = [
  {
    id: 1,
    button: "TOMMY",
    role: "Full Stack Web Developer",
    date: "December 2015 - Present",
    description1:
      "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.",
    description2:
      "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.",
    description3:
      "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.",
  },
  {
    id: 2,
    button: "BIGDROP",
    role: "Front-End Engineer",
    date: "May 2015 - December 2015",
    description1:
      "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid",
    description2:
      "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
    description3:
      "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
  },

  {
    id: 3,
    button: "CUKER",
    role: "Engineering Intern",
    date: "May 2014 - September 2015",
    description1:
      "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
    description2:
      "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
    description3:
      "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.",
  },
];
