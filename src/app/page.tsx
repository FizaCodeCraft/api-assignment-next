
import Link from "next/link";

export default async function Home() {
  const url = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await url.json();
  console.log(res);
  return (
    <main className='w-full  text-white  justify-center bg-gray-700'>
        <h3 className='mt-5 text-center text-xl'>Click on the postId for more Details!</h3>
      <br/>
      <br/>
       {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
         {res.map((post:any , index:number)=>(
          <div key={index}>
            <Link href={`${post.id}`}>
            <h1 className='text-6xl'>
							{post.id}
						</h1>
            </Link>
          </div>
          ))};
    </main>
  );
}
