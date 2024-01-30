import styles from "./main.style.css";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";


function Main() {
  return (
    <div className="container">
    <div className="heads">
        <h1>CONTACT US</h1>
        <p1>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </p1>
    </div>
    <div className="form">
      <div className="contact-us-form">
        <div className="buttons">
            <div className="small-buttons">
            <button className="btn"><MdOutlineMessage />VIA SUPPORT CHAT</button>
            <button className="btn"><IoCallSharp />VIA CALL</button>
            </div>
            <div classname= "big button">
            <button className="btn2"><MdOutlineMessage />VIA EMAIL FORM</button>
            </div>
        </div>
        <div className="form-input">
            <form>
                <div className="form_control">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="Email">Email</label>
                    <input type="text" id="name" name="name"  />
                    <label htmlFor="text">Text</label>
                    <input style={{height: 120,}} type="text" id="text" name="text" />
                </div>
            </form>
            <button className="submitbtn">SUBMIT</button>
        </div>
      </div>
      <div className="contact-us-img">
        <img src="/images/service24_7.svg" alt="service24_7" />
      </div>
    </div>
    </div>
  );
}

export default Main;
