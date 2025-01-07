// export default async  function UserName({params}:{
//     params:{name:string}
// }){
// const {name}= await params;
// return(
//     <>
//     <h1>{name}</h1>
//     </>
// )
// }
//Normal implementation now adding dynamic metadata
import { Metadata } from "next";
type Props = {
  params: {
    name: string;
  };
};
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: params.name,
  };
};
export default function Username() {
  return (
    <>
      <h1>about user login</h1>
    </>
  );
}
