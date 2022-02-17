import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RemoveDev from "../Modal/RemoveDev";
import UpdateDev from "../Modal/UpdateDev";
import VerDev from "../Modal/VerDev";

function Card(props) {

    return (
        <div className="card">
            <img style={{ width: '70%', maxWidth: '160px', maxHeight: '160px', marginTop: '15px' }} src={props.imgUrl}
                alt={props.alt || 'Image'} />
            <div className="card-content">
                <h2 style={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    width: '100%', maxHeight: '160px'
                }}>{props.nome}</h2>
                <p>{props.cargo}</p>
                <div>
                    <div className='one-card'>
                        <a target="_blank" rel="noopener noreferrer" style={{ color: 'inherit'}} href={props.linkedin}><FontAwesomeIcon style={{ marginRight: '10px', target:"_blank" }} icon={faLinkedin} /></a>
                        <a target="_blank" rel="noopener noreferrer" style={{ color: 'inherit'}} href={props.github}><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                    <div>
                        <VerDev
                            id={props.id}
                            github={props.github}
                            linkedin={props.linkedin}
                            key={props.id}
                            cargo={props.cargo}
                            title={props.nome}
                            content={props.cargo}
                            nome={props.nome}
                            imgUrl={props.imgUrl}
                        />
                        <div style={{ paddingLeft: '20px', width: '100%' }}>
                            <UpdateDev
                                id={props.id}
                                github={props.github}
                                linkedin={props.linkedin}
                                key={props.id}
                                cargo={props.cargo}
                                title={props.nome}
                                content={props.cargo}
                                nome={props.nome}
                                imgUrl={props.imgUrl}
                                onSubmitUpdateDev={props.onSubmitUpdateDev}
                            />
                            <RemoveDev onSubmitDeleteDev={props.onSubmitDeleteDev} id={props.id} />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Card;