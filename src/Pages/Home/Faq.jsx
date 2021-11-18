import React from "react";

import faqImg from "assets/Home Page/Section 4/3.1.png";
/* CAN BE MADE TO USE A FUNCTION TO RENDER QUESTIONS */
const data = [
  {
    question: "What will I need to provide when I open an account?",
    answer:
      "You will need documents that show your legal name,permanent street address, and date of birt. Appropriate forms of ID include a driver’s license,state-issued identification or valid passport",
  },
  {
    question: "Where do I find my bank account number?",
    answer:
      "You get your account number sent to your email address upon sign up and you can view them in your Online Banking dashboard.",
  },
  {
    question: "How do I sign on to online banking?",
    answer:
      "From the home page, you will see a 'Sign Up' buttonin the upper right corner of the page. Enter your Email Address and Password in the input fields and click 'SIGN IN.'",
  },
  {
    question: " How do I change my address and mobile number?",
    answer:
      "If you have access to Online Banking, you can update]this information within your Profile Settings, or you can contact us.",
  },
  {
    question: " What is a pending transaction?",
    answer:
      "A pending transaction is a transaction that has not been posted to your account, but is reflected in your available balance.",
  },
];

export class Faq extends React.Component {
    state = { open: -1 };
    createQues = (question, answer, index) => {
        return (
          <div className="faq accordion">
            <div className="question-wrapper" onClick = {() => {this.state.open !== index? this.setState({open: index}): this.setState({open: -1})}}>
              <div className="d-flex">
                <span className="q-mark d-block">Q.</span>
                <p className="question" title="">
                  {question}
                </p>
              </div>
              <i className={`fas fa-chevron-down ${this.state.open === index ? "icon-expend": ""}`}></i>
            </div>
            <div className={`answer-wrapper ${this.state.open === index ? "expand": ""}`}>
              <p className="answer">{answer}</p>
            </div>
          </div>
        );
      };
    render() {
        return (
            <section id="section__four" className="py-60">
              <div className="faq-container text-control-1">
                <div className="faq-heading">FAQ</div>
                <div className="faqs-section">
                  <img src={faqImg} alt="" />
                        { this.createQues(data[0].question, data[0].answer,0)}
                        { this.createQues(data[1].question, data[1].answer,1)}
                        { this.createQues(data[2].question, data[2].answer,2)}
                        { this.createQues(data[3].question, data[3].answer,3)}
                        { this.createQues(data[4].question, data[4].answer,4)}
                </div>
              </div>
            </section>
        );
  }
};
