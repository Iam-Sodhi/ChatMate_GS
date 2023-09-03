"use client";
import { sendEmail } from "@/actions/sendEmail";
import Navbar from "@/components/Navbar";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { toast } from "react-hot-toast";
import {motion} from "framer-motion"
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const { pending } = useFormStatus();
  return (<section id="contact" className="bg-peachpuff">
        <Navbar ContactPage />
    <motion.div  className="bg-peachpuff px-[30px] pb-[30px] sm:px-[90px] sm:pb-[60px] md:py-[140px] md:pb-[60px]    h-screen"
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}>
      {" "}
      <div className="mb-20 sm:mb-28  mx-auto self-center my-auto  top-[30%] w-[min(100%,38rem)] text-center">
        <h1 className="py-3 mb-2 text-[25px] sm:text-[35px] font-normal font-poppins ">Contact Me</h1>
        <p className="mx-auto max-w-[690px] mb-2 text-center text-gray-200 text-[16px] font-poppins">
          Please contact us directly at{" "}
          <a className="underline" href="mailto:gautamsodhi111@gmail.com">
            chatmate@gmail.com
          </a>{" "}
          or through this form.
        </p>
        <form
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success("Email sent successfully!");
          }}
          className="mt-10 flex flex-col dark:text-black"
        >
          {/* to use function in action you also need to modify next.congig.js file */}
          <input
            className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your Email"
          />
          <textarea
            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Your Message"
            maxLength={5000}
            required
          />
          <button
            className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-secondary3 hover:bg-secondary1  text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110  active:scale-105  disabled:scale-100 disabled:bg-opacity-60
    dark:bg-white dark:bg-opacity-10"
            type="submit"
            disabled={pending} //disabled when pending is true
          >
            {pending ? (
              <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
              <>
                {" "}
                Submit
                <FaPaperPlane className="text-xs opacity-70 transition-all group-hover: translate-x-1 group-hover:translate-y-1 " />
              </>
            )}
          </button>
        </form>
      </div>
    </motion.div>
  </section>
  );
}
