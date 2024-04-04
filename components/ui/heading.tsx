import { FC } from "react";

interface HeadingProps {
  title: string;
  description?: string;
}

export const Heading: FC<HeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      {description && <p className="text-gray-400">{description}</p>}
    </div>
  );
};
