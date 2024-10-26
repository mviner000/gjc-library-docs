import Image from "next/image";

export const allAuthors = {
  melvinnogoy: {
    firstName: "Melvin",
    name: "Melvin Nogoy",
    image: "/images/people/nogoy.jpg",
    twitter: "null",
  },
  jonnesternon: {
    firstName: "Jonn",
    name: "Jonn Esternon",
    image: "/images/people/esternon.jpg",
    twitter: "null",
  },
  stephaniecruz: {
    firstName: "Stephanie",
    name: "Stephanie Cruz",
    image: "/images/people/cruz.jpg",
    twitter: "null",
  },
  rainiermaglaque: {
    firstName: "Rainier",
    name: "Rainier Maglaque",
    image: "/images/people/maglaque.jpg",
    twitter: "null",
  },
  mackrafanan: {
    firstName: "Mack",
    name: "Mack Rafanan",
    image: "/images/people/mackrafanan.jpg",
    twitter: "null",
  },
  maverickrosales: {
    firstName: "Maverick",
    name: "Maverick Rosales",
    image: "/images/people/rosales.jpg",
    twitter: "null",
  },
  emmanuelsulit: {
    firstName: "Emmanuel",
    name: "Emannuel Sulit",
    image: "/images/people/sulit.jpg",
  },
} as const;

export const Authors = (props: { authors: (keyof typeof allAuthors)[] }) => {
  const authors = props.authors.filter((author) => author in allAuthors);

  if (authors.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-5 sm:gap-10 justify-center py-7">
      {authors.map((author) => (
        <Author author={author} key={author} />
      ))}
    </div>
  );
};

export const Author = (props: { author: string }) => {
  const author =
    allAuthors[props.author] ??
    Object.values(allAuthors).find(
      (author) => author.firstName === props.author
    );

  if (!author) return null;

  return (
    <a
      href={author.twitter ? `https://twitter.com/${author.twitter}` : "#"}
      className="group shrink-0"
      target="_blank"
      key={props.author}
      rel="noopener noreferrer"
    >
      <div className="flex items-center gap-4" key={author.name}>
        <Image
          src={author.image}
          width={40}
          height={40}
          className="rounded-full"
          alt={`Picture ${author.name}`}
        />
        <span className="text-primary/60 group-hover:text-primary whitespace-nowrap">
          {author.name}
        </span>
      </div>
    </a>
  );
};
