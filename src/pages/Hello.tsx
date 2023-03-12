import { Card, Text } from "@nextui-org/react";
import "../App.css";
import UploadForm from "../components/UploadForm";



function Hello() {
  return (
    <div>
    <Card
      className="HelloCard"
      isHoverable
      css={{ mw: "400px", color: "grey", marginLeft: "auto", marginRight: "auto" }}
    >
      <Card.Header style={{marginLeft: "auto", marginRight: "auto"}}>Welcome To Aloha</Card.Header>
      <Card.Divider />

      <Card.Body>
        <Text className="t">Export a Whatsapp group chat and upload it</Text>
      </Card.Body>
    </Card>
    <UploadForm />
    </div>
  );
}

export default Hello;
