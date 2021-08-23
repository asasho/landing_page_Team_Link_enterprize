import styles from "./Contact.module.css";

const HubspotForm = require("react-hubspot-form");

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.form_head}>
        <h1>お問い合わせ</h1>
      </div>
      <div className={styles.form_sub}>
        <p>
          「Team
          Link」に関するお問い合わせは以下フォームへご記入のうえ、送信してください。
          <br />
          通常2-3営業日以内にてご返信を差し上げます。
        </p>
      </div>
      <div className={styles.form}>
        <HubspotForm
          portalId="20085275"
          formId="4f3b7fbf-abb6-453a-ae65-66e324dd2c42"
          onSubmit={() => console.log("Submit!")}
        />
      </div>
    </div>
  );
};

export default Contact;
