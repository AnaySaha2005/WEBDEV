import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  //receives a default parameter
  params: {
    //definide datatype of the parameters in params
    slug: string[];
  };
}) {
  const { slug } = await params;//to remove async error

  return (
    <>
      <div>{slug}</div>
      {slug.length > 2 ? notFound()
      //overriden notFound must be at file's parent directory
       : <></>}
    </>
  );
}
