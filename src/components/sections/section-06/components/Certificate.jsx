import PropTypes from "prop-types";
import styled from "styled-components";


const CertificateImage = styled.img`
  min-height: 10vh;
  max-height: 30vh;
  border-radius: 10px;
  
  box-shadow: #bac8fb 1px 1px 5px;
`


Certificate.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    clickUrl: PropTypes.string.isRequired,
};

export function Certificate({name, imageUrl, clickUrl}) {
    return (<>
        <div style={{
            display: "flex", justifyContent: "center",
            alignItems: "center", padding: "1rem",
            minHeight: "100%",
        }}>
            <a target={'_blank'} href={clickUrl}>
                <CertificateImage src={imageUrl} />
            </a>
        </div>
    </>);
}


