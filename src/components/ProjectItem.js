import {Col} from "react-bootstrap"

export const ProjectItem = ( {title, desc, imgURL } ) => {
    return (
        <Col sm={6} md = {4}>
            <div className="proj-item-img">
                <img src={imgURL} />
                <div className="proj-text">
                    <h4>{title}</h4>
                    <span>{desc}</span>
                </div>
            </div>
        </Col>
    )




}