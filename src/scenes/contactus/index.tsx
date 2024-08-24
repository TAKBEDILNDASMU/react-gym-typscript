import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPage from "@/assets/ContactUsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  return (
    <section id={SelectedPage.ContactUs} className="py-20">
      <motion.div
        className="mx-auto w-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* CONTACT US TITLE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5 md:w-3/5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>

        {/* CONTACT US FORM */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-10 flex flex-col gap-8 md:flex-row"
        >
          <form className="space-y-4">
            <input
              type="text"
              placeholder="NAME"
              className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder:text-white"
            />
            <input
              type="text"
              placeholder="EMAIL"
              className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder:text-white"
            />
            <textarea
              rows={4}
              placeholder="MESSAGE"
              className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder:text-white"
            />

            <button className="mt-10 rounded-lg bg-secondary-400 px-16 py-3 transition duration-200 hover:text-white">
              SUBMIT
            </button>
          </form>

          <div className="before:bottom:0 relative before:absolute before:-bottom-16 before:-right-10 before:z-[-1] md:before:content-evolvetext">
            <div className="md:basis-2/5">
              <img
                className="w-full"
                src={ContactUsPage}
                alt="contact us graphic"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
