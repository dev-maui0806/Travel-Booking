'use client'; // Mark this as a Client Component

import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import Button from '@/components/ui/Button';
import { submitMockBooking } from '@/lib/mockData'; // Updated import

// Separate component for the form that uses useSearchParams
function BookingForm() {
  const searchParams = useSearchParams();
  const tourId = searchParams ? searchParams.get('tourId') : null;
  const tourName = searchParams ? (searchParams.get('tourName') || 'Selected Tour') : 'Selected Tour';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    numTravelers: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState<string | null>(null); // For error messages

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'numTravelers' ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage(null);

    try {
      const bookingPayload = {
        ...formData,
        tourId: tourId,
        tourName: tourName, // Include tour name for context
      };

      const result = await submitMockBooking(bookingPayload); // Call mock function

      if (!result.success) {
        throw new Error(result.message || 'Failed to submit mock booking');
      }

      setSubmitStatus('success');
      // Optionally clear the form
      // setFormData({ name: '', email: '', phone: '', date: '', numTravelers: 1 }); 
    } catch (error) {
      console.error('Error submitting mock booking:', error);
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : 'An unknown error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Book: {tourName}</h1>

      {submitStatus === 'success' ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Your mock booking request has been submitted.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
          {submitStatus === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {submitMessage || 'Could not submit booking. Please try again later.'}</span>
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel" 
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferred Tour Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="numTravelers" className="block text-sm font-medium text-gray-700">Number of Travelers</label>
            <input
              type="number"
              id="numTravelers"
              name="numTravelers"
              value={formData.numTravelers}
              onChange={handleChange}
              min="1" 
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              disabled={isSubmitting}
            />
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
          </Button>
        </form>
      )}
    </div>
  );
}

// Main page component that provides the Suspense boundary
export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading booking form...</div>
      </div>
    }>
      <BookingForm />
    </Suspense>
  );
} 