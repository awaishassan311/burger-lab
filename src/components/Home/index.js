import React from 'react'
import Logo from '../../assets/images/a.svg'
import avatar from '../../assets/images/Frame 1.svg'
import clock from '../../assets/images/clock 1.svg'
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
    const payments = [{
        id: 1,
        image: visa
    },
    {
        id: 2,
        image: mastercard
    },
    {
        id: 3,
        image: iospay
    },
    {
        id: 4,
        image: Googlepay
    },
    {
        id: 5,
        image: paypal
    },
    {
        id: 6,
        image: bitcoin
    },
    {
        id: 7,
        image: etherium
    }
    ]
    return (
        <div className='mx-0 lg:mx-[5%]'>
            {/* header */}
            <div className='flex justify-center'>
                <div className='container'>
                    <div className='flex justify-between items-center py-8'>
                        <div className='flex items-center '>
                            <div className='bg-[#F5F5FF] p-5 rounded-full'>
                                <img src={Logo} alt="Logo" />
                            </div>
                            <div className='flex px-[80px]'>
                                <p className='text-base text-[#1F2939] font-normal pr-[60px]'>Discover</p>
                                <p className='text-base text-[#1F2939] font-normal' >Make Your Burger</p>
                            </div>
                        </div>

                        <div className='flex items-center  '>

                            <div className='flex items-center'>
                                <button className='flex items-center py-[6px] px-[12px] gap-2 bg-[#ffeded] text-[#FF4D4F] border-[#ffeded] rounded-3xl'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M14 10.9467V13.304C14.0001 13.4728 13.9361 13.6353 13.8211 13.7588C13.706 13.8823 13.5484 13.9575 13.38 13.9693C13.0887 13.9893 12.8507 14 12.6667 14C6.77533 14 2 9.22467 2 3.33333C2 3.14933 2.01 2.91133 2.03067 2.62C2.04248 2.45163 2.11772 2.29401 2.2412 2.17894C2.36468 2.06387 2.52722 1.99992 2.696 2H5.05333C5.13603 1.99992 5.2158 2.03057 5.27715 2.08601C5.33851 2.14145 5.37706 2.21772 5.38533 2.3C5.40067 2.45333 5.41467 2.57533 5.428 2.668C5.56049 3.59262 5.832 4.49189 6.23333 5.33533C6.29667 5.46867 6.25533 5.628 6.13533 5.71333L4.69667 6.74133C5.5763 8.79097 7.2097 10.4244 9.25933 11.304L10.286 9.868C10.328 9.80933 10.3892 9.76725 10.459 9.7491C10.5288 9.73095 10.6028 9.73787 10.668 9.76867C11.5113 10.1692 12.4104 10.4401 13.3347 10.572C13.4273 10.5853 13.5493 10.6 13.7013 10.6147C13.7835 10.6231 13.8596 10.6617 13.9149 10.7231C13.9702 10.7844 14.0008 10.8641 14.0007 10.9467H14Z" fill="#FF4D4F" />
                                    </svg>
                                    Call Me Back</button>
                                <p className='text-base text-[#1F2939] font-normal px-20' >8 800 437-87-22</p>
                            </div>
                            <div className=''>
                                <img src={avatar} alt="Logo" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Hero-section */}
            <div className='flex justify-center items-center'>
                <div className='container'>
                    <div className='flex  justify-between items-center'>
                        <div className='w-[20%] flex items-center'>
                            <h1 className=' text-6xl  text-[#1F2939] font-bold'>Make Your Burger</h1>
                        </div>


                        <div className='backgroud relative w-[20%]'>
                            <div className='absolute left-3 top-0 right-0 bottom-0'>
                                <img src={buntop} alt="buntop" className='z-[14] h-[110px] top-[120px] left-[40px] absolute' />
                                <img src={cheese} alt="buntop" className='z-[13] absolute h-[48px] top-[205px] left-[41px]' />
                                <img src={salad} alt="buntop" className='z-[12] absolute h-[66px] top-[191px] left-[35px]' />
                                <img src={cutlet} alt="buntop" className=' z-[11] absolute h-[85px] top-[185px] left-[43px]' />
                                <img src={mayo} alt="buntop" className=' z-[10] absolute h-[53px] top-[236px] left-[36px] ' />
                                <img src={cucumber} alt="buntop" className=' z-[9] absolute  h-[241px] top-[126px] left-[28px] ' />
                                <img src={tomatoe} alt="buntop" className=' z-[8] absolute  h-[80px] top-[241px] left-[43px] rotate-3' />
                                <img src={tomatoe} alt="buntop" className=' z-[8] absolute  h-[82px] top-[236px] left-[138px] ' />
                                <img src={cutlet} alt="buntop" className=' z-[7] absolute h-[83px] top-[242px] left-[45px]' />
                                <img src={cucumber} alt="buntop" className=' z-[6] absolute  h-[223px] top-[179px] left-[33px] ' />
                                <img src={Onion} alt="buntop" className=' z-[5] absolute  h-[70px] top-[286px] left-[47px]  ' />
                                <img src={Onion} alt="buntop" className=' z-[5] absolute  h-[70px] top-[287px] left-[117px]  ' />
                                <img src={Onion} alt="buntop" className=' z-[5] absolute  h-[70px] top-[281px] left-[153px]  ' />
                                <img src={cheese} alt="buntop" className='z-[4] absolute h-[46px] top-[315px] left-[43px]' />
                                <img src={salad} alt="buntop" className='z-[3] absolute h-[62px] top-[306px] left-[43px]' />
                                <img src={mayo} alt="buntop" className=' z-[2] absolute h-[50px] top-[329px] left-[37px] ' />
                                <img src={bunbottom} alt="buntop" className='z-[1] h-[90px] top-[322px] left-[36px] absolute' />
                                <img src={ketchup} alt="buntop" className='z-[1] h-[90px] top-[348px] left-[256px] absolute' />

                            </div>
                        </div>


                        <div className='flex flex-col w-[30%] '>
                            <div className='flex items-start border-b-[2px] border-b-[#F5F5FF]'>
                                <h1 className='pb-4 text-[36px] font-semibold text-[#1F2939]'>Summary</h1>
                            </div>
                            <div className='py-[15px]  flex justify-between items-center '>
                                <div >
                                    <p className='text-[36px] text-[#5243C2] font-extrabold'>$12.31</p>
                                </div>
                                <div >
                                    <button className=' py-[8px] px-[30px] bg-[#5243C2] text-white rounded-full'>Checkout</button>
                                </div>
                            </div>
                            <div className='flex items-center justify-between bg-[#F5F5FF] rounded-full p-4'>
                                <div className='flex items-center'>
                                    <img className='bg-[#B956F5] py-[8px] px-[8px] rounded-full ' src={clock} alt="clock" />
                                    <p className='px-[8px] text-sm text-[#1F2939] font-semibold'>7 min</p>
                                </div>
                                <div className='flex items-center'>
                                    <img className='bg-[#B956F5] py-[8px] px-[8px] rounded-full ' src={clock} alt="clock" />
                                    <p className='px-[8px] text-sm text-[#1F2939] font-semibold'>7 min</p>
                                </div>
                                <div className='flex items-center'>
                                    <img className='bg-[#B956F5] py-[8px] px-[8px] rounded-full ' src={clock} alt="clock" />
                                    <p className='px-[8px] text-sm text-[#1F2939] font-semibold'>7 min</p>
                                </div>
                            </div>
                            <div className='flex items-center pt-[83px] '>
                                <p className='text-2xl text-[#FF4D4F]  px-[16px]'>+ Tomato Ketchup</p>
                                <p className=' px-[16px]'>1.2 oz</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className='flex justify-center'>
                <div className='container'>
                    <div className='flex justify-between py-[60px]'>
                        {cards.map((single) => ((
                            <div className='flex items-center flex-col border rounded-[32px] py-6 px-[18px] w-[10%]'>
                                <div className='flex items-center flex-col'>
                                    <img src={single.image} alt="buntop" className='h-[60px]' />
                                    <p className='py-[12px]'>{single.title}</p>
                                </div>
                                <div className='flex items-center'>
                                    <div className='bg-[#F5F5FF] rounded-full p-2'> <img src={single.leftImage} alt="buntop" className='h-4' /></div>
                                    <p className='text-xl px-2'>{single.number}</p>
                                    <div className='bg-[#F5F5FF] rounded-full p-2'>
                                        <img src={single.rightImage} alt="buntop" className='h-4' />
                                    </div>

                                </div>
                            </div>)))}
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className='flex justify-center'>
                <div className='container'>
                    <div className='flex justify-between items-center'>
                        <div className='flex justify-center items-center'>
                            <p className='py-5 px-5 text-[12px] text-[#949BA6] '>2022. Make Your Burger</p>
                            <p className='py-5 px-5 text-[#5243C2] text-[12px] '>Privacy Policy</p>
                            <span className='border-r border-r-slate-400 py-3'></span>
                            <p className='py-5 px-5 text-[#5243C2] text-[12px]'>Terms & Conditions</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            {payments.map((single) => ((
                                <div className='px-2'>
                                    <img src={single.image} alt="images" className='h-6 cursor-pointer' />
                                </div>
                            )))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
