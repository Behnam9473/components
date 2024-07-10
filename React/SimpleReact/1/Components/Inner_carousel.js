import classes from './Inner_carousel.module.css'
// import PageContent from './PageContent.js';

function Inner_carousel({img}) {

    return (
            <div className={classes['responsive-container']}>
                <div className={classes.cent}>
                    <img className={classes['responsive-container_img']} src={img.photo} alt={img.name} />
                </div>

            </div>
    )
}

export default Inner_carousel
