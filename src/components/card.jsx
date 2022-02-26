import '../App.css'

function Card() {
    return (
        <div className="card2">
            <div className="card_body2">
                <div className="card-immage">
                    <img src="" alt="ma" />
                </div>
                <div className="card-text">
                    <ul>
                        <li><listcolor>Pronous</listcolor> He/Him</li>
                        <li><listcolor>Age</listcolor></li>
                        <li><listcolor>City</listcolor></li>
                        <li><listcolor>School</listcolor></li>
                        <li><listcolor>Languege</listcolor></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function Age () {
    var dob  = new Date("09/13/2006");
    var month_diff = Date.now() - dob.getTime();  

    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);

    conseole.log(age)
}




export default Card;