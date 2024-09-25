import React, {useEffect, useState} from 'react'
import { BlogCard } from './BlogCard'
import data from '../data/insights.json';
import urls from '../data/references.json';
import axios from 'axios';

export function Insights(props) {
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${urls['medium-userName']}`)//healthclinicwithesta
        .then(response => {
            console.log('medium',response.data);
            const articles = response?.data?.items?.slice(0, 4)
            .map(post => ({
            title: post.title,
            description: post.description
                .replace(/<[^>]*>/g, '') // Remove HTML tags
                .replace(/\n/g, ' ') // Remove newline characters
                .split(' ')
                .slice(0, 30)
                .join(' ')
                .trim() + '...', // Limit to 30 words
            url: post.link
            })) || [];
    setArticles(articles);
  })
  .catch(error => {
    console.error('Error:', error);
  });
    },[])
    // useEffect(() => {
    //     // Scroll the video container to the right on component mount
    //     const videoContainer = document.getElementById('video-container');
    //     if (videoContainer) {
    //       videoContainer.scrollLeft = videoContainer.scrollWidth;
    //     }
    //   }, []);
    return (
        <section className=" w-screen bg-light relative z-0 py-20 px-5 md:px-20 flex flex-col gap-8">
                <h3 className='font-black text-dark text-2xl'>{data.title}</h3>
                <p>{data.subtitle}</p>
                <div className='grid grid-flow-col gap-8 overflow-x-scroll max-w-screen'>
                    {articles.map((blog,index)=>{
                        return (<BlogCard key={index} url={blog.url} className="w-[250px] sm:w-[400px] md:w-[500px]" title={blog.title} type={index%2===0?'bg-dark':'bg-light'} description={blog.description} />)
                    })}

                </div>
                <div id="video-container" className='grid grid-flow-col gap-8 overflow-x-scroll max-w-screen'>
                    {
                        data.videos.map((video,index)=>{
                            return (
                                <div className='overflow-hidden rounded-[25px] w-[250px] sm:w-[400px] md:w-[500px] h-fit' key={index}>
                                <iframe className='w-[250px] sm:w-[400px] md:w-[500px]' height={250}  src={video} frameBorder="0" title={index}></iframe>
                                </div>
                            )
                        })
                    }
                </div>
        </section>
    )
}
