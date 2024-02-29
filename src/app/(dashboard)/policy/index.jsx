import "./clients.css";
import Navbar from "components/Navbar";
import Header from "./blocks/Header";
import { Footer } from "components/Footer";

const policy = [
  {
    title: "Introduction",
    text: "Thank you for choosing Cowchain. The Services visible on https://cowchain.io are provided by COWCHAIN SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ, UL. TYTUSA CHAŁUBIŃSKIEGO 8, 00-613 WARSZAWA. Cowchain has the authority to make changes or modifications to this agreement at any time. The user can find the latest revision date to the user terms and conditions agreement at the bottom of this page. It is the user’s responsibility to keep current on all changes made. By using this site, you are bound to accept all past, current, and future user terms and conditions within this agreement.‍"
  },
  {
    title: "Age Limits",
    text: "By using this site, Cowchain, you must warrant that you are at least 18 years of age. If you are under 18 and are at least 13 you may use this site under the supervision of a parent or legal guardian who agrees and accepts the User Terms and Conditions Agreement.‍"
  },
  {
    title: "Website Use and Copyright",
    text: "‍Cowchain holds full intellectual property rights to all content, including images with the exclusion of images from 3rd parties. Permission from Cowchain must be given before any content or images may be used by anyone else. Everything belongs to Cowchain and any 3rd parties that have obtained permission."
  },
  {
    title: "Limitation of Liability",
    text: "The user agrees not to hold Cowchain or anyone associated with Cowchain, under no circumstances, for any claim relating to any breach of the terms or conditions of this agreement. The user also agrees not to hold Cowchain or anyone who is connected to  Cowchain responsible for any type of losses or damages of any kind that might arise while using this site.‍"
  },
  {
    title: "Governing Law",
    text: "The use of this website and any dispute arising out of its use are subject to the laws of Poland. Any legal action or proceedings related to or arising out of these Terms and Conditions shall be settled in the courts and or tribunals in Poland."
  },
  {
    title: "Conduct",
    text: "The user agrees to use Cowchain responsibly and only for the intention for which it is designed to be used. The user agrees not to attempt to change anything on the site or compromise the security of the website."
  },
  {
    title: "Confidential Information",
    text: "Cowchain uses the information that you send us to complete your order. We also use your information to send you upcoming promotions, coupons, and information about any 3rd party websites that you might be interested in. Cowchain never sells your information to anyone.‍"
  },
  {
    title: "Social Media Accounts",
    text: "Cowchain is not liable for any damage/loss of videos, social media accounts, and/or any other information during or after your order is delivered. Please note that you use our site at your own risk.‍"
  },
  {
    title: "Corrections",
    text: "Cowchain has the right to make corrections to any errors found on its site without prior notice. Although we take pride in our accuracy, there may be rare occasions when an error could occur, and in this case, corrections must take place without any delays.‍"
  },
  {
    title: "Refund Policy",
    text: "We give refunds only if we have not yet fulfilled your order. If your order is in a queue or being processed, your order has been placed, and therefore we cannot refund you.‍"
  },
  {
    title: "Privacy and Security Policy",
    text: "Our services from Cowchain belong to our company, and our company address is UL. TYTUSA CHAŁUBIŃSKIEGO 8, 00-613 WARSZAWA. \nThe company may keep the personal information of its customers. Reasons for keeping personal information are such as the following;\n a) Membership: We may keep information like your name, firm information and email address.\n b) Campaigns: Our company may contact you by using your personal information to send a message about our discount opportunities and such.\n c) Errors: If any error occurs in our services, we can use your email and phone number to inform you about it.\n d) Partnership: It is possible that we can share your communication data for statistics and surveys in order to develop a better business plan. We can share our clients' digital data with our co-partners for the same reasons.\n \n We may keep our clients' information, but we cannot share it with third-party organizations. Classified information of our clients is in our protection, and if third-party organizations would be able to reach this information, we take responsibility for wrong doing.‍"
  },
  {
    title: "Payment And Security",
    text: "Cowchain customers can use money credit cards for payments. Credit card information is secured with SSL and 3D secure systems.\n a) Credit Card: Our payment system accepts VISA and Mastercard credit cards. Customer credit card information stays unreachable from our employees and customer services. Credit card information is under-protected by an SSL security system.\n b) Cryptocurrency: Customer has the option to pay with crypto currency. Payment information is under-protected by an SSL security system.When customer is asked for details such as first name, last name and country of residence for payment purposes the customer confirms that the information provided in correct.‍"
  },
  {
    title: "Use of Cookies",
    text: "Cookies are small text files for surveilling page visitors' behaviors. Our service and internet pages use cookies to upgrade themselves. Visitors should allow cookies to get better services. Cookies allow page owners to see how many visitors are on the page, what visitors do on the page, and where visitors came from. (Google, URL or others)‍"
  },
  {
    title: "Email Security",
    text: "Customers should not share their personal info and credit card information in emails. We don't have a mail-order system. The customer’s email address is protected according to our privacy policy.‍"
  },
  {
    title: "Exceptional Situations",
    text: "The company reserves to make changes to its privacy policy in these situations;1- If governmental authorizations want customer information.2- In lawful liabilities, the company can share customer information with authorities.3- In necessary situations for customer security."
  }
];

const Policy = ({ setBurgerOpen }) => {
  return (
    <section id="clients-wrapper">
      <div className="relative bg-black">
        <Navbar setBurgerOpen={setBurgerOpen} />
        <Header />
        <section className="mx-auto  border-b border-b-th-fade text-white">
          <div className="mx-auto max-w-[900px] px-5 text-white">
            {policy.map(({ title, text }, i) => (
              <div key={i} className="mb-12">
                <span className="mb-4 text-base  font-bold">{title}</span>
                <p className="whitespace-pre-wrap text-[#BBB]">{text}</p>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default Policy;
