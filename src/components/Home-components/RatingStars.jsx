// ✅ Replace RatingStars entirely — no react-icons needed
export default function RatingStars({ rating }) {
  return (
    <div
      className="flex gap-0.5 text-yellow-400 text-base"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i}>
          {i <= Math.floor(rating) ? "★" : i - rating < 1 ? "½" : "☆"}
        </span>
      ))}
    </div>
  );
}
