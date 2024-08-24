import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-md border border-gray-400 px-4 py-16"
      variants={childVariants}
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="w-min rounded-full border border-gray-400 bg-primary-100 p-4">
          {icon}
        </div>
        <h4 className="font-bold">{title}</h4>
        <p>{description}</p>
        <AnchorLink
          className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          <p>Learn more</p>
        </AnchorLink>
      </div>
    </motion.div>
  );
};

export default Benefit;
