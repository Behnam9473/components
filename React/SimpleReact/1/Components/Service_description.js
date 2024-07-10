import classes from './Service_discription.module.css'

function Service_discription() {


    return (

        <div>

            <div  >
                <h1 className={classes.service_title}>نام خدمت</h1>
                <p className={classes.service_description}>
                    توضیحات مخصوص خدمت
                </p>
            </div>

            <div className={classes.decoration}>
            </div>
            <div  >
                <h1 className={classes.service_title}>
                            نمونه کار    
                 </h1>

            </div>
        </div>
    )
}

export default Service_discription