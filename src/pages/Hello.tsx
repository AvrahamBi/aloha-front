import { Card, Text } from "@nextui-org/react";
import "../App.css";
export default function App() {
  return (
    <Card className="HelloCard" isHoverable css={{ mw: "400px", color: "grey"}}>
        <Card.Header>Hello to Aloha</Card.Header>
        <Card.Divider/>
      <Card.Body>
        <Text className="t">Please upload a group chat txt file</Text>
        
      </Card.Body>
    </Card>
  );
}