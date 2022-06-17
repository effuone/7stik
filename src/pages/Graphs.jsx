import React, { useState } from "react";
import LineChart from "../components/LineChart";
import MyButton from "../components/UI/button/MyButton";
import DataPostForm from "../components/DataPostData";
import MyModal from "../components/UI/modal/MyModal";
import { Doughnut } from 'react-chartjs-2';

const Graphs = () => {
    const [modal, setModal] = useState(false)
    const [data, setData] = useState([
        {
          id: 1,
          year: 2016,
          userGain: 80000,
          userLost: 823,
        },
        {
          id: 2,
          year: 2017,
          userGain: 45677,
          userLost: 345,
        },
        {
          id: 3,
          year: 2018,
          userGain: 78888,
          userLost: 555,
        },
        {
          id: 4,
          year: 2019,
          userGain: 90000,
          userLost: 4555,
        },
        {
          id: 5,
          year: 2020,
          userGain: 4300,
          userLost: 234,
        },
        {
          id: 6,
          year: 2021,
          userGain: 85648,
          userLost: 642,
        },
      ])
    const [userData, setUserData] = useState({
        labels: data.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
    console.log(userData.datasets.data)
    const createPoint = (newPoint) =>{
      const newData = {
        'id': 7,
        'year': parseInt(newPoint.year),
        'userGain': parseInt(newPoint.userGain),
        'userLost': parseInt(newPoint.userLost)
      }
        setData([...data, newData])
        const userData = [...data];
        userData.push(newData);
        console.log(userData)
        setUserData(state => ({
          ...state,
          datasets: [{
            ...state.datasets,
            data: userData
          }
          ]
        }))
        setModal(false)
    }
    
    // const removePoint = (post) => {
    //     setPosts(posts.filter(p=>p.id !== post.id))
    // }
    
    // const changePage = (page)=>{
    //     setPage(page)
    //     fetchPosts(limit,page)
    // }

    return (
        <div style={{marginTop: 70}}>
            <div style={{ width: 700 }}>
                <LineChart chartData={userData} />
            </div>
            <MyButton style={{marginTop:30}}onClick={()=> setModal(true)}>
                Добавить товар
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <DataPostForm create={createPoint}/>
            </MyModal>
        </div>
    )
}
export default Graphs