import React, { useRef, useState } from "react";
import { RiMailFill } from "react-icons/ri";
import emailjs from "emailjs-com";
import Turnstile from "react-turnstile";
import AddressCard from "./AddressCard";
import Button from "./Button";
import styles from "./ContactSection.module.css";

export type ContactSectionType = {
  className?: string;
};

const ContactSection: React.FC<ContactSectionType> = ({
  className = "",
}) => {
  const form = useRef<HTMLFormElement>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [resetKey, setResetKey] = useState(0);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      alert("Please verify you are human!");
      return;
    }

    emailjs
      .sendForm(
        "service_2mzn6as",    // Your EmailJS service ID
        "template_8o4uq9r",   // Your EmailJS template ID
        form.current!,
        "IWfuOGj5JdGc6sXjy"        // Replace this with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current?.reset(); // Clear the form
          setTurnstileToken(null);
          setResetKey(prev => prev + 1); // Force Turnstile component to remount/reset
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <div className={[styles.contactWrapper, className].join(" ")}>
      <div className={styles.contact}>
        <div className={styles.letsDiscussYourProject}>
          <div className={styles.discussionPrompt}>
            <h1 className={styles.letsDiscussYour}>
              Let’s discuss your Project
            </h1>
            <div className={styles.wouldYouLike}>
              Would you like to do a project with me? Contact me
            </div>
          </div>
          <div className={styles.adressCard}>
            <AddressCard
              propBackgroundColor="unset"
              address="My Email:"
              propMinWidth="66px"
              newMexico31134="lasithnawanjana123@gmail.com"
              propDisplay="unset"
              propMinWidth1="unset"
            />
            <AddressCard
              address="Call Me Now:"
              newMexico31134="+94-750480525"
            />
          </div>
          <div className={styles.socialMedia}>
            <a href="mailto:lasithnawanjana123@gmail.com" target="_blank" rel="noopener noreferrer">
              <RiMailFill
                className={styles.image15Icon}
                style={{ color: "var(--primary-500)", width: "32px", height: "32px" }}
              />
            </a>
            <a href="https://web.facebook.com/people/Lasith-Haputhanthri/pfbid02uBjtG1JRgk59SFYwnEUXwyYvz1ZBt7fgFXmadJZVbQpPFEZzUmFHwSurrssL9Pffl/" target="_blank" rel="noopener noreferrer">
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialIcon}
                  loading="lazy"
                  alt=""
                  src={`${import.meta.env.BASE_URL}social.svg`}
                />
              </div>
            </a>
            <a href="https://www.instagram.com/lasithhaputhanthri/?igsh=MWd4YTVsdjNvY3U3OA%3D%3D" target="_blank" rel="noopener noreferrer">
              <div className={styles.socialMediaCard1}>
                <img className={styles.socialIcon1} alt="" src={`${import.meta.env.BASE_URL}social-1.svg`} />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/lasith-haputhanthri-b2919a265/" target="_blank" rel="noopener noreferrer">
              <div className={styles.socialMediaCard1}>
                <img className={styles.socialIcon1} alt="" src={`${import.meta.env.BASE_URL}social-2.svg`} />
              </div>
            </a>
            <a href="https://github.com/lasithhaputhanthri" target="_blank" rel="noopener noreferrer">
              <img
                className={styles.image17Icon}
                loading="lazy"
                alt=""
                src={`${import.meta.env.BASE_URL}image-17@2x.png`}
              />
            </a>
          </div>
        </div>
        <div className={styles.userInfromation}>
          <form ref={form} onSubmit={sendEmail} className={styles.userInformation}>
            <div className={styles.information}>
              <div className={styles.name}>
                <input
                  className={styles.name1}
                  placeholder="Name*"
                  name="user_name"
                  type="text"
                />
                <div className={styles.nameChild} />
              </div>
              <div className={styles.name}>
                <input
                  className={styles.name1}
                  placeholder="Email*"
                  name="user_email"
                  type="text"
                />
                <div className={styles.emailChild} />
              </div>
              <div className={styles.name}>
                <input
                  className={styles.name1}
                  placeholder="Location*"
                  name="user_location"
                  type="text"
                />
                <div className={styles.emailChild} />
              </div>
              <div className={styles.name}>
                <input
                  className={styles.name1}
                  placeholder="Subject*"
                  name="subject"
                  type="text"
                />
                <div className={styles.emailChild} />

              </div>
              <div className={styles.message}>
                <input
                  className={styles.name1}
                  placeholder="Message*"
                  name="message"
                  type="text"
                />
                <div className={styles.emailChild} />
              </div>
              <div className={styles.name}>
                <Turnstile
                  key={resetKey}
                  sitekey="1x00000000000000000000AA" // Test Site Key
                  onVerify={(token) => setTurnstileToken(token)}
                />
              </div>
            </div>
            <Button letsWorkTogether="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
