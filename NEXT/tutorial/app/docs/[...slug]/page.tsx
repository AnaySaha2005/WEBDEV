export default function Page({params}:{//receives a default parameter
    params:{//definide datatype of the parameters in params
        slug:string[];
    }
}) {
    return(
        <>
        <div>
            <h2>{params.slug}</h2>
        </div>
        </>
    )
}