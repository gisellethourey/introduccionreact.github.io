import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
 
const Tags =({color, textBadge}) => {
    return (
        <>
        <Stack direction="horizontal" gap={2}>
        <Badge style={{ width: "200px", justifyContent: "center" }}bg= {color}> {textBadge}</Badge>
      </Stack>
      </>
    );
  }
  export default Tags;