import React from 'react'

import appLogo from '../images/amplichat.png'

import appleStoreBadge from '../images/apple_store_badge.svg'
import googlePlayBadge from '../images/google_play_badge.png'

import coverImage from '../images/amplichat_iphones_two.png'

// endorsement images
import dreamhub_filled from '../images/dreamhub_filled.png'
import voiceqna_filled from '../images/voiceqna_fill_v2_gradient.png'
import voicemirror_filled from '../images/voice_mirror_v_1024.png'
import bazipaipai_unfilled from '../images/bazipaipai_64.png'
import spindrifthome_filled from '../images/sh_unfill_1024.png'


// section images
import medic from '../images/medic.jpg'
import nurse from '../images/nurse.jpg'
import doctors from '../images/doctors.jpg'
import diagnose from '../images/diagnose.jpg'
import ward from '../images/ward.jpeg'
import vision from '../images/vision.jpg'

import discordImage from '../images/discord.png'

export const initialState = {
    // when in dev, change appURL to local url
    // appURL: 'http://localhost:3000',  
    // when in production, change appURL to real url
    appURL: 'https://amplichat.com',

    appLogo: appLogo,
    appName: 'Jambo Medics',

    coverTitle: 'Get Connected with the best Healthcare for you',
    coverText: 'Chat with professionals and specialists to receive personalized treatment diagnostics and recommendations with the App.',
    appleStoreBadge: appleStoreBadge,
    appleStoreLink: 'https://apps.apple.com/us/app/amplichat/id1499570373',
    googlePlayBadge: googlePlayBadge,
    googlePlayLink: 'https://apps.apple.com/us/app/amplichat/id1499570373',

    coverImage: coverImage,

    endorsementTitle: `Link with your prefered insurance provider on our apps`,
    endorsementText: `Jambo Medics powers tailored recommendations all within Jubilee, AAR, AghaKhan, NHIF, and MorsMutual Insurance.`,
    endorsementList: [
        {
            title: `DreamHub: Visualized Stories`,
            titleColor: `orangeRed`,
            image: dreamhub_filled,
            URL: `https://dreamhub.app`,
        },
        {
            title: `VoiceQnA: Speak a New Language`,
            titleColor: `forestGreen`,
            image: voiceqna_filled,
            URL: `https://voiceqna.com`,
        },
        {
            title: `VoiceMirror: Travel Translator`,
            titleColor: `blue`,
            image: voicemirror_filled,
            URL: `https://voiceqna.com/mirror`,
        },
        {
            title: `BaZiPaiPai: Know Your Destiny`,
            titleColor: `black`,
            image: bazipaipai_unfilled,
            URL: `https://bazipaipai.com`,
        },
        {
            title: `SpindriftHome: HOA Management`,
            titleColor: `orangeRed`,
            image: spindrifthome_filled,
            URL: `https://spindrifthome.com`,
        },
    ],

    sectionList: [
        {
            'title': `HealthCare Services Made Easy`,
            'text': `Tired of the long hold ups in queues at clinics and hospitals? Our app makes it easy to chat with professionals in real-time, so you can receive treatments and diagnosis and secure appointments quickly`,
            'image': diagnose,
        },
        {
            'title': `Expand on personalized care for you`,
            'text': `Meet specialist and professionals and share your background for up to date treatment recommendations based on your pre existing conditions.`,
            'image': medic,
        },
        {
            'title': `Enhance your treatment`,
            'text': `Get instant access to a community of passionate doctors and specialists ready to listen and give you the best medical care through our app! Chat with experts before, during, and after your checkups to enhance your experience and create more personalized and better care that carries in a lifetime.`,
            'image': vision,
        },
        {
            'title': `Chat with Attendees`,
            'text': `Don't let anything get in the way of receiving the best care for you and have your own health routines set up With our app, you can chat with experts and meet new professionals in a safe, welcoming environment.`,
            'image': ward,
        },
        {
            'title': `Discover New Centers and Specialists`,
            'text': `Our app is the perfect way to enhance your healthcare at health facilities and pharmacies! Connect with others, share your thoughts and opinions on the best reviewed centres, and discover new professionals and facilities to rely on.`,
            'image': doctors,
        },
        {
            'title': `Connect with Doctors anywhere`,
            'text': `Whether you're a seasoned patient or a first-time patient with that condition, our app is the perfect way to connect with the right experts and make the most of your experience. Download now and exploring!`,
            'image': nurse,
        },
    ],

    discordImage: discordImage,
    discordLink: 'https://discord.com/invite/aFQPYyAVDq',
}

const initialContext = {
    state: initialState,
    dispatch: () => null,
}

export const Context = React.createContext(initialContext)