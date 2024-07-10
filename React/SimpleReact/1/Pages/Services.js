import PageContent from "../Components/PageContent"
import classes from "./styles/Services.module.css"
import Inner_card from "../Components/Inner_Card"
import { useNavigate } from "react-router-dom"
import { useLoaderData, json } from "react-router-dom"

function Services() {
    const resData = useLoaderData();
    const navigate = useNavigate();
    function addHandler (){
        navigate('new')
    };

    // if (resData.isError){
    //     return <div>{resData.message}</div>
    // }

    return (
        <PageContent>
            <div className={classes.container}>
                <div className={classes.row1}>
                    <div className={classes.col1}>
                        <img className={classes.service_image} src="https://assets.nicepagecdn.com/d2cc3eaa/302591/images/ds-min.jpg" alt="image"></img>
                    </div>
                    <div className={classes.col2}>
                        <h1 className={classes.title}>مشتریان ما افتخار و اولویت ما هستند</h1>
                        <p className={classes.description}>
                            در مورد کسب و کار و نحوه اجرا مقداری توضیح داده شود
                            در مورد کسب و کار و نحوه اجرا مقداری توضیح داده شود
                        </p>
                    </div>
                </div>
                <Inner_card services={resData}></Inner_card>

            </div>
        </PageContent>
    )
}

export default Services


export async function loader(request,params) {
    const response = await fetch('http://127.0.0.1:8000/services/');
    console.log(response)

    if (!response.ok) {
        // return {isError:true, message:"لیست اقلام بارگزاری نشد."}
        // throw new Response (JSON.stringify({message:'لیست اقلام بارگزاری نشد'}), {status: 500,});
        return json({message:'لیست اقلام بارگزاری نشد'},{status: 500})

    } else {
        const resData = await response.json();
        return resData;
    }

}