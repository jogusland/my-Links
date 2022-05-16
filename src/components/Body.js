const Body = () => {
  const info = [
    {
      name: "Portfolio Website",
      href: "https://jogusland.github.io/myportfolio/",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jogu/",
    },
    {
      name: "Github",
      href: "https://github.com/jogusland",
    },
    {
      name: "Certificate",
      href: "https://www.credential.net/475ed24b-f8ab-4f7e-83d5-709f66e1e9de",
    },
    {
      name: "Web Dev Insta",
      href: "https://www.instagram.com/joni_developer/",
    },
    {
      name: "For Sale",
      href: "https://jogusland.github.io/for-sale/",
    },
    {
      name: "Jogu TV",
      href: "https://www.facebook.com/jogusland",
    },
    {
      name: "Joni Developer",
      href: "https://www.facebook.com/joniDeveloper",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/jogu253",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/joni_ye576/",
    },
    {
      name: "Club House: @jonislg",
      href: "https://www.clubhouse.com/@jonislg?utm_medium=ch_profile&utm_campaign=XM8lUYLB2PQCY6yCM09EmA-192269",
    },
    {
      name: "Opensea",
      href: "https://opensea.io/jonisland",
    },
  ];

  return (
    <main className="container flex">
      {info.map((link) => {
        return (
          <h3>
            <a href={link.href}>{link.name}</a>
          </h3>
        );
      })}
      <h4 className="grey">Video Editing: @windowlightmedia</h4>
    </main>
  );
};

export default Body;
