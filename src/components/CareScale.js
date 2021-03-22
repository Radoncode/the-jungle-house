import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';


const CareScale = ({ scaleValue, careType}) => {
    const range = [1,2,3];

    const scaleType = careType === 'light' ? (
        <img src={Sun} alt='sun-icon'/>
    ):(
        <img src={Water} alt='water-icon'/>
    )

    const alertMaintain = () => {
        if (careType === 'water'){
            switch(scaleValue){
                case 1:
                    alert("little watering");
                break;
                case 2:
                    alert("moderate watering");
                break;
                case 3:
                    alert("a lot of watering");
                break;
                default:
                    console.log("no data");
            }
        }
        if (careType === 'light'){
            switch(scaleValue){
                case 1:
                    alert("little light");
                break;
                case 2:
                    alert("moderate luminosity");
                break;
                case 3:
                    alert("lot of light");
                break;
                default:
                    console.log("no data");
            }
        }
    }
    
    return <div onClick={alertMaintain}>
                {range.map((rangeElem) =>
                    scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
                    )}
            </div>
}

export default CareScale;