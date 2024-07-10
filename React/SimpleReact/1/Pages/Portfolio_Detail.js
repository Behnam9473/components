import { useParams } from 'react-router-dom';
import { useRouteLoaderData, json } from "react-router-dom"


function Portfolio_Detail(){
    const params = useParams();
    const data = useRouteLoaderData('company-portfolio');
    console.log(data)


    return(
        <div>

            <h1> detail{1}</h1>
            <p>{params.sId}</p>
        </div>
    )
}

export default Portfolio_Detail


export async function loader({request, params}) {
  
    const id = params.pId
    const na = request.name
    const response = await fetch('http://localhost:8000/companies');
  
    if (!response.ok) {
        // return {isError:true, message:"لیست اقلام بارگزاری نشد."}
        // throw new Response (JSON.stringify({message:'لیست اقلام بارگزاری نشد'}), {status: 500,});
        return json({message:'مشخصات کالای مورد نظر بارگزاری نشد'},{status: 500})
  
    } else {
  
        return response;
    }
  
  }