import '../../style/Emotion.css';
import { handleImages } from '../../utils/handleImages';

const Emotion = (props) => {

    return (<>
        <label>
            <input onChange={props.selectEmotion} type="radio" name="emotion" value={props.mode} />
            <img src={handleImages(props.mode)} alt='Emotion' />
        </label>
    </>)
}

export default Emotion