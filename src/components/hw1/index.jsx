import Post from "./post";
import { FaHeart, FaRetweet, FaComment, FaRegArrowAltCircleDown} from "react-icons/fa";

const ANAKIN_IMAGE = "https://static1.personality-database.com/profile_images/0bee799c000d49c2b5719bb60dce8a68.png";

const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const data = [
  {
    author: {
        name: "Anakin skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader",
    },
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "26 Febr.",
    chat: <FaComment />,
    repost: <FaRetweet />,
    like: <FaHeart />,
    download: <FaRegArrowAltCircleDown />,
},
  {
    author: {
        name: "Anakin skywalker",
        photo: ANAKIN_IMAGE,
        nickname: "@dart_vader",
    },
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
    date: "26 Febr.",
    chat: <FaComment />,
    repost: <FaRetweet />,
    like: <FaHeart />,
    download: <FaRegArrowAltCircleDown />,
},
  {
    author: {
        name: "Vlastyslav Simonov",
        photo: ANAKIN_IMAGE,
        nickname: "@vlastyslavs",
    },
    content: "WTF? Who is Tommy? Why she is a barber? Sophie...?",
    image: RAY_IMAGE,
    date: "26 Febr.",
    chat: <FaComment />,
    repost: <FaRetweet />,
    like: <FaHeart />,
    download: <FaRegArrowAltCircleDown />,
},
];


const Blog = () => {
    
    return (
    <>
    <h2>Blog</h2>
    {data.map((item, i) => 
        <Post post={item} key={i}/>     
      )}
    </>
    )
}

export default Blog