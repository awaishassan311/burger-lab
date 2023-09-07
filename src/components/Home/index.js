
import Logo from '../../assets/images/a.svg'
import avatar from '../../assets/images/Frame 1.svg'
import clock from '../../assets/images/clock 1.svg'
import fire from '../../assets/images/fire 1.svg'
import scale from '../../assets/images/scale.svg'
import buntop from '../../assets/images/burger/bun_top.svg'
import cheese from '../../assets/images/burger/cheese.svg'
import cutlet from '../../assets/images/burger/cutlet.svg'
import mayo from '../../assets/images/burger/mayo.svg'
import salad from '../../assets/images/burger/salad.svg'
import cucumber from '../../assets/images/burger/cucumber.svg'
import tomatoe from '../../assets/images/burger/tomatoe.svg'
import Onion from "../../assets/images/burger/default.svg"
import bunbottom from '../../assets/images/burger/bun_bottom.svg'
import plus from '../../assets/images/plus.svg'
import minus from '../../assets/images/minus.svg'
import etherium from '../../assets/images/Etherium.svg'
import bitcoin from '../../assets/images/bitcoin.svg'
import Googlepay from '../../assets/images/GooglePay.svg'
import iospay from '../../assets/images/iospay.svg'
import mastercard from '../../assets/images/Mastercard.svg'
import paypal from '../../assets/images/PayPal.svg'
import visa from '../../assets/images/Visa.svg'
import ketchup from '../../assets/images/ketchup.svg'
import React, { useState, useEffect } from 'react';
const Home = () => {
    const cards = [
        {
            id: 1,
            image: cutlet,
            title: "cutlet",
            leftImage: plus,
            number: "2",
            rightImage: minus,
        },
        {
            id: 2,
            image: cucumber,
            title: "cucumber",
            leftImage: plus,
            number: "2",
            rightImage: minus,
        },
        {
            id: 3,
            image: Onion,
            title: "Onion",
            leftImage: plus,
            number: "2",
            rightImage: minus,
        },
        {
            id: 4,
            image: bunbottom,
            title: "bunbottom",
            leftImage: plus,
            number: "2",
            rightImage: minus,
        }, {
            id: 5,
            image: tomatoe,
            title: "tomatoe",
            leftImage: plus,
            number: "2",
            rightImage: minus,
        }, {
            id: 6,
            image: cheese,
            title: "cheese",
            leftImage: plus,
            number: "2",
            rightImage: minus,
        },
        {
            id: 7,
            image: salad,
            title: "salad",
            leftImage: plus,
            number: "2",
            rightImage: minus,
        },
        {
            id: 8,
            image: mayo,
            title: "mayo",
            leftImage: plus,
            number: "2",
            rightImage: minus,
        }
    ]





    const Card = ({ image, title, leftImage, number, rightImage }) => (
        <div className='flex items-center  flex-col border rounded-[32px] py-6 px-[18px] w-[60%] sm:w-[35%] md:w-[30%] lg:w-[10%]'>
            <div className='flex items-center flex-col'>
                <img src={image} alt={title} className='h-[60px]' />
                <p className='py-[12px]'>{title}</p>
            </div>
            <div className='flex items-center'>
                <div className='bg-[#F5F5FF] rounded-full p-2'>
                    <img src={leftImage} alt={title} className='h-4 cursor-pointer' />
                </div>
                <p className='text-xl px-2'>{number}</p>
                <div className='bg-[#F5F5FF] rounded-full p-2'>
                    <img src={rightImage} alt={title} className='h-4 cursor-pointer' />
                </div>
            </div>
        </div>
    );

    const [open, setOpen] = useState(false);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    useEffect(() => {

        const intervalId = setInterval(() => {
            setCurrentYear(new Date().getFullYear());
        }, 60000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <div className='mx-0 lg:mx-[5%] '>
            {/* header */}
            <div className='flex justify-center p-3'>
                <div className='container'>
                    <div className='flex justify-between items-center py-8'>
                        <div className='flex items-center '>
                            <div className='bg-[#F5F5FF] p-5 rounded-full'>
                                <img src={Logo} alt="Logo" />
                            </div>
                            <div className='px-[80px] burger-button hidden lg:flex  '>
                                <button className='text-base text-[#1F2939] font-normal pr-[60px] '>Discover</button>
                                <button className='text-base text-[#1F2939] font-normal' >Make Your Burger</button>
                            </div>
                        </div>

                        <div className='items-center hidden lg:flex'>

                            <div className='flex items-center'>
                                <button className='flex items-center  py-[6px] px-[12px] gap-2 bg-[#ffeded] text-[#FF4D4F] border-[#ffeded] rounded-3xl'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M14 10.9467V13.304C14.0001 13.4728 13.9361 13.6353 13.8211 13.7588C13.706 13.8823 13.5484 13.9575 13.38 13.9693C13.0887 13.9893 12.8507 14 12.6667 14C6.77533 14 2 9.22467 2 3.33333C2 3.14933 2.01 2.91133 2.03067 2.62C2.04248 2.45163 2.11772 2.29401 2.2412 2.17894C2.36468 2.06387 2.52722 1.99992 2.696 2H5.05333C5.13603 1.99992 5.2158 2.03057 5.27715 2.08601C5.33851 2.14145 5.37706 2.21772 5.38533 2.3C5.40067 2.45333 5.41467 2.57533 5.428 2.668C5.56049 3.59262 5.832 4.49189 6.23333 5.33533C6.29667 5.46867 6.25533 5.628 6.13533 5.71333L4.69667 6.74133C5.5763 8.79097 7.2097 10.4244 9.25933 11.304L10.286 9.868C10.328 9.80933 10.3892 9.76725 10.459 9.7491C10.5288 9.73095 10.6028 9.73787 10.668 9.76867C11.5113 10.1692 12.4104 10.4401 13.3347 10.572C13.4273 10.5853 13.5493 10.6 13.7013 10.6147C13.7835 10.6231 13.8596 10.6617 13.9149 10.7231C13.9702 10.7844 14.0008 10.8641 14.0007 10.9467H14Z" fill="#FF4D4F" />
                                    </svg>
                                    Call Me Back</button>
                                <p className='text-base text-[#1F2939] font-normal px-20 cursor-pointer' >8 800 437-87-22</p>
                            </div>
                            <div className='bg-[#F5F5FF] p-3 rounded-full cursor-pointer'>
                                <img src={avatar} alt="Logo" />
                            </div>


                        </div>
                        {open === false ?
                            <div className='block lg:hidden ' onClick={() => setOpen(true)} >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="60" viewBox="0 0 30 30" >
                                    <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                                </svg>
                            </div> :
                            <div className='bg-rgba h-screen w-full fixed inset-0 z-50' >
                                <div className='flex justify-end w-full h-full'>
                                    <div className='bg-white w-[50%] overflow-y-auto  p-6 '>
                                        <svg onClick={() => setOpen(false)} xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
                                        <div className='flex items-center justify-center flex-col gap-10 '>
                                            <div className='bg-[#F5F5FF] p-3 rounded-full cursor-pointer '>
                                                <img src={avatar} alt="Logo" />
                                            </div>
                                            <div className='burger-button flex flex-col gap-10'>
                                                <button className=' text-base text-[#1F2939]   font-normal  '>Discover</button>
                                                <button className=' text-base text-[#1F2939] font-normal burger-button' >Make Your Burger</button>
                                            </div>

                                            <button className='flex items-center  py-[6px] px-[12px] gap-2 bg-[#ffeded] text-[#FF4D4F] border-[#ffeded] rounded-3xl'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <path d="M14 10.9467V13.304C14.0001 13.4728 13.9361 13.6353 13.8211 13.7588C13.706 13.8823 13.5484 13.9575 13.38 13.9693C13.0887 13.9893 12.8507 14 12.6667 14C6.77533 14 2 9.22467 2 3.33333C2 3.14933 2.01 2.91133 2.03067 2.62C2.04248 2.45163 2.11772 2.29401 2.2412 2.17894C2.36468 2.06387 2.52722 1.99992 2.696 2H5.05333C5.13603 1.99992 5.2158 2.03057 5.27715 2.08601C5.33851 2.14145 5.37706 2.21772 5.38533 2.3C5.40067 2.45333 5.41467 2.57533 5.428 2.668C5.56049 3.59262 5.832 4.49189 6.23333 5.33533C6.29667 5.46867 6.25533 5.628 6.13533 5.71333L4.69667 6.74133C5.5763 8.79097 7.2097 10.4244 9.25933 11.304L10.286 9.868C10.328 9.80933 10.3892 9.76725 10.459 9.7491C10.5288 9.73095 10.6028 9.73787 10.668 9.76867C11.5113 10.1692 12.4104 10.4401 13.3347 10.572C13.4273 10.5853 13.5493 10.6 13.7013 10.6147C13.7835 10.6231 13.8596 10.6617 13.9149 10.7231C13.9702 10.7844 14.0008 10.8641 14.0007 10.9467H14Z" fill="#FF4D4F" />
                                                </svg>
                                                Call Me Back</button>
                                            <p className='text-base text-[#1F2939] font-normal cursor-pointer' >8 800 437-87-22</p>




                                        </div>

                                    </div>

                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>



            {/* Hero-section */}
            <div className='flex justify-center items-center'>
                <div className='container'>
                    <div className='flex flex-col  justify-between items-center lg:flex-row gap-10'>
                        <div className='lg:w-[20%] md:w-[40%]  flex items-center'>
                            <h1 className=' lg:text-6xl md:text-3xl text:xl   text-[#1F2939] font-bold'>Make Your Burger</h1>
                        </div>


                        <div className='backgroud  relative w-[20%] '>
                            <div className='absolute lg:left-3 md:left-3 left-0 top-0 right-0 bottom-0'>
                                <img src={buntop} alt="buntop" className='z-[14]  lg:h-[130px] lg:top-[47px] lg:left-[34px] md:h-[130px] md:top-[47px] md:left-[34px]  h-[90px] top-[35px] left-[28px] absolute' />
                                <img src={cheese} alt="buntop" className='z-[13] absolute lg:h-[54px] lg:top-[148px] lg:left-[41px] md:h-[54px] md:top-[148px] md:left-[41px] h-[37px] top-[106px] left-[35px]' />
                                <img src={salad} alt="buntop" className='z-[12] absolute lg:h-[77px] lg:top-[135px] lg:left-[30px] md:h-[77px] md:top-[135px] md:left-[30px] h-[53px] top-[95px] left-[26px]' />
                                <img src={cutlet} alt="buntop" className=' z-[11] absolute lg:h-[101px] lg:top-[135px] lg:left-[37px] md:h-[101px] md:top-[135px] md:left-[37px] h-[67px] top-[90px] left-[37px]' />
                                <img src={mayo} alt="buntop" className=' z-[10] absolute lg:h-[61px] lg:top-[197px] lg:left-[31px]  md:h-[61px] md:top-[197px] md:left-[31px]  h-[41px] top-[129px] left-[30px]' />
                                <img src={cucumber} alt="buntop" className=' z-[9] absolute  lg:h-[279px] lg:top-[66px] lg:left-[19px]  md:h-[279px] md:top-[66px] md:left-[19px]  h-[185px] top-[43px] left-[25px]' />
                                <img src={tomatoe} alt="buntop" className=' z-[8] absolute  lg:h-[97px] lg:top-[194px] lg:left-[37px]  md:h-[97px] md:top-[194px] md:left-[37px] h-[75px] top-[120px] left-[34px] rotate-3' />
                                <img src={tomatoe} alt="buntop" className=' z-[8] absolute  lg:h-[97px] lg:top-[191px] lg:left-[150px]  md:h-[97px] md:top-[191px] md:left-[150px]  h-[72px] top-[120px] left-[92px]' />
                                <img src={cutlet} alt="buntop" className=' z-[7] absolute lg:h-[101px] lg:top-[200px] lg:left-[37px] md:h-[101px] md:top-[200px] md:left-[37px] h-[65px] top-[126px] left-[37px]' />
                                <img src={cucumber} alt="buntop" className=' z-[6] absolute  lg:h-[280px] lg:top-[115px] lg:left-[14px] md:h-[280px] md:top-[115px] md:left-[14px] h-[181px] top-[74px] left-[22px]' />
                                <img src={Onion} alt="buntop" className=' z-[5] absolute  lg:h-[100px] lg:top-[233px] lg:left-[32px]    md:h-[100px] md:top-[233px] md:left-[32px] h-[60px] top-[154px] left-[32px] ' />
                                <img src={Onion} alt="buntop" className=' z-[5] absolute  lg:h-[100px] lg:top-[240px] lg:left-[85px]   md:h-[100px] md:top-[240px] md:left-[85px]  h-[60px] top-[162px] left-[71px]  ' />
                                <img src={Onion} alt="buntop" className=' z-[5] absolute  lg:h-[100px] lg:top-[237px] lg:left-[153px] md:h-[100px] md:top-[237px]   md:left-[153px] h-[60px] top-[159px]   left-[121px] ' />
                                <img src={cheese} alt="buntop" className='z-[4] absolute lg:h-[57px] lg:top-[278px] lg:left-[32px] md:h-[57px] md:top-[278px] md:left-[32px] h-[37px] top-[181px] left-[32px]' />
                                <img src={salad} alt="buntop" className='z-[3] absolute lg:h-[77px] lg:top-[262px] lg:left-[30px]  md:h-[77px] md:top-[262px] md:left-[30px] h-[51px] top-[175px] left-[28px] ' />
                                <img src={mayo} alt="buntop" className=' z-[2] absolute lg:h-[61px] lg:top-[294px] lg:left-[31px]  md:h-[61px] md:top-[294px] md:left-[31px] h-[41px] top-[198px] left-[27px] ' />
                                <img src={bunbottom} alt="buntop" className='z-[1] lg:h-[106px] lg:top-[295px] lg:left-[30px] md:h-[106px] md:top-[295px] md:left-[30px] h-[78px] top-[194px] left-[28px] absolute' />
                                <img src={ketchup} alt="buntop" className=' z-[2] lg:h-[110px] lg:top-[302px] lg:left-[290px] md:h-[110px] md:top-[302px] md:left-[290px] h-[64px] top-[206px] left-[195px] absolute' />

                            </div>
                        </div>


                        <div className='flex flex-col  justify-center items-center w-auto '>
                            <div className='flex items-start border-b-[2px] border-b-[#F5F5FF]'>
                                <h1 className='pb-4 text-[18px] md:text-[26px] lg:text-[36px] font-semibold text-[#1F2939]'>Summary</h1>
                            </div>
                            <div className='py-[15px] gap-14  flex justify-between items-center '>
                                <div >
                                    <p className='text-[18px] md:text-[26px] lg:text-[36px] text-[#5243C2] font-extrabold'>$12.31</p>
                                </div>
                                <div >
                                    <button className=' lg:py-[3px] md:py-[6px] py-[4px] lg:px-[15px] md:px-[20px] px-[10px] text-[10px] md:text-[16px] lg:text-[26px] bg-[#5243C2] text-white rounded-full'>Checkout</button>
                                </div>
                            </div>
                            <div className='flex items-center justify-between bg-[#F5F5FF] rounded-full p-3 w-auto gap-10'>
                                <div className='flex items-center'>
                                    <img className='bg-[#B956F5] py-[8px] px-[8px] rounded-full h-8 ' src={clock} alt="clock" />
                                    <p className='px-[8px] text-sm text-[#1F2939]  font-semibold'>7 min</p>
                                </div>
                                <div className='flex items-center'>
                                    <img className='bg-[#FF4D4F] py-[8px] px-[8px] rounded-full h-8 ' src={fire} alt="clock" />
                                    <p className='px-[8px] text-sm text-[#1F2939] font-semibold'>7 min</p>
                                </div>
                                <div className='flex items-center'>
                                    <img className='bg-[#F58F56] py-[8px] px-[8px] rounded-full h-8 ' src={scale} alt="clock" />
                                    <p className='px-[8px] text-sm text-[#1F2939] font-semibold'>7 min</p>
                                </div>
                            </div>
                            <div className='flex items-center pt-[83px]  '>
                                <p className='lg:text-3xl md:text-xl text-[12px] text-[#FF4D4F]  px-[16px]'>+ Tomato Ketchup</p>
                                <p className='text-[20px] px-[16px]'>1.2 oz</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className='flex justify-center'>
                <div className='container'>
                    <div className='flex justify-between  py-[60px]'>
                        {cards.map((single) => ((
                            <div className='flex items-center flex-col border rounded-[32px] py-6 px-[18px] w-[10%]'>
                                <div className='flex items-center flex-col'>
                                    <img src={single.image} alt="buntop" className='h-[60px]' />
                                    <p className='py-[12px]'>{single.title}</p>
                                </div>
                                <div className='flex items-center'>
                                    <div className='bg-[#F5F5FF] rounded-full p-2'> <img src={single.leftImage} alt="buntop" className='h-4 cursor-pointer' /></div>
                                    <p className='text-xl px-2 '>{single.number}</p>
                                    <div className='bg-[#F5F5FF] rounded-full p-2'>
                                        <img src={single.rightImage} alt="buntop" className='h-4 cursor-pointer' />
                                    </div>

                                </div>
                            </div>)))}
                    </div>
                </div>
            </div> */}
            <div className='flex justify-center'>
                <div className='container'>
                    <div className='flex lg:justify-between md:justify-between justify-center py-[60px] flex-wrap gap-5'>
                        {cards.map((single) => (
                            <Card key={single.id} {...single} />
                        ))}
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className='flex justify-center items-center'>
                <div className='container'>
                    <div className='flex justify-between flex-col lg:flex-row items-center'>
                        <div className='flex justify-center items-center'>
                            {/* <p className='py-5 px-5 text-[12px] text-[#949BA6] '>2022. Make Your Burger</p> */}


                            <p className="py-5 px-5 text-[12px] text-[#949BA6]">
                                {currentYear}. Make Your Burger
                            </p>
                            <button className='py-5 px-5 text-[#5243C2] text-[12px] '>Privacy Policy</button>
                            <span className='border-r border-r-slate-400 py-3'></span>
                            <button className='py-5 px-5 text-[#5243C2] text-[12px]'>Terms & Conditions</button>
                        </div>
                        <div className='flex justify-center items-center gap-4'>
                            <div className='bg-[#e9e9eb] border-[#e9e9eb] border rounded py-1 px-2'>
                                <img src={visa} className='h-4 w-4 cursor-pointer' alt="visa" />
                            </div>

                            <div className='bg-[#FFF4EE] border-[#FFF4EE] border rounded py-1 px-2'>
                                <img src={mastercard} className='h-4 w-4 cursor-pointer' alt="mastercard" />
                            </div>
                            <div className='bg-[#F3FBFF] border-[#FFF4EE] border rounded py-1 px-2'>
                                <img src={paypal} className='h-4 w-4 cursor-pointer' alt="paypal" />
                            </div>
                            <div className='bg-[#F3FBFF] border-[#FFF4EE] border rounded py-1 px-2'>
                                <img src={iospay} className='h-4 w-4 cursor-pointer ' alt="iospay" />
                            </div>
                            <div className='bg-[#F3FBFF] border-[#FFF4EE] border rounded py-1 px-2'>
                                <img src={Googlepay} className='h-4 w-4 cursor-pointer' alt="Googlepay" />
                            </div>
                            <div className='bg-[#F3FBFF] border-[#FFF4EE] border rounded py-1 px-2'>
                                <img src={bitcoin} className='h-4 w-4 cursor-pointer' alt="bitcoin" />
                            </div>
                            <div className='bg-[#FFF4EE] border-[#F1F4FF] border rounded py-1 px-2'>
                                <img src={etherium} className='h-4 w-4 cursor-pointer' alt="etherium" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Home;
