import Button from "../components/Button.jsx";
import React from "react";
import {offer} from "../assets/images/index.js";
import {arrowRight} from "../assets/icons/index.js";

const SpecialOffers = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img src={offer} width={773} height={687} className="object-contain w-full"/>
            </div>

            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                    <span className="text-coral-red"> Special</span> Offer
                </h2>

                <p className="mt-4 lg:max-w-lg info-text">
                    Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <p className="mt-6 lg:max-w-lg info-text">
                    Discover our exclusive deals and limited-time offers. Don't miss out on the chance to upgrade your
                    footwear collection with the latest trends and unbeatable prices.
                </p>

                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label="Shop now" iconUrl={arrowRight}/>
                    <Button label="Learn more" backgroundColor="bg-white"
                            borderColor="border-slate-gray" textColor="text-slate-gray"/>
                </div>
            </div>
        </section>
    )
        ;
};

export default SpecialOffers;