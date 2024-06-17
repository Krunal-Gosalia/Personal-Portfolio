import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import fetchDreamAPI from './fetchDreamApi';
import './dream.css';

function Dream() {
    const [description, setDescription] = useState("");
    const [submitStatus, setSubmitStatus] = useState("Submit");
    const [dreamAnalysis, setDreamAnalysis] = useState(null);
    const [imageUrl, setImageUrl] = useState("")

    const responseGenerate = async (inputText) => {
        try {
            const result = await fetchDreamAPI(inputText);
            setDreamAnalysis(result.analysis);
            setImageUrl(result.imageURL);
            setSubmitStatus("Submit");
        }
        catch (e) {
            console.error("Something went wrong!")
        }
    };

    async function submitDescription() {
        setSubmitStatus("Waiting");
        responseGenerate(description);
    }
    return (

        <Container className='dream-container'>
            <Row>
                <textarea
                    value={description}
                    placeholder="Tell me your dream"
                    onChange={e => setDescription(e.target.value)}
                    className="dream-description"
                />
            </Row>
            <Row className="justify-content-center mt-2">
                <button onClick={submitDescription} className='submit-button'>
                    {submitStatus}
                </button>
            </Row>
            <Row className="mt-2 dream-analysis-row">
                <Col lg="8" sm="12" >
                    {dreamAnalysis &&
                        <p className="dream-analysis py-4">
                            {dreamAnalysis}
                        </p>
                    }
                </Col>
                <Col lg="4" sx="12" >
                    {imageUrl && <img src={imageUrl} className='py-4' alt="Loaded" />}
                </Col>

            </Row>

        </Container>
    );
}

export default Dream;