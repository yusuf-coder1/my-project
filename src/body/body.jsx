import React from 'react'
import Navbar from '../Navbar/Navbar'
import './body.css'
import './Responsive.css'
import card1 from './imgs/ser1.png'
import card2 from './imgs/ser2.png'
import card3 from './imgs/ser3.png'
import card4 from './imgs/ser4.png'
import woman from './imgs/woman.png'

import dc1 from './imgs/dc1.jpg'
import dc2 from './imgs/dc2.jpg'
import dc3 from './imgs/dc3.jpg'
import dc4 from './imgs/dc4.jpg'
import dc5 from './imgs/dc5.jpg'
import dc6 from './imgs/dc6.jpg'
const body = () => {
    return (
        <>
            <div className="bg">
                <div className='header'>
                    <Navbar />
                    <div className="banner">
                        <div className="banner_div1">
                            <div className="carusel">
                                <div className="carusel_div"></div>
                                <div className="carusel_div"></div>
                                <div className="carusel_div"></div>
                            </div>
                        </div>
                        <div className="banner_div2">
                            <div className="title">
                                <div className="title_div1">
                                    <h1>MEDICAL CENTER</h1>
                                </div>
                                <div className="title_div2">
                                    <div className='zb1'>
                                        <h1>YOUR HEALT</h1>
                                    </div>
                                    <div className='zb2'>
                                        <h2>IS OUR PRIORITY</h2>
                                    </div>
                                </div>
                                <div className="title_div3">
                                    <button className='btn1'><a href="#">READ MORE</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="register">


                    <div className="reg_div1">
                        <div className="borr">
                            <div className="borr_title">
                                <div className="our">
                                    <div className='forh1'>
                                        <h1>OUR</h1>
                                    </div>
                                    <div className='forh1'>
                                        <h2>CONTACTS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="borr_down">
                                <div className="borr_down_div">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <h1>Jacksotts street 567,san Diego, California, USA</h1>
                                </div>
                                <div className="borr_down_div">
                                    <i class="fa-solid fa-phone"></i>
                                    <h1>8(800) 923 4567, 8 (800) 923 4568</h1>
                                </div>
                                <div className="borr_down_div">
                                    <i class="fa-solid fa-pen"></i>
                                    <h1>medix@support.com</h1>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className="reg_div2">
                        <div className="borr">
                            <div className="borr_title">
                                <div className="our">
                                    <div className='forh1'>
                                        <h1>MAKE AN</h1>
                                    </div>
                                    <div className='forh1'>
                                        <h2>APPOINTMENT</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="borr_down2">
                                <div className="borr_down2_div">
                                    <input className='reg_input' type="text" placeholder='FULL NAME' />

                                    {/* <div className='date_div'>
                                    </div> */}
                                    <input className='reg_input' type="date" id="appointment_date" required />



                                    <select name='department' className='reg_inputt'>
                                        <option className='opt' value="">option1</option>
                                        <option className='opt' value="">option2</option>
                                        <option className='opt' value="">option3</option>
                                    </select>
                                </div>
                                <div className="borr_down2_div">
                                    <input className='reg_input' type="text" placeholder='PHONE NUMBER' />
                                    <input className='input_time' type="time" />
                                    <button className='reg_btn'>MAKE AN APPOINTMENT</button>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="reg_div3">
                        <div className="borr">
                            <div className="borr_title">
                                <div className="our">
                                    <div className='forh1'>
                                        <h1>OPENING</h1>
                                    </div>
                                    <div className='forh1'>
                                        <h2>HOURS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="borr_down">
                                <div className="borr_down3_div">
                                    <h1>Monday - Friday</h1>
                                    <h2>8.00 - 17.00</h2>
                                </div>
                                <div className="borr_down3_div">
                                    <h1>Saturday</h1>
                                    <h2>9.30 - 17.30</h2>
                                </div>
                                <div className="borr_down3_div">
                                    <h1>Sunday</h1>
                                    <h2>Sunday</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="services">
                    <div className="ser_mid">


                        <div className="ser_card">
                            <div className="card_div1">
                                <img src={card1} alt="" />
                            </div>
                            <div className="card_div2">
                                <div className="forh1">
                                    <h1>BEST</h1>
                                </div>
                                <div className="forh1">
                                    <h2>TREATMENT</h2>
                                </div>
                            </div>
                            <div className="card_div3">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>



                        <div className="ser_card">
                            <div className="card_div1">
                                <img src={card2} alt="" />
                            </div>
                            <div className="card_div2">
                                <div className="forh1">
                                    <h1>EMERGENCY</h1>
                                </div>
                                <div className="forh1">
                                    <h2>HELP</h2>
                                </div>
                            </div>
                            <div className="card_div3">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.                                </p>
                            </div>
                        </div>



                        <div className="ser_card">
                            <div className="card_div1">
                                <img src={card3} alt="" />
                            </div>
                            <div className="card_div2">
                                <div className="forh1">
                                    <h1>MEDICAL</h1>
                                </div>
                                <div className="forh1">
                                    <h2>STAFF</h2>
                                </div>
                            </div>
                            <div className="card_div3">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.                                </p>
                            </div>
                        </div>


                        <div className="ser_card">
                            <div className="card_div1">
                                <img src={card4} alt="" />
                            </div>
                            <div className="card_div2">
                                <div className="forh1">
                                    <h1>QUALIFIED</h1>
                                </div>
                                <div className="forh1">
                                    <h2>DOCTORS</h2>
                                </div>
                            </div>
                            <div className="card_div3">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.                                </p>
                            </div>
                        </div>


                    </div>
                </div>






                <div className="info">
                    <div className="info1">


                        <div className="info_trio1">

                            <div className="trio1_title">
                                <h1>DEPARTMENTS</h1>
                            </div>


                            <div className="trio1_sec">
                                <div className="sec_title">
                                    <h1>Medical Center</h1>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                                <div className="sec_title">
                                    <h1>Pediatrics Clinic</h1>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                                <div className="sec_title">
                                    <h1>Therapist Clinic</h1>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                                <div className="sec_title">
                                    <h1>Physician Clinic</h1>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                                <div className="sec_title">
                                    <h1>Family care (Reproduction)</h1>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                                <div className="sec_title">
                                    <h1>Speech Pathologist</h1>
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>



                        <div className="info_trio2">

                            <div className="trio2_title">
                                <div className="forh">
                                    <h1 className='dep'>DEPARTMENT:</h1>
                                </div>
                                <div className="forh">
                                    <h1 className='med'>MEDICAL CENTER</h1>
                                </div>
                            </div>

                            <div className="trio2_text">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellat eius deleniti suscipit ab voluptatum fuga corporis temporibus sunt, ad maxime corrupti doloribus reprehenderit vitae ipsam nisi! Nemo, non amet! Vel, laudantium.</p>
                            </div>


                            <button className='trio2_btn'>
                                READ MORE
                            </button>
                        </div>



                        <div className="info_trio3">
                            <img src={woman} alt="" />
                        </div>
                    </div>
                </div>



                <div className="weekend">
                    <div className="weekend1">
                        <div className="wk_div">
                            <div className="wk1">
                                <h2>WELCOME TO</h2>
                                <h1>HEALTHY WEEKEND CHECK UP</h1>
                            </div>
                            <div className="wk2">
                                <input placeholder='EMAIL ADDRESS' type="email" />
                                <i class="fa-solid fa-pencil"></i>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="footer">
                    <div className="footer_div">


                        <div className="ft_div1">


                            <div className="ft_info1">
                                <div className="divv1">
                                    <h1>MEET</h1>
                                </div>
                                <div className="divv12">
                                    <h2>OUR</h2>
                                </div>
                                <div className="divv13">
                                    <h2>TEAM</h2>
                                </div>
                            </div>

                            <div className="ft_info2">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, soluta ab laudantium doloribus corporis natus sapiente animi commodi ipsa illum amet impedit nulla sequi at! </p>
                                <button className='ft_btn'>READ MORE</button>
                            </div>
                        </div>




                        <div className="ft_div2">
                            <img src={dc1} alt="" />
                            <img src={dc2} alt="" />
                            <img src={dc3} alt="" />
                            <img src={dc4} alt="" />
                            <img src={dc5} alt="" />
                            <img src={dc6} alt="" />
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default body