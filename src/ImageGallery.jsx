import avatara from '/avatara.jpg';
import avatarb from '/avatarb.jpg';
import avatarc from '/avatarc.jpg';
import arrowDownRight from '/arrowDownRight.svg';
import snow from '/snow.svg';

function ImageGallery() {
    let url = "";
    return (
        <>
        <div className="creative-image">
            <div className="box">
                <p className="box-number"><span>01</span></p>
                <div className="box-text">
                    <div className="box-text-image">
                        <img src={avatara} alt="avatar image"/>
                        <img src={avatarb} alt="avatar image"/>
                        <img src={avatarc} alt="avatar image"/>
                    </div>
                    <p>Learn from best mentors</p>
                    <a href={url}>
                        <span>start learning</span>
                        <img className='filter-white' src={arrowDownRight} alt="arrowDownRight icon"/>
                    </a>
                </div>
            </div>
            <div className="box">
                <p className="box-number"><span>02</span></p>
                <div className="box-option">
                    <a href={url}>
                        <span>Free Edit</span>
                        <img className='filter-white' src={arrowDownRight} alt="arrowDownRight icon"/>
                    </a>
                    <a href={url}>
                        <span>Interactive</span>
                        <img className='filter-white' src={arrowDownRight} alt="arrowDownRight icon"/>
                    </a>
                    <a href={url}>
                        <span>Easy Interface</span>
                        <img className='filter-white' src={arrowDownRight} alt="arrowDownRight icon"/>
                    </a>
                    <a href={url}>
                        <span>Compare to other</span>
                        <img className='filter-white' src={arrowDownRight} alt="arrowDownRight icon"/>
                    </a>
                </div>
            </div>
            <div className="box">
                <p className="box-number"><span>03</span></p>
                <div className="box-subTitle">
                    <span>+20K</span>
                    <p>Glass Pattern generated this week in the first release.</p>
                    <img className='filter-white' src={snow} alt="snow icon"/>
                </div>
            </div>
        </div>
        </>
    );
}

export default ImageGallery;