import { HAPPY, SAD, MEH, BRILLIANT, ANGRY } from '../utils/constants';

export const handleImages = (mode) => {
    const images = {
        [HAPPY]: 'https://res.cloudinary.com/dez9y1otk/image/upload/v1692386474/MonokuApp/Face_Happy_Stage_3_d0fszg.svg',
        [SAD]: 'https://res.cloudinary.com/dez9y1otk/image/upload/v1692386474/MonokuApp/Face_Sad_Stage_3_ujr0jo.svg',
        [MEH]: 'https://res.cloudinary.com/dez9y1otk/image/upload/v1692386474/MonokuApp/Face_Neutral_Stage_3_vzi7qd.svg',
        [BRILLIANT]: 'https://res.cloudinary.com/dez9y1otk/image/upload/v1692386474/MonokuApp/Face_Super_Stage_3_rjide0.svg',
        [ANGRY]: 'https://res.cloudinary.com/dez9y1otk/image/upload/v1692386474/MonokuApp/Face_Angry_Stage_3_uxmspl.svg'
    }

    return images[mode]
}