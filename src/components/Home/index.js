import React from 'react'
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


    document.addEventListener('DOMContentLoaded', function () {

        const burger = document.querySelectorAll('.navbar-burger');
        const menu = document.querySelectorAll('.navbar-menu');

        if (burger.length && menu.length) {
            for (var i = 0; i < burger.length; i++) {
                burger[i].addEventListener('click', function () {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }


        const close = document.querySelectorAll('.navbar-close');
        const backdrop = document.querySelectorAll('.navbar-backdrop');

        if (close.length) {
            for (var i = 0; i < close.length; i++) {
                close[i].addEventListener('click', function () {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        if (backdrop.length) {
            for (var i = 0; i < backdrop.length; i++) {
                backdrop[i].addEventListener('click', function () {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }
    });


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


    return (
        <div className='mx-0 lg:mx-[5%] '>
            {/* header */}
            <div className='flex justify-center'>
                <div className='container'>
                    <div className='flex justify-between items-center py-8'>
                        <div className='flex items-center '>
                            <div className='bg-[#F5F5FF] p-5 rounded-full'>
                                <img src={Logo} alt="Logo" />
                            </div>
                            <div className='px-[80px] burger-button hidden lg:flex md:flex '>
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

                    </div>
                </div>
            </div>
            {

                // <body class="bg-blue-500">
                //     <nav class="relative px-4 py-4 flex justify-between items-center bg-white">
                //         <a class="text-3xl font-bold leading-none" href="#">
                //             <div className='bg-[#F5F5FF] p-5 rounded-full'>
                //                 <img src={Logo} alt="Logo" />
                //             </div>
                //         </a>
                //         <div class="lg:hidden">
                //             <button class="navbar-burger flex items-center text-blue-600 p-3">
                //                 <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                //                     <title>Mobile menu</title>
                //                     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                //                 </svg>
                //             </button>
                //         </div>
                //         <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
                //             <li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Home</a></li>
                //             <li class="text-gray-300">
                //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                //                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                //                 </svg>
                //             </li>
                //             <li><a class="text-sm text-blue-600 font-bold" href="#">About Us</a></li>
                //             <li class="text-gray-300">
                //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                //                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                //                 </svg>
                //             </li>
                //             <li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Services</a></li>
                //             <li class="text-gray-300">
                //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                //                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                //                 </svg>
                //             </li>
                //             <li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Pricing</a></li>
                //             <li class="text-gray-300">
                //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" class="w-4 h-4 current-fill" viewBox="0 0 24 24">
                //                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                //                 </svg>
                //             </li>
                //             <li><a class="text-sm text-gray-400 hover:text-gray-500" href="#">Contact</a></li>
                //         </ul>
                //         {/* <div className='flex gap-4'>
                //             <a class="hidden lg:inline-block py-2 px-6 bg-white hover:bg-gray-600 text-sm text-orange font-bold rounded-xl transition duration-200" href="#">Call Me</a>
                //             <a class="hidden lg:inline-block py-2 px-6 bg-white hover:bg-gray-600 text-sm text-black font-bold rounded-xl transition duration-200" href="#">0092304225514</a>

                //             <a class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>
                //         </div> */}
                //     </nav>
                //     <div class="navbar-menu relative z-50 hidden">
                //         <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                //         <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                //             <div class="flex items-center mb-8">
                //                 <a class="mr-auto text-3xl font-bold leading-none" href="#">
                //                     <svg class="h-12" alt="logo" viewBox="0 0 10240 10240">
                //                         <path xmlns="http://www.w3.org/2000/svg" d="M8284 9162 c-2 -207 -55 -427 -161 -667 -147 -333 -404 -644 -733 -886 -81 -59 -247 -169 -256 -169 -3 0 -18 -9 -34 -20 -26 -19 -344 -180 -354 -180 -3 0 -29 -11 -58 -24 -227 -101 -642 -225 -973 -290 -125 -25 -397 -70 -480 -80 -22 -3 -76 -9 -120 -15 -100 -13 -142 -17 -357 -36 -29 -2 -98 -7 -153 -10 -267 -15 -436 -28 -525 -40 -14 -2 -45 -7 -70 -10 -59 -8 -99 -14 -130 -20 -14 -3 -41 -7 -60 -11 -19 -3 -39 -7 -45 -8 -5 -2 -28 -6 -50 -10 -234 -45 -617 -165 -822 -257 -23 -10 -45 -19 -48 -19 -7 0 -284 -138 -340 -170 -631 -355 -1107 -842 -1402 -1432 -159 -320 -251 -633 -308 -1056 -26 -190 -27 -635 -1 -832 3 -19 7 -59 10 -89 4 -30 11 -84 17 -120 6 -36 12 -77 14 -91 7 -43 33 -174 39 -190 3 -8 7 -28 9 -45 6 -35 52 -221 72 -285 7 -25 23 -79 35 -120 29 -99 118 -283 189 -389 67 -103 203 -244 286 -298 75 -49 178 -103 196 -103 16 0 27 16 77 110 124 231 304 529 485 800 82 124 153 227 157 230 3 3 28 36 54 74 116 167 384 497 546 671 148 160 448 450 560 542 14 12 54 45 90 75 88 73 219 172 313 238 42 29 77 57 77 62 0 5 -13 34 -29 66 -69 137 -149 405 -181 602 -7 41 -14 82 -15 90 -1 8 -6 46 -10 83 -3 37 -8 77 -10 88 -2 11 -7 65 -11 122 -3 56 -8 104 -9 107 -2 3 0 12 5 19 6 10 10 8 15 -10 10 -34 167 -346 228 -454 118 -210 319 -515 340 -515 4 0 40 18 80 40 230 128 521 255 787 343 118 40 336 102 395 113 28 5 53 11 105 23 25 5 59 12 75 15 17 3 41 8 55 11 34 7 274 43 335 50 152 18 372 29 565 29 194 0 481 -11 489 -19 2 -3 -3 -6 -12 -6 -9 -1 -20 -2 -24 -3 -33 -8 -73 -16 -98 -21 -61 -10 -264 -56 -390 -90 -649 -170 -1243 -437 -1770 -794 -60 -41 -121 -82 -134 -93 l-24 -18 124 -59 c109 -52 282 -116 404 -149 92 -26 192 -51 220 -55 17 -3 64 -12 105 -21 71 -14 151 -28 230 -41 19 -3 46 -7 60 -10 14 -2 45 -7 70 -10 25 -4 56 -8 70 -10 14 -2 53 -7 88 -10 35 -4 71 -8 81 -10 10 -2 51 -6 92 -9 101 -9 141 -14 147 -21 3 -3 -15 -5 -39 -6 -24 0 -52 -2 -62 -4 -21 -4 -139 -12 -307 -22 -242 -14 -700 -7 -880 13 -41 4 -187 27 -250 39 -125 23 -274 68 -373 111 -43 19 -81 34 -86 34 -4 0 -16 -8 -27 -17 -10 -10 -37 -33 -59 -52 -166 -141 -422 -395 -592 -586 -228 -257 -536 -672 -688 -925 -21 -36 -43 -66 -47 -68 -4 -2 -8 -7 -8 -11 0 -5 -24 -48 -54 -97 -156 -261 -493 -915 -480 -935 2 -3 47 -21 101 -38 54 -18 107 -36 118 -41 58 -25 458 -138 640 -181 118 -27 126 -29 155 -35 14 -2 45 -9 70 -14 66 -15 137 -28 300 -55 37 -7 248 -33 305 -39 28 -3 84 -9 125 -13 163 -16 792 -8 913 12 12 2 58 9 102 15 248 35 423 76 665 157 58 19 134 46 170 60 86 33 344 156 348 166 2 4 8 7 13 7 14 0 205 116 303 184 180 126 287 216 466 396 282 281 511 593 775 1055 43 75 178 347 225 455 100 227 236 602 286 790 59 220 95 364 120 485 6 28 45 245 50 275 2 14 7 41 10 60 3 19 8 49 10 65 2 17 6 46 9 65 15 100 35 262 40 335 3 39 8 89 10 112 22 225 33 803 21 1043 -3 41 -7 129 -11 195 -3 66 -8 136 -10 155 -2 19 -6 76 -10 125 -3 50 -8 101 -10 115 -2 14 -6 57 -10 95 -7 72 -12 113 -20 175 -2 19 -7 55 -10 80 -6 46 -43 295 -51 340 -2 14 -9 54 -15 90 -5 36 -16 97 -24 135 -8 39 -17 84 -20 100 -12 68 -18 97 -50 248 -19 87 -47 204 -61 260 -14 56 -27 109 -29 117 -30 147 -232 810 -253 832 -4 4 -7 -23 -8 -60z"></path>
                //                     </svg>
                //                 </a>
                //                 <button class="navbar-close">
                //                     <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                //                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                //                     </svg>
                //                 </button>
                //             </div>
                //             <div>
                //                 <ul>
                //                     <li class="mb-1">
                //                         <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
                //                     </li>
                //                     <li class="mb-1">
                //                         <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a>
                //                     </li>
                //                     <li class="mb-1">
                //                         <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Services</a>
                //                     </li>
                //                     <li class="mb-1">
                //                         <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Pricing</a>
                //                     </li>
                //                     <li class="mb-1">
                //                         <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
                //                     </li>
                //                 </ul>
                //             </div>
                //             <div class="mt-auto">
                //                 <div class="pt-6">
                //                     <div className='flex items-center'>
                //                         <button className='flex items-center  py-[6px] px-[12px] gap-2 bg-[#ffeded] text-[#FF4D4F] border-[#ffeded] rounded-3xl'>
                //                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                //                                 <path d="M14 10.9467V13.304C14.0001 13.4728 13.9361 13.6353 13.8211 13.7588C13.706 13.8823 13.5484 13.9575 13.38 13.9693C13.0887 13.9893 12.8507 14 12.6667 14C6.77533 14 2 9.22467 2 3.33333C2 3.14933 2.01 2.91133 2.03067 2.62C2.04248 2.45163 2.11772 2.29401 2.2412 2.17894C2.36468 2.06387 2.52722 1.99992 2.696 2H5.05333C5.13603 1.99992 5.2158 2.03057 5.27715 2.08601C5.33851 2.14145 5.37706 2.21772 5.38533 2.3C5.40067 2.45333 5.41467 2.57533 5.428 2.668C5.56049 3.59262 5.832 4.49189 6.23333 5.33533C6.29667 5.46867 6.25533 5.628 6.13533 5.71333L4.69667 6.74133C5.5763 8.79097 7.2097 10.4244 9.25933 11.304L10.286 9.868C10.328 9.80933 10.3892 9.76725 10.459 9.7491C10.5288 9.73095 10.6028 9.73787 10.668 9.76867C11.5113 10.1692 12.4104 10.4401 13.3347 10.572C13.4273 10.5853 13.5493 10.6 13.7013 10.6147C13.7835 10.6231 13.8596 10.6617 13.9149 10.7231C13.9702 10.7844 14.0008 10.8641 14.0007 10.9467H14Z" fill="#FF4D4F" />
                //                             </svg>
                //                             Call Me Back</button>
                //                         <p className='text-base text-[#1F2939] font-normal px-20 cursor-pointer' >8 800 437-87-22</p>
                //                     </div>
                //                     <div className='bg-[#F5F5FF] p-3 rounded-full cursor-pointer'>
                //                         <img src={avatar} alt="Logo" />
                //                     </div>
                //                 </div>
                //                 <p class="my-4 text-xs text-center text-gray-400">
                //                     <span>Copyright © 2021</span>
                //                 </p>
                //             </div>
                //         </nav>
                //     </div>
                // </body>


            }


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
                            <div className='flex items-center justify-between bg-[#F5F5FF] rounded-full p-4 w-auto gap-10'>
                                <div className='flex items-center'>
                                    <img className='bg-[#B956F5] py-[8px] px-[8px] rounded-full ' src={clock} alt="clock" />
                                    <p className='px-[8px] text-sm text-[#1F2939]  font-semibold'>7 min</p>
                                </div>
                                <div className='flex items-center'>
                                    <img className='bg-[#FF4D4F] py-[8px] px-[8px] rounded-full ' src={fire} alt="clock" />
                                    <p className='px-[8px] text-sm text-[#1F2939] font-semibold'>7 min</p>
                                </div>
                                <div className='flex items-center'>
                                    <img className='bg-[#F58F56] py-[8px] px-[8px] rounded-full ' src={scale} alt="clock" />
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
                            <p className='py-5 px-5 text-[12px] text-[#949BA6] '>2022. Make Your Burger</p>
                            <button className='py-5 px-5 text-[#5243C2] text-[12px] '>Privacy Policy</button>
                            <span className='border-r border-r-slate-400 py-3'></span>
                            <button className='py-5 px-5 text-[#5243C2] text-[12px]'>Terms & Conditions</button>
                        </div>
                        <div className='flex justify-center items-center gap-4'>
                            <div>
                                <img src={visa} className='h-7 cursor-pointer' alt="visa" />
                            </div>

                            <div className='bg-[#FFF4EE] border-[#FFF4EE] border rounded p-1.5'>
                                <img src={mastercard} className='h-4 cursor-pointer' alt="mastercard" />
                            </div>
                            <div className='bg-[#F3FBFF] border-[#FFF4EE] border rounded p-2'>
                                <img src={paypal} className='h-4 cursor-pointer' alt="paypal" />
                            </div>
                            <div>
                                <img src={iospay} className='h-7 cursor-pointer' alt="iospay" />
                            </div>
                            <div>
                                <img src={Googlepay} className='cursor-pointer' alt="Googlepay" />
                            </div>
                            <div>
                                <img src={bitcoin} className='h-7 cursor-pointer' alt="bitcoin" />
                            </div>
                            <div className='bg-[#FFF4EE] border-[#F1F4FF] border rounded p-2'>
                                <img src={etherium} className='h-4 cursor-pointer' alt="etherium" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
