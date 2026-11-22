import Button from "../atoms/Button";
import Text from "../atoms/Text";
import "./Pagination.css";

function Pagination({ page, hasNext, hasPrevious, onPageChange }) {
  return (
    <nav className="pagination" aria-label="Pagination">
      <Button variant="secondary" disabled={!hasPrevious} onClick={() => onPageChange(page - 1)}>
        ← Previous
      </Button>
      <Text as="span" variant="muted">Page {page}</Text>
      <Button variant="secondary" disabled={!hasNext} onClick={() => onPageChange(page + 1)}>
        Next →
      </Button>
    </nav>
  );
}

export default Pagination;
