import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>

      <>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingname" label="Name">
          <Form.Control type="name" placeholder="name" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingTextarea2" label="Message">
          <Form.Control
            as="textarea"
            placeholder="Leave a message here"
            style={{ height: '100px' }}
          />
        </FloatingLabel>

      <Button as="input" type="submit" value="Submit" />
    


      </>
    </div>
  );
}
