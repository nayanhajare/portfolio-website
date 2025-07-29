import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="nayan.hajare28@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 7000433775" Image={FiPhone} />
      <SingleInfo text="Betul , Madhya Pradesh" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
