import guitar from '../assets/categories/guitar.jpeg';
import bass from '../assets/categories/bass.webp';
import drums from '../assets/categories/drums.jpeg';
import keys from '../assets/categories/keys.webp';
import amp from '../assets/categories/amp.jpeg';
import pedal from '../assets/categories/pedal.jpeg';
import violin from '../assets/categories/violin.jpeg';
import mic from '../assets/categories/mic.jpeg';
import studio from '../assets/categories/studio.webp';
import brass from '../assets/categories/trumpet.webp';

const categories = [
    {
        name: 'Guitars',
        img: guitar,
        type: [
            {
                name: 'Electric',
                subType: [
                    'Solid Body',
                    'Hollow/Semi-Hollow Body',
                    'Non-6 String',
                    'Other'
                ],
            },
            {
                name: 'Acoustic',
                subType: [
                    'Acoustic-Electric',
                    'Classical',
                    'Gipsy-jazz',
                    '12-String',
                    'Other'
                ]
            }
        ]
    },
    {
        name: 'Bass',
        img: bass,
        type: [
            'Acoustic',
            {
                name: 'Electric',
                subType: [
                    'J-bass',
                    'P-bass',
                    'Fretless',
                    'Non-4 string',
                    'Other'
                ]
            }
        ]
    },
    {
        name: 'Drums',
        img: drums,
        type: [
            'Snare',
            'Toms',
            'Kick',
            'Cymbals',
            'Percussion',
            'Other'
        ]
    },
    {
        name: 'Keys',
        img: keys,
        type: [
            'Keyboard',
            'Synth',
            'Piano',
            'Midi',
            'Organ',
            'Other'
        ]
    },
    {
        name: 'Guitar/Bass Amplifiers',
        img: amp,
        type: [
            'Combo',
            'Head',
            'Cabinet',
            'Other'
        ]
    },
    {
        name: 'Effect pedal',
        img: pedal,
        type: [
            'Overdrive',
            'Distortion',
            'Fuzz',
            'Compressor',
            'Delay',
            'Reverb',
            'Modulation',
            'Filter',
            'Tuner',
            'Wah',
            'Other'
        ]
    },
    {
        name: 'Other stringed',
        img: violin,
        type: [
            'Violin',
            'Double Bass',
            'Viola',
            'Cello',
            'Ukulele',
            'Banjo',
            'Mandolin',
            'Lap Steel',
            'Other'
        ]
    },
    {
        name: 'Microphones',
        img: mic,
        type: [
            'Dynamic',
            'Condenser',
            'Drums',
            'USB',
            'Wireless',
            'Other'
        ]
    },
    {
        name: 'Studio',
        img: studio,
        type: [
            'Audio Interface',
            'Monitor',
            'Headphones',
            'Preamp',
            'Speakers',
            'Mixer',
            'Other'
        ]
    },
    {
        name: 'Brass',
        img: brass,
        type: [
            'Trumpet',
            'Trombone',
            'Saxophone',
            'Tuba',
            'Other'
        ]
    },
    {
        name: 'Other'
    },
];

export default categories;