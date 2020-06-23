import React from "react";
import Coverflow from "react-coverflow";
import image from "../../photos/emptyImg.png";
import song from "../../photos/song.jpeg";
import black from "../../photos/black.jpeg";
import boy from "../../photos/boy.jpeg";
import candle from "../../photos/candle.jpeg";
import qubes from "../../photos/qubes.jpeg";
import rose from "../../photos/rose.jpeg";
import Posts from "../MainSection/Post/Posts";




export default class PhotosFlow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // user: this.props.user,
            // logedIn: this.props.logedIn
        }
    }

    fn = () => {
        /* do you want */
    }

    render() {
        return (
            <div>
                <Coverflow
                    width={960}
                    height={480}
                    displayQuantityOfSide={2}
                    navigation={false}
                    enableHeading={false}
                >
                    {/*<Posts/>*/}
                    {/*<div*/}
                    {/*    onClick={this.fn}*/}
                    {/*    onKeyDown={this.fn}*/}
                    {/*    role="menuitem"*/}
                    {/*    tabIndex="0"*/}
                    {/*>*/}
                    {/*    <img*/}
                    {/*        src={image}*/}
                    {/*        alt='title or description'*/}
                    {/*        style={{ display: 'block', width: '100%' }}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <img src={song} alt='title or description'/>
                    <img src={black} alt='title or description'/>
                    <img src={boy} alt='title or description'/>
                    <img src={candle} alt='title or description'/>
                    <img src={qubes} alt='title or description'/>
                    <img src={rose} alt='title or description'/>
                </Coverflow>
            </div>
        );
    }
}

