import React from 'react'
import "./Rightbar.css"
import dummyData, { Users } from '../../dummyData';
import Online from '../online/Online';
function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="/assets/post/gift.JPG" className="birthdayImg" alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends </b> have birthday today
                    </span>
                </div>
                <img className="righrbarAd" src="assets/post/vessel.JPG" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (<Online key={u.id} user={u} />))}
                </ul>
            </>
        )


    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>

                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>

                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>

                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                   <div className="rightbarFollowing">
                     <img src="assets/person/1.jpeg" className="rightbarbarFollowingImg" alt="" />
                     <span className="rightbarFollowingName">John</span>
                   </div>

                   <div className="rightbarFollowing">
                     <img src="assets/person/2.jpeg" className="rightbarbarFollowingImg" alt="" />
                     <span className="rightbarFollowingName">John</span>
                   </div>

                   <div className="rightbarFollowing">
                     <img src="assets/person/3.jpeg" className="rightbarbarFollowingImg" alt="" />
                     <span className="rightbarFollowingName">John</span>
                   </div>

                   <div className="rightbarFollowing">
                     <img src="assets/person/4.jpeg" className="rightbarbarFollowingImg" alt="" />
                     <span className="rightbarFollowingName">John</span>
                   </div>

                   <div className="rightbarFollowing">
                     <img src="assets/person/5.jpeg" className="rightbarbarFollowingImg" alt="" />
                     <span className="rightbarFollowingName">John</span>
                   </div>

                   <div className="rightbarFollowing">
                     <img src="assets/person/6.jpeg" className="rightbarbarFollowingImg" alt="" />
                     <span className="rightbarFollowingName">John</span>
                   </div>

                   <div className="rightbarFollowing">
                     <img src="assets/person/7.jpeg" className="rightbarbarFollowingImg" alt="" />
                     <span className="rightbarFollowingName">John</span>
                   </div>
                   <div className="rightbarFollowing">
                     <img src="assets/person/8.jpeg" className="rightbarbarFollowingImg" alt="" />
                     <span className="rightbarFollowingName">John</span>
                   </div>

                   
                   
                </div>

            </>
        )
    }

    return (
        <div className="right">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> :<HomeRightbar/>}
            </div>
        </div>
    )
}

export default Rightbar
