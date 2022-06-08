import React, { useState, useEffect } from 'react'
// import { useEffect } from 'react/cjs/react.production.min'
import '../style.css'
const Effect = () => {
    const [name, setName] = useState([]);
    // const [bio, setBio] = useState("");
    // const [img, setImg] = useState("");
    // const [gender, setGender] = useState("");
    // const [title, setTitle] = useState("");


    useEffect(() => {
        const url = "https://api.facthunt.in/fostergem/v1/post/list/public";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setName(json.content);

                // for(let i=0;i<20;i++)
                // {
                //     console.log(json.content[0]['title']);
                //     setName(json.content[i]['user']['fname']);
                //     setBio(json.content[i]['user']['bio']);
                //     setImg(json.content[i]['user']['profilePic']);
                //     setGender(json.content[i]['user']['gender']);
                //     setTitle(json.content[i]['title']);
                // }
                console.log(name[0]);

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className='container-fluid mt-5' class="body2">
                <div className='row text-center'>{
                    name.map((user) => (
                        <div className='col-12 col-md-5 mt-5 ml-5'>
                            <div class="card p-2">
                                <div class="d-flex align-items-center">
                                    <div class="image"><img src={user['user']['profilePic']} class="rounded" width="155"></img></div>
                                    <div class="ml-3 w-100">
                                        <h4 class="mb=0 mt-0 textLeft">{user['user']['fname']}</h4><span class="textLeft"></span>
                                        <div class="d-flex flex-column"><p class="gender">Gender: {user['user']['gender']}</p></div>
                                        <div class="d-flex flex-column"><p class="title">Title: {user['title']}</p></div>
                                       <div class="flex">
                                        <div class="d-flex flex-row"><img src="https://i.postimg.cc/KYmZBKxr/arrow-up.png" class="bio"></img>: {user['user']['userId']}</div>
                                        <div class="d-flex flex-row"><img src="https://i.postimg.cc/QCZ9L8c6/comment.png" class="bio"></img>: {user['user']['userId']}</div>
                                        <div class="d-flex flex-row"><img src="https://i.postimg.cc/qMLtYdqL/eye.png" class="bio"></img>: {user['user']['userId']}</div>
                                   </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                    )
                }


                </div>

            </div>

        </>
    )
}

export default Effect