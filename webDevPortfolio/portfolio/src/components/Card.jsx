import cardImage from '../assets/babykiki.jpg'

function Card () {
    return (
        <div className="card">
            <img src={cardImage} alt="Kitty being silly on the stairs"/>
            <div className="cardDesc">
                <h4>Challenge Name</h4>
                <p>words many words words I can talk about forever and I should just lorem ipsum this but im also commited to typing random nonsense</p>
            </div>
        </div>
    )
}
export default Card;