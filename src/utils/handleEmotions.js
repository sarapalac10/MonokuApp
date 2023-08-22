import { HAPPY, SAD, MEH, BRILLIANT, ANGRY } from '../utils/constants';

export const handleEmotion= (index) => {
    const emotions = {
        [HAPPY]: 4,
        [SAD]: 1,
        [MEH]: 3,
        [BRILLIANT]: 5,
        [ANGRY]: 2
    }

    return emotions[index]
}