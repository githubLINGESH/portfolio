const reviews = [
  { client: 'John Doe', feedback: 'Excellent work! Delivered the project ahead of schedule.' },
  { client: 'Jane Smith', feedback: 'Very professional and skilled developer, highly recommended!' }
];

const ClientReviews = () => (
  <section id="client-reviews" className="py-20 bg-gray-50" style={{ background: "black", fontFamily:"League Spartan"}}>
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="text-4xl font-bold text-center text-white mb-10">Client Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-5">
            <p className="text-gray-700 italic">"{review.feedback}"</p>
            <p className="text-gray-600 mt-4 font-bold text-right">- {review.client}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientReviews;
