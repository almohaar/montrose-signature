interface ReviewProps {
    review: {
      id: number
      author: string
      comment: string
      rating: number
    }
  }
  
  const Review = ({ review }: ReviewProps) => {
    return (
      <div className="border p-4 rounded-md shadow-sm">
        <h4 className="font-bold">{review.author}</h4>
        <p className="text-yellow-500">⭐ {review.rating}</p>
        <p className="text-gray-700">{review.comment}</p>
      </div>
    )
  }
  
  export default Review
  