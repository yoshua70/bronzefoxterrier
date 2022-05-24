type Props = {
  title: string;
  description: string;
  link?: string;
};

const Card = ({ title, description, link }: Props) => {
  return (
    <div className="bg-slate-300 p-3 drop-shadow-sm rounded-sm transition-all duration-200 hover:-translate-y-4 dark:bg-slate-800 dark:text-slate-200">
      <h3 className="font-bold">{title}</h3>
      <p>{description}</p>
      <a
        href={link}
        target="_blank"
        className="underline"
        rel="noopener noreferrer"
      >
        Visit.
      </a>
    </div>
  );
};

export default Card;
