import React, { Component } from "react";
import Faq from "react-faq-component";

const faqData = {
    title: "FAQs",
    rows: [
        {
            title: "When is Engineering Open House 2021?",
            content: "EOH 2021 will be on March 26-27, 2021."
        },
        {
            title: "How will I be able to see the exhibits?",
            content: "As of now, all exhibits will be presented on the EOH website either as a pre-recorded video or livestream."
        },
        {
            title: "What types of exhibits will be presented this year?",
            content: `We expect there to be exhibits from a majority of our engineering departments. We aim to make the
            presentation of these as interactive and engaging as possible in the virtual format. Expect pre-recorded videos, DIY tutorials for at-home
            activities, live streams, and live Q&As.`
        },
        {
            title: "How will exhibit judging work this year?",
            content: `We will still be judging exhibits this year, though there will be fewer judging categories
            and awards compared to previous years. Pre-recorded exhibits may be privately sent out to judges a few days
            prior to EOH weekend so that judges will have enough time to view them.`
        },
        {
            title: "Will I be able to go on a campus tour?",
            content: `There will be opportunities for virtual tours. More information coming about additional informational sessions soon.`
        },
        {
            title: "Will there be a High school and Middle school design competition?",
            content: `We plan on posting DIY tutorials aimed for these students during EOH 2021. More information about this coming soon!`
        },
        {
            title: "Will there be a Midwest Robotics Design Competition?",
            content: `As of now, we do not expect there to be MRDC this year.`
        },
        {
            title: "Wil there be a Tesla Coil Concert?",
            content: `More information about this coming soon! We are hoping to have a socially distant event, following a drive-in concert format this year.`
        },
        {
            title: "Will there be Robobrawl?",
            content: `Unfortunately, we do not expect there to be Robobrawl this year.`
        },
        {
            title: "Will there be any keynote speakers this year?",
            content: `Yes, we expect there to be a keynote speaker as well as several panels! More information about this coming soon!`
        },
    ],
};

const faqStyles = {
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentColor: 'grey',
};

class Visitors extends Component {
    render() {
        return (
            <div className="visitors-container">
                <Faq data={faqData} styles={faqStyles} />
            </div>
        );
    }
}

export default Visitors;