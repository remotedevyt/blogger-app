import React, { useEffect, useState } from 'react';
import Blogcard from '../components/Blogcard';
import { getBlogs } from '../api/Api';
import { useSearchParams } from "react-router-dom";

const Home = () => {

    let [searchParams, setSearchParams] = useSearchParams();
    const [blogs,setBlogs] = useState(null);

    useEffect(() => {
        async function fetchData(){
            const allBlogs = await getBlogs();
            setBlogs(allBlogs.data);
        }
        fetchData();
    },[]);

    useEffect(() => {
        async function fetchData(){
            const allBlogs = await getBlogs(searchParams.get('category'));
            setBlogs(allBlogs.data);
        }
        fetchData();
    },[searchParams]);

    const data = [
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/200/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/208/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/207/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/206/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/205/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/204/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/203/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/202/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
        {
            title:'Is it worth investing in real estate ? Advantages and disadvantages',
            image:'https://picsum.photos/id/201/300/200',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
            createdon:'24 Jan, 2024',
            comments:'0'
        },
    ]
    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {blogs && blogs.map((x,i) => {
                    return <Blogcard key={i} blogdata={x} />
                })}
                
            </div>
        </div>
    );
}

export default Home;
