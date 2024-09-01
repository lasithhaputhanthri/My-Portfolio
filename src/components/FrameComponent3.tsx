import { FunctionComponent } from "react";
import AddressCard from "./AddressCard";
import Button from "./Button";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
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
              newMexico31134="+94-711307741"
            />
          </div>
          <div className={styles.socialMedia}>
            <img
              className={styles.image15Icon}
              loading="lazy"
              alt=""
              src="/image-15@2x.png"
            />
            <div className={styles.socialMediaCard}>
              <img
                className={styles.socialIcon}
                loading="lazy"
                alt=""
                src="/social.svg"
              />
            </div>
            <div className={styles.socialMediaCard1}>
              <img className={styles.socialIcon1} alt="" src="/social-1.svg" />
            </div>
            <div className={styles.socialMediaCard1}>
              <img className={styles.socialIcon1} alt="" src="/social-2.svg" />
            </div>
            <img
              className={styles.image17Icon}
              loading="lazy"
              alt=""
              src="/image-17@2x.png"
            />
          </div>
        </div>
        <div className={styles.userInfromation}>
          <form className={styles.userInformation}>
            <div className={styles.information}>
              <div className={styles.name}>
                <input
                  className={styles.name1}
                  placeholder="Name*"
                  type="text"
                />
                <div className={styles.nameChild} />
              </div>
              <div className={styles.name}>
                <input
                  className={styles.email1}
                  placeholder="Email*"
                  type="text"
                />
                <div className={styles.emailChild} />
              </div>
              <div className={styles.name}>
                <input
                  className={styles.location1}
                  placeholder="Location"
                  type="text"
                />
                <div className={styles.emailChild} />
              </div>
              <div className={styles.budgetSubject}>
                <div className={styles.subject}>
                  <div className={styles.subject1}>Subject*</div>
                  <div className={styles.emailChild} />
                </div>
              </div>
              <div className={styles.message}>
                <input
                  className={styles.message1}
                  placeholder="Message*"
                  type="text"
                />
                <div className={styles.emailChild} />
              </div>
            </div>
            <Button letsWorkTogether="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
