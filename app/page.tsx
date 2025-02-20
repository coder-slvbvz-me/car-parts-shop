'use client';

import { useState } from 'react';

export default function Page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white" data-oid=".y4l6x:">
            {/* Header */}
            <header className="bg-black text-white" data-oid="9mz4tw:">
                <div className="container mx-auto px-4" data-oid="3rddyps">
                    {/* Top Bar */}
                    <div className="py-2 text-sm border-b border-gray-700" data-oid="rc8gxtj">
                        <div className="flex justify-between items-center" data-oid="kbpq.px">
                            <div className="flex space-x-4" data-oid="6imp-.d">
                                <span data-oid="td6zwjp">📞 +1 (555) 123-4567</span>
                                <span data-oid="d._28z5">✉️ support@cartuning.com</span>
                            </div>
                            <div className="flex space-x-4" data-oid="mgp7_:v">
                                <a href="#" className="hover:text-red-500" data-oid="q1_zgd6">
                                    Login
                                </a>
                                <a href="#" className="hover:text-red-500" data-oid="64jdl27">
                                    Register
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Main Header */}
                    <div className="py-4" data-oid="h0an2of">
                        <div className="flex justify-between items-center" data-oid="q2i8k02">
                            <div className="text-2xl font-bold text-red-500" data-oid="fr-e_vt">
                                FULLCARTUNING
                            </div>
                            <div className="hidden md:flex space-x-6" data-oid="u:3nh48">
                                <input
                                    type="search"
                                    placeholder="Search products..."
                                    className="px-4 py-2 rounded-full text-black w-64"
                                    data-oid="j4ry20e"
                                />

                                <div className="flex items-center space-x-2" data-oid="q4.n.p0">
                                    <span className="relative" data-oid="a7jw02m">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            data-oid="kuafhdp"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                                data-oid="jhdu3_b"
                                            />
                                        </svg>
                                        <span
                                            className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs"
                                            data-oid="pynp9j."
                                        >
                                            0
                                        </span>
                                    </span>
                                    <span data-oid="ycnsdr:">Cart</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden"
                                data-oid=".eotl.-"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    data-oid="3r:k2vy"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                        data-oid="1tzb.x_"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:block py-4" data-oid="jvi8:6a">
                        <ul className="flex space-x-8" data-oid="fcjet5j">
                            <li data-oid="r_rj_8f">
                                <a href="#" className="hover:text-red-500" data-oid="lezrg25">
                                    Home
                                </a>
                            </li>
                            <li data-oid="0_-frue">
                                <a href="#" className="hover:text-red-500" data-oid="p3igpn4">
                                    Brands
                                </a>
                            </li>
                            <li data-oid="dgus4-1">
                                <a href="#" className="hover:text-red-500" data-oid="awnd_j.">
                                    Car Parts
                                </a>
                            </li>
                            <li data-oid="ohp4ghf">
                                <a href="#" className="hover:text-red-500" data-oid="plz2w14">
                                    Performance
                                </a>
                            </li>
                            <li data-oid="t9h39gs">
                                <a href="#" className="hover:text-red-500" data-oid="5koq1av">
                                    Accessories
                                </a>
                            </li>
                            <li data-oid="e4138-j">
                                <a href="#" className="hover:text-red-500" data-oid="c3qf5e:">
                                    Deals
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black text-white" data-oid="hwkicyh">
                    <div className="container mx-auto px-4 py-4" data-oid="4mhr7iw">
                        <ul className="space-y-4" data-oid="qngjv25">
                            <li data-oid="j3uiskw">
                                <a href="#" className="block hover:text-red-500" data-oid="5.g-ck:">
                                    Home
                                </a>
                            </li>
                            <li data-oid="hlkdisn">
                                <a href="#" className="block hover:text-red-500" data-oid="0.8:w5s">
                                    Brands
                                </a>
                            </li>
                            <li data-oid="rg0:_4w">
                                <a href="#" className="block hover:text-red-500" data-oid="_-:o.2e">
                                    Car Parts
                                </a>
                            </li>
                            <li data-oid="34:13jr">
                                <a href="#" className="block hover:text-red-500" data-oid="0fa864w">
                                    Performance
                                </a>
                            </li>
                            <li data-oid="mir6.:a">
                                <a href="#" className="block hover:text-red-500" data-oid="ai-q9ow">
                                    Accessories
                                </a>
                            </li>
                            <li data-oid="32-7wk6">
                                <a href="#" className="block hover:text-red-500" data-oid="p45h4g3">
                                    Deals
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            {/* Hero Section */}
            <div className="relative h-[500px]" data-oid="5:w-_es">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"
                    data-oid="f3_2_i6"
                ></div>
                <div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"
                    data-oid="3:j::.k"
                ></div>
                <div
                    className="relative z-20 container mx-auto px-4 h-full flex items-center"
                    data-oid="3uq3_g9"
                >
                    <div className="max-w-xl text-white" data-oid="tdtc4zo">
                        <h1 className="text-5xl font-bold mb-4" data-oid="hmaqo4y">
                            Transform Your Ride
                        </h1>
                        <p className="text-xl mb-8" data-oid="pmt9en-">
                            Discover premium car parts and accessories for the ultimate driving
                            experience
                        </p>
                        <button
                            className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors"
                            data-oid="2c29esw"
                        >
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Featured Categories */}
            <div className="container mx-auto px-4 py-16" data-oid="0ow7cd7">
                <h2 className="text-3xl font-bold mb-8" data-oid="80zg6-s">
                    Popular Categories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="wnzbqla">
                    {['Engine Parts', 'Exterior', 'Interior'].map((category) => (
                        <div
                            key={category}
                            className="relative h-64 group overflow-hidden rounded-lg"
                            data-oid="x79:r7r"
                        >
                            <div
                                className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"
                                data-oid="1xl9zsj"
                            ></div>
                            <div
                                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1')] bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                                data-oid="y8yy_hy"
                            ></div>
                            <div
                                className="relative h-full flex items-center justify-center"
                                data-oid="bvxp2r8"
                            >
                                <h3 className="text-white text-2xl font-bold" data-oid="k3u-1xy">
                                    {category}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Products */}
            <div className="bg-gray-100 py-16" data-oid="uq93h32">
                <div className="container mx-auto px-4" data-oid="v47_o9k">
                    <h2 className="text-3xl font-bold mb-8" data-oid="7.4:92o">
                        Featured Products
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid=".a0fpdj">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                                data-oid="2dpge44"
                            >
                                <div className="h-48 bg-gray-200" data-oid="uafz1ic"></div>
                                <div className="p-4" data-oid="3:r4b4_">
                                    <h3 className="font-semibold mb-2" data-oid="zpbxt_l">
                                        Performance Exhaust System
                                    </h3>
                                    <p className="text-gray-600 mb-2" data-oid="1fux21v">
                                        Brand Name
                                    </p>
                                    <div
                                        className="flex justify-between items-center"
                                        data-oid="uvlauo7"
                                    >
                                        <span className="text-xl font-bold" data-oid="s8jaa8p">
                                            $599.99
                                        </span>
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                            data-oid=".l.at2a"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Brands Section */}
            <div className="container mx-auto px-4 py-16" data-oid="mwuc9ky">
                <h2 className="text-3xl font-bold mb-8" data-oid="iw5.z:l">
                    Top Brands
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8" data-oid="gnp.8eo">
                    {[1, 2, 3, 4, 5, 6].map((brand) => (
                        <div
                            key={brand}
                            className="bg-gray-100 h-24 rounded-lg flex items-center justify-center"
                            data-oid="r10x8d:"
                        >
                            <span className="text-gray-400 font-semibold" data-oid="cljk9ys">
                                BRAND LOGO
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-black text-white py-16" data-oid="_ql1ktn">
                <div className="container mx-auto px-4" data-oid="77nat12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="on31r04">
                        <div data-oid="2e8zmul">
                            <h3 className="text-xl font-bold mb-4" data-oid="fj29v0f">
                                About Us
                            </h3>
                            <p className="text-gray-400" data-oid="rtc853j">
                                Your premier destination for high-quality car parts and accessories.
                            </p>
                        </div>
                        <div data-oid="3p8t_58">
                            <h3 className="text-xl font-bold mb-4" data-oid="k2som09">
                                Quick Links
                            </h3>
                            <ul className="space-y-2 text-gray-400" data-oid="36cf_2j">
                                <li data-oid="7lgia8e">
                                    <a href="#" className="hover:text-red-500" data-oid="6.j_9f-">
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="cyjafqz">
                                    <a href="#" className="hover:text-red-500" data-oid="_kv2r8a">
                                        Contact
                                    </a>
                                </li>
                                <li data-oid="o1:r5bd">
                                    <a href="#" className="hover:text-red-500" data-oid="oc4wewv">
                                        Shipping
                                    </a>
                                </li>
                                <li data-oid="32:2cen">
                                    <a href="#" className="hover:text-red-500" data-oid="6p6q65-">
                                        Returns
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div data-oid="iaqazw4">
                            <h3 className="text-xl font-bold mb-4" data-oid="7qi3xs:">
                                Contact Info
                            </h3>
                            <ul className="space-y-2 text-gray-400" data-oid="hsnu32s">
                                <li data-oid="shpq_v-">📞 +1 (555) 123-4567</li>
                                <li data-oid="cqko-95">✉️ support@cartuning.com</li>
                                <li data-oid="-0fytr0">📍 123 Tuning Street, CA 90210</li>
                            </ul>
                        </div>
                        <div data-oid="b3rxa07">
                            <h3 className="text-xl font-bold mb-4" data-oid="wy92och">
                                Newsletter
                            </h3>
                            <div className="flex" data-oid="oihzx8v">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-2 rounded-l-full text-black flex-1"
                                    data-oid="6tzf66m"
                                />

                                <button
                                    className="bg-red-500 px-6 py-2 rounded-r-full hover:bg-red-600"
                                    data-oid="-s.ujeh"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400"
                        data-oid="gioa19i"
                    >
                        <p data-oid="xyo3m8v">&copy; 2024 FullCarTuning. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
