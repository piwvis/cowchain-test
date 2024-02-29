import React from "react";
import photo1 from "@/assets/homepage/team/mykhailo.jpg";
import photo2 from "@/assets/homepage/team/vyacheslav.jpg";
import photo3 from "@/assets/homepage/team/oleh.jpg";
import photo4 from "@/assets/homepage/team/andrii.jpg";
import photo5 from "@/assets/homepage/team/bohdan.jpg";
import photo6 from "@/assets/homepage/team/veronika.jpg";
import photo7 from "@/assets/homepage/team/ruslan.jpg";
import photo8 from "@/assets/homepage/team/saminu.jpg";
import photo9 from "@/assets/homepage/team/alexandr.jpg";
import linkedin from "@/assets/homepage/linkedin.svg";

const teamData = [
  {
    name: "Michael",
    role: "Founder & CEO",
    photo: photo1,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/onchainmichael"
    }
  },
  {
    name: "Viacheslav",
    role: "COO",
    photo: photo2,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/%D0%B2%D1%8F%D1%87%D0%B5%D1%81%D0%BB%D0%B0%D0%B2-%D0%B8%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-549988195"
    }
  },
  {
    name: "Oleh",
    role: "Development lead",
    photo: photo3,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/oleh-shutiak-%F0%9F%87%BA%F0%9F%87%A6-92786b229"
    }
  },

  {
    name: "Veronika",
    role: "Marketing manager",
    photo: photo6,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/veronika-volkonovska-12318b250/"
    }
  },

  {
    name: "Bohdan",
    role: "Full-stack Web3 developer",
    photo: photo5,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/bohdan-solomakha-750a14240/"
    }
  },

  {
    name: "Andrii",
    role: "Full-stack Web3 developer",
    photo: photo4,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D0%B5%D0%B9-%D0%B3%D1%80%D0%BE%D0%BC%D0%B0%D0%B4%D0%B5%D1%86%D0%BA%D0%B8%D0%B9-1b26231b8"
    }
  },
  {
    name: "Alexander",
    role: "Project Manager",
    photo: photo9,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/alexander-barabash-9a76aa217/"
    }
  },

  {
    name: "Saminu",
    role: "Full-stack Web3 developer",
    photo: photo8,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/smailafiiia/"
    }
  },
  {
    name: "Ruslan",
    role: "Lead Generation manager",
    photo: photo7,
    social: {
      network: "LinkedIn",
      icon: linkedin,
      url: "https://www.linkedin.com/in/ruslan-siniaiev-600340240/"
    }
  }
];

const TeamCard = ({ name, role, photo, social }) => {
  return (
    <div className="relative flex flex-col justify-start gap-y-9  xl:max-w-[400px] xl:px-4">
      <div
        className="flex h-full min-h-[187px]  bg-cover bg-center bg-no-repeat xl:min-h-[459px] xl:w-[400px]"
        style={{ backgroundImage: `url(${photo.src})` }}
      />
      <div>
        <h2 className="text-sm">{name}</h2>
        <p className="caption  uppercase">{role}</p>
      </div>
    </div>
  );
};

const TeamGallery = () => {
  return (
    <section
      id="team"
      className="relative flex flex-col items-center justify-center border-b border-t border-b-th-fade border-t-th-fade px-6 pb-28 pt-[115px]"
    >
      <h3 className="mb-20 uppercase">Meet the team</h3>
      <div className="grid grid-cols-2 gap-x-2 gap-y-6 bg-black   md:grid-cols-3 lg:col-span-3 xl:gap-x-5 xl:gap-y-20">
        {teamData.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default TeamGallery;
