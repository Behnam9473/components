import classes from './styles/Portfolio.module.css'

import PageContent from "../Components/PageContent"
import Portfolio_Card from "../Components/Portfolio_Card"
import Inner_carousel from "../Components/Inner_carousel"
import Service_discription from "../Components/Service_description"

import { useNavigate } from "react-router-dom"
import { useRouteLoaderData, json } from "react-router-dom"

function Portfolio() {

    const data = useRouteLoaderData('good-detail');

    return (
        <PageContent>
            <div className={classes.portfolio_container}>
                <div className={classes.row1}>
                    <Inner_carousel img= {data} />
                </div>
                <Service_discription></Service_discription>
                <div>
                </div>
                <div className={classes.row2}>
                    <Portfolio_Card portfolio = {data}></Portfolio_Card>
                </div>
            </div>
        </PageContent>
    )
}

export default Portfolio

export async function loader({request, params}) {
    // console.log(request)

    const id = params.pId
    const na = request.name
    const response = await fetch('http://localhost:8000/services/'+ id+'/',);

    if (!response.ok) {
        // return {isError:true, message:"لیست اقلام بارگزاری نشد."}
        // throw new Response (JSON.stringify({message:'لیست اقلام بارگزاری نشد'}), {status: 500,});
        return json({message:'مشخصات کالای مورد نظر بارگزاری نشد'},{status: 500})

    } else {

        return response;
    }

}