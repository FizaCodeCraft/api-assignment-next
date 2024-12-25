type Props = {
    params: {
        id: number; 
        title: string;
        body: string;
    };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Dynamicpage = async ({ params }: Props) => {
    const url = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const res = await url.json();
    console.log("Post Id:",res);

    return (
        <h1 className='pl-5 text-2xl bg-orange-500 justify-center'>
			Books Id:{params.id} <br /> <br />
			Books title:{res.title} <br /> <br />
            Books Body:{res.body} <br />
		</h1>
    )

}

export default Dynamicpage;