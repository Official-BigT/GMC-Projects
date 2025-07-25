
type CardProps = {
  title: string;
  subtitle?: string;
};

const CardDetails = ({
  title,
  subtitle = `No subtitle was found`,
}: CardProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default CardDetails;
