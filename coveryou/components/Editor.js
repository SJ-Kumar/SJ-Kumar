import dynamic from "next/dynamic"
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import Container from "./wrapper/Container";

const Editor = ({value, onChange}) => {
  return (
    <Container className="">
        <ReactQuill
            theme="snow"
            value={value}
            onChange={onChange}
            className="text-lg"
        />
    </Container>
  )
}

export default Editor