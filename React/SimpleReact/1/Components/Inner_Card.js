import classes from './Inner_Card.module.css'
import { Link } from 'react-router-dom'
function Inner_card({services}) {



    return (


        <div className={classes.row2}>
            {services.map((service) =>(
            <Link to={'/portfolio/'+ service.id} className={classes.service_card}>
                <img className={classes.card_image} src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="Avatar" style={{ width: `100%` }}></img>
                <p className={classes.service_title}>
                    {service.name}
                </p>
            </Link>
            ))}
            {/* <Link to="2" className={classes.service_card}>
                <img className={classes.card_image} src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="Avatar" style={{ width: `100%` }}></img>
                <p className={classes.service_title}>
                    امورشهرداری
                </p>
            </Link>
            <Link to="3" className={classes.service_card}>
                <img className={classes.card_image} src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="Avatar" style={{ width: `100%` }}></img>
                <p className={classes.service_title}>
                    رتبه شرکت
                </p>
            </Link> */}

        </div>
    )


}

export default Inner_card