import React, { useState } from "react";

import logo from '.././logo.svg'

import '../css/SubscriptionForm.css'

import styled from "styled-components";

const SubscriptionForm = () => {
    const [selectSubscription, setSelectedSubscription] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [discountedPrice, setDiscountedPrice] = useState(18401);
    const [isDiscountValid, setIsDiscountValid] = useState(true);

    const [activeField, setActiveField] = useState(false);



    const handleSubscriptionChange = (event) => {
        setSelectedSubscription(event.target.value);

        if (event.target.value === "subscription1") {
            setTotalPrice(179);
            setDiscountedPrice(18401);
        } else if (event.target.value === "subscription2") {
            setTotalPrice(199);
            setDiscountedPrice(22001);
        } else if (event.target.value === "subscription3") {
            setTotalPrice(219);
            setDiscountedPrice(25601);
        } else if (event.target.value === "subscription4") {
            setTotalPrice(239);
            setDiscountedPrice(29201);
        }
        // setActiveField(!activeField);
    };


    const handleDiscountValidity = () => {
        setIsDiscountValid(!isDiscountValid);
    };

    console.log(handleDiscountValidity);

    return (
        <Container
            className="container"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "32px 24px",
                gap: "5px",

                position: "absolute",
                width: "500px",
                height: "124vh",
                left: "750px",
                top: "120px",
                background: "#FFFFFF",
                borderRadius: "8px",
            }}>
            <div
                className="selection"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "0px",
                    gap: "160px",
                    width: "501px",
                    height: "60px",
                }}>
                <span
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "0.9em",
                    }}>
                    <button
                        style={{
                            height: "38px",
                            width: "38px",
                            borderRadius: "50%",
                            border: "none",
                            backgroundColor: "#0096FF",
                            textAlign: "center",
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}>
                        1
                    </button>
                    Sign Up
                </span>

                <span
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "0.9em",
                    }}>
                    <button
                        style={{
                            height: "38px",
                            width: "38px",
                            borderRadius: "50%",
                            border: "none",
                            backgroundColor: "#0096FF",
                            textAlign: "center",
                            color: "white",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}>
                        2
                    </button>
                    Subscribe
                </span>
            </div>
            <h2
                style={{
                    //   fontFamily: 'Roboto',
                    fontSize: "24px",
                    fontWeight: "600",
                    fontStyle: "normal",
                    lineHeight: "125%",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    color: "#3c4852",
                }}>
                Select your subscription plan
            </h2>

            <div className="form">
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                    }}>
                    {/* Label 1 */}
                    <label
                        style={{
                            width: "500px",
                            height: "40px",
                            padding: "10px",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            isolation: "isolate",
                            background: "#e7e7e7",
                            border: "2px solid #bebebe",
                            borderRadius: "4px",
                        }}>
                        <input
                            type="radio"
                            value="subscription1"
                            checked
                            onChange={handleSubscriptionChange}
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                            disabled
                        />
                        <div
                            className="text-container"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                padding: "0px",
                                justifyContent: "space-between",
                                width: "172px",
                                height: "19px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "19px",
                                textAlign: "center",
                                color: "#3c4852",
                            }}>
                            12 Months Subscription
                            {/* <div className="right-content" style={{display: 'flex', justifyContent:'center', flexDirection: 'column', gap: '2px', alignItems: 'flex-end', width: '60px', height: '33px'}}>
                              <div className="top" style={{width: '55px', height: '16px', fontStyle: 'normal', fontWeight: '600', fontSize: '12px', lineHeight: '14px', display: 'flex', flexDirection: 'row',alignItems: 'center', textAlign: 'center'}}> Total Rs 99</div>
                              <div className="bottom" style={{width: '40px', height: '16px', fontStyle: 'normal', fontWeight: '600', fontSize: '12px', lineHeight: '14px', display: 'flex', flexDirection: 'row',alignItems: 'center', textAlign: 'center'}}> Rs 8 /mo</div>
                          </div> */}
                        </div>
                    </label>
                    {/* Label 2 */}
                    <label
                        className={`${activeField ? "active" : "not-active"}`}   
                        onMouseEnter={() => { setActiveField(true) }}
                        onMouseLeave={() => { setActiveField(false) }}
                     >
                        <input
                            type="radio"
                            value="subscription2"
                            checked={selectSubscription === "subscription2"}
                            onChange={handleSubscriptionChange}
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                        />
                        <div
                            className="text-container"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                padding: "0px",
                                justifyContent: "space-between",
                                width: "172px",
                                height: "19px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "19px",
                                textAlign: "center",
                                color: "#3c4852",
                            }}>
                            12 Months Subscription
                            {/* <div className="right-content" style={{display: 'flex', justifyContent:'center', flexDirection: 'column', gap: '2px', alignItems: 'flex-end', width: '60px', height: '33px'}}>
                              <div className="top" style={{width: '55px', height: '16px', fontStyle: 'normal', fontWeight: '600', fontSize: '12px', lineHeight: '14px', display: 'flex', flexDirection: 'row',alignItems: 'center', textAlign: 'center'}}> Total Rs 99</div>
                              <div className="bottom" style={{width: '40px', height: '16px', fontStyle: 'normal', fontWeight: '600', fontSize: '12px', lineHeight: '14px', display: 'flex', flexDirection: 'row',alignItems: 'center', textAlign: 'center'}}> Rs 8 /mo</div>
                          </div> */}
                        </div>
                    </label>
                    {/* Label 3 */}
                    <label
                        className="not-active"
                    >
                        <input
                            type="radio"
                            value="subscription3"
                            checked={selectSubscription === "subscription3" }
                            onChange={handleSubscriptionChange}
                            style={{
                                width: "20px",
                                height: "20px",
                            }}         
                        />
                        <div
                            className="text-container"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                padding: "0px",
                                justifyContent: "space-between",
                                width: "172px",
                                height: "19px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "19px",
                                textAlign: "center",
                                color: "#3c4852",
                            }}>
                            6 Months Subscription
                            {/* <div className="right-content" style={{display: 'flex', justifyContent:'center', flexDirection: 'column', gap: '2px', alignItems: 'flex-end', width: '60px', height: '33px'}}>
                              <div className="top" style={{width: '55px', height: '16px', fontStyle: 'normal', fontWeight: '600', fontSize: '12px', lineHeight: '14px', display: 'flex', flexDirection: 'row',alignItems: 'center', textAlign: 'center'}}> Total Rs 99</div>
                              <div className="bottom" style={{width: '40px', height: '16px', fontStyle: 'normal', fontWeight: '600', fontSize: '12px', lineHeight: '14px', display: 'flex', flexDirection: 'row',alignItems: 'center', textAlign: 'center'}}> Rs 8 /mo</div>
                          </div> */}
                        </div>
                    </label>
                    {/* Label 4 */}
                    <label
                        className="not-active"
                    >
                        <input
                            type="radio"
                            value="subscription4"
                            checked={selectSubscription === "subscription4"}
                            onChange={handleSubscriptionChange}
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                            
                        />
                        <div
                            className="text-container"
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                padding: "0px",
                                justifyContent: "space-between",
                                width: "172px",
                                height: "19px",
                                fontStyle: "normal",
                                fontWeight: "600",
                                lineHeight: "19px",
                                textAlign: "center",
                                color: "#3c4852",
                            }}>
                            3 Months Subscription
                            {/* <div className="right-content" style={{display: 'flex', justifyContent:'center', flexDirection: 'column', gap: '2px', alignItems: 'flex-end', width: '60px', height: '33px'}}>
                              <div className="top" style={{width: '55px', height: '16px', fontStyle: 'normal', fontWeight: '600', fontSize: '12px', lineHeight: '14px', display: 'flex', flexDirection: 'row',alignItems: 'center', textAlign: 'center'}}> Total Rs 99</div>
                              <div className="bottom" style={{width: '40px', height: '16px', fontStyle: 'normal', fontWeight: '600', fontSize: '12px', lineHeight: '14px', display: 'flex', flexDirection: 'row',alignItems: 'center', textAlign: 'center'}}> Rs 8 /mo</div>
                          </div> */}
                        </div>
                    </label>

                    <div
                        className="line"
                        style={{
                            marginTop: '5px',
                            width: "520px",
                            height: "2px",
                            background: "gray",
                        }}></div>

                    <div className="summary-container" style={{
                        marginTop: '-8px'
                    }} >
                        <p
                            style={{
                                width: '450px',
                                height: "24px",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                // padding: "5px",
                                fontStyle: "normal",
                                fontSize: "15px",
                                alignItems: "center",
                                gap: '12px',
                                padding: "0px",
                                marginLeft: '25px',
                               
                            }}>
                            <span style={{
                                width: '119px',
                                height: '19px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '15px',
                                lineHeight: '19px',
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'center',
                                color: '#3c4852',
                            }}>Subscription Fee </span>{" "}
                            <span style={{
                                width: '65px',
                                height: '16px',
                                fontStyle: 'normal',
                                fontWeight: "600",
                                fontSize: "15px",
                                lineHeight: "16px",
                                display: "flex",
                                alignItems: "center",
                                textAlign: "center",
                                letterSpacing: "0.03em",
                                color: "#3c4852",
                            }}>
                                {" "}
                                Rs{" "}
                                {isDiscountValid ? discountedPrice : totalPrice}
                            </span>
                        </p>

                        <div
                            className="alert"
                            style={{
                                boxSizing: "border-box",
                                display: "flex",
                                flexDirection: "column",
                                padding: "12px 24px",
                                gap: "4px",

                                width: "500px",
                                height: "80px",

                                background:
                                    "linear-gradient(135deg, rgba(222, 67, 19, 0.2) 0%, rgba(222, 67, 19, 0.2) 0.75%, rgba(222, 67, 19, 0.2) 2.92%, rgba(222, 68, 20, 0.2) 6.37%, rgba(223, 69, 21, 0.2) 10.97%, rgba(223, 72, 22, 0.2) 16.59%, rgba(224, 75, 24, 0.2) 23.1%, rgba(225, 80, 27, 0.2) 30.37%, rgba(227, 86, 31, 0.2) 38.27%, rgba(229, 94, 36, 0.2) 46.66%, rgba(231, 104, 43, 0.2) 55.41%, rgba(235, 117, 51, 0.2) 64.39%, rgba(238, 132, 60, 0.2) 73.47%, rgba(243, 149, 71, 0.2) 82.52%, rgba(248, 169, 84, 0.2) 91.41%, rgba(254, 193, 99, 0.2) 100%)",
                                borderRadius: "8px",
                                border: "2px solid #DE4313",
                            }}>
                            <p
                                className="alert-header"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    gap: "12px",
                                    width: "450px",
                                    height: "24px",
                                    marginTop: "0px",
                                }}>
                                <span
                                    style={{
                                        width: "135px",
                                        height: "19px",
                                        fontStyle: "normal",
                                        fontSize: "15px",
                                        fontWeight: "600",
                                        lineHeight: "19px",
                                        display: "flex",
                                        alignItems: "center",
                                        textAlign: "center",
                                        color: "#DE4313",
                                    }}>
                                    Limited time offer
                                </span>{" "}
                                <span
                                    style={{
                                        width: "80px",
                                        height: "16px",
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        fontSize: "15px",
                                        lineHeight: "16px",
                                        display: "flex",
                                        alignItems: "center",
                                        textAlign: "center",
                                        letterSpacing: "0.03em",
                                        color: "#3c4852",
                                    }}>
                                    {" "}
                                    - Rs 18,401
                                </span>
                            </p>
                            <div
                                className="alert-body"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    padding: "0px",
                                    gap: "8px",
                                    width: "225px",
                                    height: "25px",
                                }}>
                                <p
                                    style={{
                                        width: "200px",
                                        height: "17px",
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        fontSize: "12px",
                                        lineHeight: "17px",
                                        display: "flex",
                                        flexDirection: 'row',
                                        gap: '5px',
                                        alignItems: "center",
                                        textAlign: "center",
                                        color: "#DE4313",
                                        marginTop: '-12px',
                                    }}>
                                    <svg width="24" height="24" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M36.6667 23.3333V43.3333L54 53.6666L56.6667 49.6666L41.6667 40.6666V23.3333H36.6667ZM66.6667 40V60H73.3334V40H66.6667ZM66.6667 66.6666V73.3333H73.3334V66.6666H66.6667ZM60 66.6666C54.3334 71 47.6667 73.3333 40 73.3333C21.6667 73.3333 6.66669 58.3333 6.66669 40C6.66669 21.6666 21.6667 6.66663 40 6.66663C56 6.66663 69.6667 18 72.6667 33.3333H65.6667C62.6667 22 52.3334 13.3333 40 13.3333C25.3334 13.3333 13.3334 25.3333 13.3334 40C13.3334 54.6666 25.3334 66.6666 40 66.6666C48 66.6666 55 63 60 57.6666V66.6666Z" fill="#DE4313" />
                                    </svg>

                                    Offer valid till 25th March 2023
                                </p>
                            </div>
                        </div>
                        <div className="text-container" style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '12px',
                            width: '450px',
                            height: '24px',
                            padding: '0px',
                            marginLeft: '25px',
                            marginTop: '17px',
                        }}>
                            <div className="left-text" style={{
                                width: '167px',
                                height: '19px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '15px',
                                lineHeight: '19px',
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'center',
                                color: '#3c4852',
                            }}><b>Total</b>(Incl. of 18% GST)</div>
                            <div className="right-tex" style={{
                                width: '100px',
                                height: '24px',
                                fontStyle: 'normal',
                                fontWeight: '700',
                                fontSize: '20px',
                                lineHeight: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'center',
                                letterSpacing: '0.03em',
                                color: '#3c4852',
                            }}> Rs. { isDiscountValid ? (discountedPrice - 18401) : totalPrice }</div>
                        </div>
                    </div>

                    <div className="button-container" style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '16px',
                        width: '500px',
                        height: '56px',
                    }}>
                        {/* SECONDARY BTN */}
                        <button type="reset" style={{
                            boxSizing: 'border-box',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: '10px 24px',
                            width: '200.5px',
                            height: '40px',
                            background: '#FFFFFF',
                            border: '2px solid #F77171',
                            borderRadius: '4px',

                            fontStyle: 'normal',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            fontSize: '15px',
                            lineHeight: '18px',
                            color: '#F77171',
                            textAlign: 'center',
                            cursor: 'pointer',
                        }}>cancel</button>

                        {/* PRIMARY BTN */}
                        <button type="submit" style={{
                            boxSizing: 'border-box',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: '10px 24px',
                            width: '200.5px',
                            height: '40px',
                            background: '#47BA68',
                            border: 'none',
                            borderRadius: '4px',
                            gap: '10px',

                            fontStyle: 'normal',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            fontSize: '15px',
                            lineHeight: '18px',
                            color: '#FFFFFF',
                            textAlign: 'center',
                            cursor: 'pointer',
                        }}>proceed to pay</button>
                    </div>
                    <div className="icon-container" style={{
                        display: 'flex',
                        flexDirection: 'row',
                       
                        alignItems: 'center',
                        padding: '0px',

                        width: '500px',
                        height: '40px',


                    }}>
                        <img src={logo} alt="razorpay-icon" />
                    </div>
                </form>
            </div>
        </Container>
    );
};


const Container = styled.div`


    .active {
        width: 500px;
        height: 40px;
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 12px;
        isolation: isolate;
        background: #d7eddd;
        border: 2px solid #47ba68;
        border-radius: 4px;
    }


    .not-active {
        width: 500px;
        height: 40px;
        padding: 10px;
        display: flex;
        align-items: center;
        gap: 12px;
        isolation: isolate;
        background: #ffffff;
        border: 2px solid #bebebe;
        border-radius: 4px;
    }
   
`

export default SubscriptionForm;
