import Text from "../atoms/Text";
import "./InfoRow.css";

function InfoRow({ label, value }) {
  return (
    <div className="info-row">
      <Text as="span" variant="muted">{label}:</Text>
      <Text as="span" variant="strong">{value}</Text>
    </div>
  );
}

export default InfoRow;
