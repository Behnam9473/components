import classes from './Card.module.css'
import { Link } from 'react-router-dom'
function Card() {
    return (
        <div>
            <div className={classes.inlinecard}>
                <Link to='aboutus' className={classes.card}>
                    <img className={classes.card_image} src="https://reproductionsinc.com/wp-content/uploads/2019/11/AdobeStock_258949460.jpeg" alt="Avatar" style={{ width: `100%` }}></img>
                    <div className={classes.container}>
                        <h4><b> با ما تماس بگیرید </b></h4>
                    </div>
                </Link>
                <Link to='services' className={classes.card}>
                    <img className={classes.card_image} src="https://reproductionsinc.com/wp-content/uploads/2019/11/AdobeStock_258949460.jpeg" alt="Avatar" style={{ width: `100%` }}></img>
                    <div className={classes.container}>
                        <h4><b>  با حوزه فعالیت ما آشنا شوید</b></h4>
                    </div>
                </Link>
                <Link href='#' className={classes.card}>
                    <img className={classes.card_image} src="https://reproductionsinc.com/wp-content/uploads/2019/11/AdobeStock_258949460.jpeg" alt="Avatar" style={{ width: `100%` }}></img>
                    <div className={classes.container}>
                        <h4><b>  افراد </b></h4>
                    </div>
                </Link>
            </div>
            <div className={classes.text}>
                <h1 className={classes.left_border_text}>با خدمات ما بیشتر آشنا شوید</h1>
                <p className={classes.text}>
                    در اینجا سعی داریم خدماتی
                    در شان شما با بهترین هزینه
                    نسبت به کیفیت خدمات به شما ارائه دهیم
                </p>
            </div>



        </div>

    )
}

export default Card