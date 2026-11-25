import Button from "../atoms/Button";
import Text from "../atoms/Text";
import "./Pagination.css";

function Pagination({ label, hasPrevious, hasNext, onPrevious, onNext }) {
  return (
    <nav className="pagination" aria-label="Pagination">
      <Button variant="secondary" disabled={!hasPrevious} onClick={onPrevious}>
        ← Previous
      </Button>
      <Text as="span" variant="strong">{label}</Text>
      <Button variant="secondary" disabled={!hasNext} onClick={onNext}>
        Next →
      </Button>
    </nav>
  );
}

export default Pagination;
