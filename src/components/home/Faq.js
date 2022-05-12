import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Faq from "react-faq-component";

const FaqSection = () => {
    const data = {
    
        rows: [
          {
            title: "How can my company benefit from Driver logistics?",
            content: "By choosing us as your 3PL service provider, you get undivided assistance for your business on Warehouse management, Fleet management, and other logistics operations for your business in India. "
          },
          {
            title: "What are the technology solutions/expertise you have in 3PL?",
            content:"As a leading logistics company based in Kochi with Pan India service, we provide top-notch technology solutions for handling your freight for holding complete visibility and control over your business. Our technology partners include ZARTEK, ORACLE Netsuite, ZOHO, Yellow messenger, happay, etc."
          },
          {
            title: "What will be the estimated cost of your 3PL services for my e-commerce business?",
            content: "Please reach out to us for a free consultation to understand your business’s 3PL requirement in India. We will then customize a plan for you with the estimated budget."
          },
          {
            title: "Which are the industry sectors you currently assist with 3PL services?",
            content:"We have successfully partnered with industry-leading automotive, chemicals, electronics, and FMCG companies in Kerala as their trusted third-party logistics provider."
          },
          {
            title: "Does your service include a logistics facility in case of return or exchange of products?",
            content:"Yes. You can choose to avail of our reverse logistics for repacking and collection of defective goods as well as goods in dispute from the end customers/client channel partners using their own vehicles or using courier facilities."
          },{
            title: "Do you provide any value-added service for your logistics operations?",
            content: "Yes. We do value-added logistics services for your company including Repacking of Goods, Branding, Special Packaging, etc. "
          },{
            title: "Where is your company headquarters located?",
            content: "We are a third party logistics company located in Kochi, Kerala with pan India service solution."
          }
        ]
      };
    return (
        <section style={{
            width: '100%',
            background: 'none',
            paddingTop: '80px',
            paddingBottom: '30px',
            position: 'relative',
            zIndex: '1',
            textAlign: 'center'
        }}>
            <Container className="container">
            <h2 className="background double"><span>FAQ</span></h2>
                <Fragment>
                    <Faq
                        data={data}
                        styles={{
                            bgColor: "white",
                            titleTextColor: "#48482a",
                            rowTitleColor: "#78789a",
                            rowTitleTextSize: "large",
                            rowContentColor: "#48484a",
                            rowContentTextSize: "16px",
                            rowContentPaddingTop: "10px",
                            rowContentPaddingBottom: "10px",
                            rowContentPaddingLeft: "30px",
                            rowContentPaddingRight: "80px",
                            arrowColor: "red"
                        }}
                        config={{
                            animate: true
                        }}
                    />
                </Fragment>

            </Container>
        </section>
    );
};

export default FaqSection;
