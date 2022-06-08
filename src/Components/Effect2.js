import React, { useState, useEffect } from 'react'
// import { useEffect } from 'react/cjs/react.production.min'
import '../style2.css'
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
        <h3>Explore More and Connect More!</h3>
            <div className='container-fluid mt-5'>
                <div className='row text-center'>{
                    name.filter((user,index)=> index<6).map((user) => (
                        <div className='col-12 col-md-2 '>
                            <div class="card2 p-2">
                                <div class="d-flex align-items-center">
                                    <div class="image2"><img src={user['user']['profilePic']} class="rounded2" width="55"></img>
                                        <div class="textCenter"><p class="gender">Gender: {user['user']['gender']}</p></div>
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