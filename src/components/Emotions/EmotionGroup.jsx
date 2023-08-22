import Emotion from './Emotion';
import { HAPPY, SAD, MEH, BRILLIANT, ANGRY } from '../../utils/constants';

const EmotionGroup = (props) => {
    return (<div className='d-flex justify-content-center flex-row'>
        {[ SAD, ANGRY, MEH, HAPPY, BRILLIANT].map((mode, index) => (
            <Emotion selectEmotion={props.handleEmotion} key={index} mode={mode} />
        ))}
    </div>)
}

export default EmotionGroup